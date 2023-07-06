const Discord = require("discord.js");
const bot = new Discord.Client();
require("dotenv").config();

var fs = require("fs");
const token = fs.readFileSync("api_key").toString('utf-8');
const obj = require("./embed.js");

bot.on("ready", () => {
	console.log("This bot is online");
});

bot.on("message", (msg) => {
	if (msg.content[0] === "$") {
		let content = msg.content.slice(1).toLowerCase().replace(/\s+/g, "");

		if (obj[content]) {
			msg.reply(obj[content]);
		}
	}
});

bot.login(token);
