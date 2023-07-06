const Discord = require("discord.js");
const importObj = {
	...require("./embeds/character/actions.js"),
	...require("./embeds/character/charitems.js"),
	...require("./embeds/character/items.js"),
	...require("./embeds/character/vice_trauma.js"),

	...require("./embeds/charCrewCreation/char.js"),
	...require("./embeds/charCrewCreation/crew.js"),

	...require("./embeds/crew/advanceTierUpgrade.js"),
	...require("./embeds/crew/status.js"),

	...require("./embeds/procedures/activities.js"),
	...require("./embeds/procedures/downtime.js"),
	...require("./embeds/procedures/engagement.js"),
	...require("./embeds/procedures/entanglements.js"),

	...require("./embeds/references/districts.js"),
	...require("./embeds/references/glossary.js"),
	...require("./embeds/references/heritage.js"),
	...require("./embeds/references/names.js"),
};
for (let prop in importObj) {
	module.exports[prop] = importObj[prop];
}


module.exports.help = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Help")
	.setDescription(
		`### GLOSSARY HELP

**Procedures**
\` $engagement \` Describes the Engagement roll process.
\` $downtime \` Lists the phases for running Downtime (and the appropriate commands).
\` $activites \` Lists the options for downtime activities (and the appropriate commands).

**Character / Crew Creation**
\` $char \` and \` $crew \` List all character and crew creation steps respectively.

**Crew**
\` $advance \` Describes the process of handling crew advancement.
\` $tier \` Describes rep, hold and tier.
\` $upgrade \` Lists the benefits of the crew upgrades.
\` $status \` Describes faction status conditions.

**Character**
\` $actions \` Briefly describes each action. More info via \` $attune \`, \` $consort \`, etc.
\` $trauma \` Describes Trauma conditions.
\` $items \` Describes the standard items.
Special playbook items can be found by the name of the playbook: \` $cutter \`, \` $whisper \`, etc.

**References**
\` $names \` For example names.
\` $districts \` Lists districts and their commands.
\` $glossary \` Defines common terms.
\` $heritages \` Gives commands for heritages.

### DICE HELP`
	)
	.addFields(
		{
			name: `You say...`,
			inline: true,
			value: `\` !2 \`
		\` !3r \`
		\` !2r /comment \``,
		},
		{
			name: `To...`,
			inline: true,
			value: `Roll 2 d6s.
		Resistance roll of 3 d6s.
		Add a comment.`,
		},
		{
			name: `Show this message again:`,
			value: `\` !help \` `,
		},
		{
			name: `Basic mechanics`,
			value: `\` !dice \`
		\` !position \`
		\` !effect \`
		\` !group \``,
			inline: true,
		},
		{
			inline: true,
			name: `to help out`,
			value: `Lists how to get extra dice.
		Explains position & effect.
		Also works.
		Explains Group Actions`,
		},
		{
			name: `Devil's Bargain reference`,
			value: `\` !bargain \` Give a couple suggestions for Devil's Bargains.`,
		},
		{
			inline: true,
			name: `Consequence reference`,
			value: `\` !controlled \`
		\` !risky \`
		\` !desperate \``,
		},
		{
			inline: true,
			name: `Lists...`,
			value: `Controlled consequences
		Risky consequences
		Desperate consequences`,
		},
		{
			name: `Bot code credit!`,
			value: `[Blades in the Glossary](https://github.com/jordanclarkedev/Blades-in-the-Glossary/blob/master/README.md), [Blades in the Dicebot](https://github.com/jordanclarkedev/bitdicebot/blob/master/README.md)`,
		}
	);

module.exports.position = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("What's your Position & Effect?")
	.setDescription(
		`Position and Effect are important to discuss with your GM. 
	They can be thought of as 'risk' versus 'reward'; they describe how rewarding success will be, and the consequences you're risking.`
	)
	.addFields(
		{
			name: `Position...`,
			inline: true,
			value: `Controlled
		Risky
		Desperate`,
		},
		{
			name: `Effect...`,
			inline: true,
			value: `Great
		Standard
		Limited
		`,
		}
	);

module.exports.effect = module.exports.position;

module.exports.dice = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Want extra dice?")
	.setDescription(
		`You can gain extra dice for your roll. Push yourself, ask crewmembers for an assist, or the GM for a Devil's Bargain... Or you can ask me about Group Actions with !group`
	)
	.addFields(
		{
			name: `Gain dice by...`,
			inline: true,
			value: `Pushing Yourself
		Assists
		Devil's Bargain`,
		},
		{
			name: `At the cost of...`,
			inline: true,
			value: `Take two stress
		They take one stress
		Ask your GM for details`,
		}
	);

module.exports.group = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Group Actions")
	.setDescription(
		`Teamwork makes the dreamwork! Pick one person to lead your group action. Anyone who wants to partake in the action can roll, and the highest result counts for the entire group! Anyone who fails (1-3) makes the leader suffer 1 stress`
	)
	.addFields({
		name: `A word of caution...`,
		value: `If the group action results in consequences, the entire group may suffer the consequences; an easy way to TPK, if you're not cautious.`,
	});

module.exports.controlled = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Controlled Consequences")
	.setDescription(
		`Don't worry, you can always resist consequences to lower the severity of them!`
	)
	.addFields(
		{
			name: `Stop!`,
			value: `Reduced Effect:
		Worse Position:
		Lost Opportunity:
		Complication:
		Harm:`,
			inline: true,
		},
		{
			name: `You violated the law!`,
			value: `-1 effect level
			-1 position (can try again if failure)
			Try again with a new action rating.
			Immediate problem, 1 tick or +1 Heat.
			Lesser Harm (level 1)`,
			inline: true,
		}
	);

module.exports.risky = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Risky Consequences")
	.setDescription(
		`Don't worry, you can always resist consequences to lower the severity of them!`
	)
	.addFields(
		{
			name: `Stop right there,`,
			value: `Reduced Effect:
		Worse Position:
		Lost Opportunity:
		Complication:
		Harm:`,
			inline: true,
		},
		{
			name: `criminal scum!`,
			value: `-1 effect level
		-1 position (try again if fail)
		Try again with a new action
		Immediate problem, 2 ticks or +1 Heat
		Moderate Harm (level 2)
		`,
			inline: true,
		}
	);

module.exports.desperate = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle("Desperate Consequences")
	.setDescription(
		`Don't worry, you can always resist consequences to lower the severity of them! Also, you get XP for Desperate actions!`
	)
	.addFields(
		{
			name: `Then pay`,
			value: `Reduced Effect:
		Worse Position:
		Lost Opportunity:
		Complication:
		Harm:`,
			inline: true,
		},
		{
			name: `with your blood!`,
			value: `-1 effect level
		-1 position (try again if fail)
		Try again with a new action
		Severe problem, 3 ticks or +2 Heat
		Severe Harm (level 3)
		`,
			inline: true,
		}
	);

module.exports.bargain = new Discord.MessageEmbed()
	.setColor("#0099ff")
	.setTitle(`Devil's Bargains`)
	.setDescription(`Can be proposed by GM or other player. +1d for accepting.`)
	.addFields({
		name: `Some suggested bargains`,
		value: `- Collateral damage, unintended harm.
	- Sacrifice COIN or an item.
	- Betray a friend or loved one.
	- Offend or anger a faction.
	- Start and/or tick a troublesome clock.
	- Add HEAT to the crew from evidence or witnesses.
	- Suffer harm.`,
	});