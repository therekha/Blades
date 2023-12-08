const Discord = require("discord.js");
const importObj = {
	...require("./embeds/character/actions.js"),
	...require("./embeds/character/charitems.js"),
	...require("./embeds/character/items.js"),
	...require("./embeds/character/vice_trauma.js"),
	...require("./embeds/character/position.js"),
	...require("./embeds/character/rolls.js"),

	...require("./embeds/charCrewCreation/char.js"),
	...require("./embeds/charCrewCreation/crew.js"),

	...require("./embeds/crew/advanceTierUpgrade.js"),
	...require("./embeds/crew/status.js"),

	...require("./embeds/procedures/activities.js"),
	...require("./embeds/procedures/downtime.js"),
	...require("./embeds/procedures/engagement.js"),
	...require("./embeds/procedures/entanglements.js"),
	...require("./embeds/procedures/expandedEntanglements.js"),
	...require("./embeds/procedures/wantedEscalations.js"),

	...require("./embeds/references/districts.js"),
	...require("./embeds/references/glossary.js"),
	...require("./embeds/references/heritage.js"),
	...require("./embeds/references/names.js"),
};
for (let prop in importObj) {
	module.exports[prop] = importObj[prop];
}

module.exports.kankahelp = `
# KANKA HELP
\` k$ query \` Will perform a search of the kanka for the campaign and return links to entitites found.
`

module.exports.glossaryhelp = 
`
# GLOSSARY HELP

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

**Rolls**
\` $position \` Describes results at each position. \` $controlled \`, \` $risky \`, \` $desperate \`.
\` $dice \` Ways to get more dice for your rolls.
\` $group \` How to take a group action.
\` $bargain \` Give a couple suggestions for Devil's Bargains.
\` $db \` Pull a card for a specific Devil's Bargain suggestion.


**References**
\` $names \` For example names.
\` $districts \` Lists districts and their commands.
\` $glossary \` Defines common terms.
\` $heritages \` Gives commands for heritages.`

module.exports.dicehelp = 
`
# DICE HELP
\` $2 \`  Rolls 2 d6s
\` $3r \` Resistance roll of 3 d6s.
\` $2r /comment \` Add a comment. 
\` $entangle <heat> <wanted level> \` Roll on the expanded entanglement table.
`


module.exports.help = 
	`\` $help \` shows this again
	\` $glossaryhelp \` shows possible glossary entries
	\` $dicehelp \` shows how to roll dice
	\` $kankahelp \` shows how to search kanka`
	+ module.exports.kankahelp + module.exports.dicehelp + module.exports.glossaryhelp
	+ `
	Original bot code credit: [Blades in the Glossary](https://github.com/jordanclarkedev/Blades-in-the-Glossary/blob/master/README.md), [Blades in the Dicebot](https://github.com/jordanclarkedev/bitdicebot/blob/master/README.md), [Dusk Companion](https://github.com/benjo121ben/Discord-Bot-DnD-BitD)
	Other credits: [Devil's Bargain Cards](https://docs.google.com/document/d/1VF40zxIj2l1kNJ3kR1KhjesQc7Wr3crH/edit?usp=sharing&ouid=110046508991315423814&rtpof=true&sd=true), [Expanded Entanglements](https://drive.google.com/file/d/1cL9f2LXwr_CZ5C-Ce6c82higXtILaLRm/view)`