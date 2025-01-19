var jimp = require("jimp");
const Discord = require("discord.js");
const bot = new Discord.Client({intents:3276799});
require("dotenv").config();

const testing = false;

var fs = require("fs");
const token = fs.readFileSync("api_key").toString('utf-8');
const obj = require("./embed.js");

const kankaKeys = fs.readFileSync("kanka_key").toString('utf-8').split("\n");
const kankaCampaignId = kankaKeys[0];
const kankaToken = kankaKeys[1];

const repoURL = 'https://github.com/therekha/Blades/blob/master';

bot.on("ready", () => {
	console.log("This bot is online");
});

const embedReply = (message) =>{
	return new Discord.MessageEmbed()
	.setColor('#412132')
	.setDescription(message);
}

const pullBargain = () => {
	result = Math.floor(Math.random() * 50 + 1);
	imageLink = repoURL + '/embeds/DB/DevilsBargain-'
	 + result.toString() + '.png?raw=true'
	return embedReply('You pull a devil\'s bargain!')
		.setImage(imageLink);

}

const searchKanka = async (query, msg) => {
	const response = '';
	try{
		response = await fetch('https://kanka.io/api/1.0/campaigns/' + 
										kankaCampaignId + '/search/' + query,
										{headers: {
											"Authorization": "Bearer " + kankaToken,
											"Content-Type": "application/json",
										}});
		const myJson = await response.json(); //extract JSON from the http response
		// do something with myJson
		if(myJson.data.length === 0){
			msg.reply(
				embedReply('Kanka entity not found!')
			);
		}
		else if(myJson.data.length > 10){
			msg.reply(
				embedReply('Too many results, please be more specific.')
			);
		}
		else{
			replyString = "";
			myJson.data.forEach(element => {
				msg.reply(element.urls.view)	
			});
		}
	}
	catch(err){
		msg.reply(embedReply('Error connecting to Kanka!' + response))
	}
  }

const roll = {
	//Parsing the user's string. Obtaining dice number (max 20), resist bool, comment.
	parse(content) {
		const data = {};

		data.statement = content;
		
		//Comment handing
		data.comment = ""; //Avoids concat "undefined" with "\n I'm limited...."
		if (content.includes("/")) {
			data.comment = "\n/ " + content.slice(content.indexOf("/") + 1) || "";
		}

		//Calculates number of dice to roll.
		data.diceToRoll = Number(/^\d+/.exec(content)); //Number must immediately follow !, can be many digits.

		//Resist checker
		if (data.statement.toLowerCase().includes("r")) {
			data.resist = true;
		}

		finalData = this.roller(data);
		return this.commenter(finalData);
	},

	//Generates random numbers
	roller(data) {
		//Rolling dice into data.rolls[]
		data.rolls = [];
		data.pics = []
		data.index = 0;
		data.result = 0;

		if (data.diceToRoll > 20) {
			data.diceToRoll = 20;
			data.comment +=
				"\nI'm limited to rolling 20 dice at a time. I hope you don't mind!";
		}
		data.dice = data.diceToRoll || 2; //Handles 0d rolls.

		console.log(data.dice);
		for (i = 1; i <= data.dice; i++) {
			//THIS IS THE ROLL
			data.rolls.push(Math.floor(Math.random() * 6 + 1));
			data.pics.push('');
		}

		console.log(data.diceToRoll);
		if (data.diceToRoll === 0) {
			return this.zeroHandle(data); //Roll 2d, take lowest
		} else {
			return this.manyHandle(data); //Take highest of data.rolls
		}
	},

	//Handling 0d rolls (roll 2, take lowest)
	zeroHandle(data) {
		const dicePicURL = 'embeds/dice_pics/'

		if (data.rolls[0] > data.rolls[1]) {
			data.pics[0] = dicePicURL + 'plain/'+ data.rolls[0].toString() + '.png';
			data.pics[1] = dicePicURL + 'gold/'+ data.rolls[1].toString() + '.png';

			data.result = data.rolls[1];
			data.rolls[1] = `**${data.result}**`;
		} else {
			data.pics[1] = dicePicURL + 'plain/'+ data.rolls[1].toString() + '.png';
			data.pics[0] = dicePicURL + 'gold/'+ data.rolls[0].toString() + '.png';

			data.result = data.rolls[0];
			data.rolls[0] = `**${data.result}**`;
		}

		return data;
	},

	//Default roll handler
	manyHandle(data) {
		const dicePicURL = 'embeds/dice_pics/'
		data.rolls.forEach((value, index) => {
			if (value > data.result) {
				//Stores highest roll + the index of it.
				data.result = value;
				data.index = index;
			} else if (value === 6 && data.result === 6) {
				//Bolds duplicate 6s if they exist (crit handling).
				data.rolls[index] = "**6**";
				data.crit = true;
				data.pics[index] = dicePicURL + 'gold/'+ value.toString() + '.png'
			}
			if(value !== 6)
				data.pics[index] = dicePicURL + 'plain/'+ value.toString() + '.png'
		});
		data.rolls[data.index] = `**${data.result}**`; //Bolds the first occurence of highest roll.
		data.pics[data.index] = dicePicURL + 'gold/'+ data.result.toString() + '.png'

		return data;
	},

	//Formatting reply string.
	commenter(data) {
		let replyString = `[**${data.result}**] `;
		const dicePicURL = repoURL + '/embeds/dice_pics/'

		if (data.diceToRoll !== 1) {
			replyString += `from ${data.rolls.join(", ")}`; //Doesn't bother with displaying roll array if 1d.
		}

		if (data.comment) {
			replyString += data.comment;
		}

		if (data.resist) {
			//Resistance rolls
			if (data.crit) {
				replyString = `**Critical!** Recover 1 stress\n${replyString}`;
				data.pics.push(dicePicURL + 'critical.png');
			} else {
				replyString = `**Take ${6 - data.result} stress!**\n${replyString}`;
				data.pics.push(dicePicURL + 'success.png');
			}
		} 
		else if (data.entangling) {
			data.pics.push(dicePicURL + 'success.png');
			return {images: data.pics, text: replyString};
		}
		else {
			//Action rolls
			switch (true) {
				case data.crit:
					data.pics.push(dicePicURL + 'critical.png');
					break;
				case data.result === 6:
					data.pics.push(dicePicURL + 'success.png');
					break;
				case data.result >= 4:
					data.pics.push(dicePicURL + 'partial.png');
					break;
				case data.result <= 3:
					data.pics.push(dicePicURL + 'failure.png');
					break;
			}
		}

		return {images: data.pics, text: replyString};
	},

	entanglement(heat, wantedLevel) {
		// set "level" to determine the heat table column
		let heatTier = 1;
		if(heat < 4){
			heatTier = 0;
		}
		else if( heat > 5 ){
			heatTier = 2
		}


		let entanglementData = {
			diceToRoll: Number(wantedLevel),
			resist: false,
			entangling: true
		}

		let wantedResult = this.roller(entanglementData);

		let options = obj['entanglementTable'][heatTier][wantedResult.result - 1];

		console.log(wantedResult);

		let message = 'Choose 1: \n\n'
		options.forEach((value, index) => {
			message += `**${value}**\n${obj['entanglementDescriptions'][value]}\n\n`
		})
		let diceRes = this.commenter(wantedResult);
		return {images: wantedResult.pics, text: message + '\n'+ diceRes.text};
	},

	wanted(wantedLevel) {
		let wantedTier = 1;
		if(wantedLevel == 1){
			wantedTier = 0;
		}
		else if(wantedLevel > 3){
			wantedTier = 2
		}

		let wantedData = {
			dice: 1,
			resist: false,
			entangling: true
		}

		let wantedResult = this.roller(wantedData);

		let rollTier = 1;
		if(wantedResult.result < 4){
			rollTier = 0;
		}
		else if(wantedResult.result > 5){
			rollTier = 2;
		}

		let consequence = obj['wantedTable'][wantedTier][rollTier];

		let diceRes = this.commenter(wantedResult);
		return {images: wantedResult.pics, text: consequence + '\n'+ diceRes.text};
	}
};

const mergeDice = async(dicePics, msg, text) => {
	const thumbnail = dicePics.pop();
	
	var jimps = [jimp.read('embeds/canvas.png')]
	dicePics.forEach((image, i) => {
		jimps.push(jimp.read(image))
	});

	await Promise.all(jimps).then(function(data) {
		return Promise.all(jimps)
	}).then(async function(data){
		// --- THIS IS WHERE YOU MODIFY THE IMAGES --- \\
		if(dicePics.length < 5){
			width = dicePics.length * 100;
			height = 106;
		}
		else{
			width = 5 * 100;
			height = Math.ceil(dicePics.length/5) * 106
		}
		data[0].resize(width, height)
		data.forEach((pic, index) => {
			if(index !== 0){
			x = ((index-1)%5)*100
			y = Math.floor((index-1)/5)*106
			data[0].composite(data[index], x, y)
			}
		});
		data[0].resize(width/2, height/2, jimp.RESIZE_NEAREST_NEIGHBOR)
		await data[0].write('embeds/dice_pics/composite.png');
		const attachment = new Discord
                      .MessageAttachment('./embeds/dice_pics/composite.png', 'dice.png');

		msg.reply(
			new Discord.MessageEmbed()
				.setColor('#412132')
				.setThumbnail(thumbnail + '?raw=true')
				.setDescription(text)
				.attachFiles(attachment)
				.setImage('attachment://dice.png')
		).catch((error) => {
			console.log(error);
			msg.reply(
				"The bot had an error, which has been logged.\n*" +
					error.message +
					"*"
			);
		});
	});
}

bot.on("message", (msg) => {
	commandArray = msg.content.split(' ');
	command = commandArray[0].toLowerCase();
	const symbol = testing? "@" : "$";

	if(commandArray[0] === symbol + "entangle"){
		if(commandArray.length !== 3 || isNaN(commandArray[1]) || isNaN(commandArray[2])){
			msg.reply(embedReply('Format for entanglement roll is \` $entangle <heat> <wanted level> \`'))
		}
		else{
			let heat = commandArray[1];
			let wantedLevel = commandArray[2];
	
			if(wantedLevel > 4){
				msg.reply(embedReply(`Invalid wanted level!
				Format for entanglement roll is \` $entangle <heat> <wanted level> \``))
			}
			else{
				let reply = roll.entanglement(heat, wantedLevel);
				if(reply.images){
					mergeDice(reply.images, msg, reply.text);
				}
				else{
					msg.reply(embedReply(reply.text)).catch((error) => {
						console.log(error);
						msg.reply(
							"The bot had an error, which has been logged.\n*" +
								error.message +
								"*"
						);
					});
				}
			}
		}
	}
	else if(commandArray[0] === symbol + "wanted"){
		if(isNaN(commandArray[1])){
			msg.reply(embedReply('Format for wanted roll is \` $wanted <wanted level> \`'))
		}
		else{
			let wantedLevel = commandArray[1];
	
			if(wantedLevel > 4){
				msg.reply(embedReply(`Invalid wanted level!
				Format for entanglement roll is \` $wanted <wanted level> \``))
			}
			else{
				let reply = roll.wanted(wantedLevel);
				if(reply.images){
					mergeDice(reply.images, msg, reply.text);
				}
				else{
					msg.reply(embedReply(reply.text)).catch((error) => {
						console.log(error);
						msg.reply(
							"The bot had an error, which has been logged.\n*" +
								error.message +
								"*"
						);
					});
				}
			}
		}
	}
	else if (msg.content[0] === symbol) {
		let content = msg.content.slice(1).toLowerCase().replace(/\s+/g, "");

		if (obj[content]) {
			msg.reply(
					embedReply(obj[content])
				);
		}
		else if (!isNaN(content[0])) {
			let reply = roll.parse(content);
			if(reply.images){
				mergeDice(reply.images, msg, reply.text);
			}
			else{
				msg.reply(embedReply(reply.text)).catch((error) => {
					console.log(error);
					msg.reply(
						"The bot had an error, which has been logged.\n*" +
							error.message +
							"*"
					);
				});
			}
		}
		else if(content === 'db'){
			msg.reply(pullBargain());
		}
		else{
			msg.reply(
				embedReply('Command not recognized!')
			)
		}
	}
	// if(msg.content[0] + msg.content[1] === "k" + symbol){
	// 	query = msg.content.slice(2).toLowerCase();
	// 	searchKanka(query, msg);
	// }
});

bot.login(token);
