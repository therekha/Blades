module.exports.entanglementTable  = [
    [
        ["The Usual Suspects", "Diplomatic Incident"],
        ["Squanderers", "Unexpected Expenses"],
        ["Gang Trouble", "Pushy Friends"],
        ["Rivals", "Cohort Tension"],
        ["Unquiet Dead", "Crisis of Vice"],
        ["Cooperation", "Unexpected Complication"]
    ],
    [
        ["Gang Trouble", "Enraged Citizenry"],
        ["Search Warrant", "Accosted by Spirit Guards"],
        ["Questioning", "Crisis of Faith", "Haunted Claim"],
        ["Unquiet Dead", "Casual Racism", "Unfair Competition"],
        ["Reprisals", "Civil War", "Settling of Scores"],
        ["Show of Force", "Arrested Cohort"],
    ],
    [
        ["Interrogation", "Helping the Poor"],
        ["Robbery", "Overambitious Lackey"],
        ["Flipped", "Tax Evasion Charge"],
        ["Demonic Notice", "Crew Trouble", "Hostile Magistrate"],
        ["Show of Force", "War", "Ambitious Lackey"],
        ["Arrest", "Mayhem", "Incarcerated Cohort"]
    ]
]

module.exports.entanglementDescriptions = {
	"Accosted by Spirit Guards": "If you have an \"Accosted by Spirit Guards\" clock active (i.e., the one that fills up whenever you use Arcane potions, p. 226) you gain heat equal to the number of ticks on that clocks. Then, mark 2 more ticks on the \"Accosted by Spirit Guards\" clock.",

	"Ambitious Lackey": "An influential member of a Cohort (or a friend/contact, patron, or vice purveyor) successfully undermines your authority: they want to be the one leading the Crew, or at least one of your Cohorts! You must choose: either permanently lose the Cohort(s) involved, or harshly punish and re-organize them (forfeit 2 rep, 2 coin, mark level 2 harm on the Cohort, and tick 1 on a 4-Clock \"The Cohort Rebels\").Why did the lackey betray you? What have you done against them?",

	"Arrest": "An Inspector presents a case file of evidence to a magistrate, to begin prosecution of your crew. They send a detail to arrest you (a gang at least equal in scale to your wanted level). Pay them off with coin equal to your wanted level +3, hand someone over for arrest (this clears your heat), or try to evade capture.\n A truncheon bangs on the shutters of the window. \"Alright then! Come on out and let's go quietly now!\" It sounds like the bald Sergeant. When you peek out, you see a detail of about twenty constables, all geared up for a fight. The Sergeant mumbles under his breath, so only you inside can hear: \"Or perhaps I have the wrong address?\" He clears his throat and waits for some coins to appear.",

	"Arrested Cohort": "Exactly like \"Arrest\", but the cops try to arrest one of your Cohorts, rather than a PC.",

	"Casual Racism": "You lose 1 rep for each PC you have in the crew who do not belong to the setting's dominant heritage. Players whose character is of mixed heritage can choose whether they \"pass\" as belonging to the dominant heritage, or not.",

	"Civil War": "A member of one of your Cohorts murders another member, or another one of your Cohorts, or a contact/friend or vice purveyor. Remove from play the NPC that has been attacked (or, if they are a member of a Gang, mark level 2 harm on the Gang) and forfeit 1 rep. You can then choose whether to stand with the culprit, or with the victim's friend. In both cases, the \"other\" party will harbor resentment towards the Crew (mark 3 ticks on a 4-Clock).",

	"Cohort Tension": "A member of one of your Cohorts has a fight with another member, or another one of your Cohorts, or a contact/friend or vice purveyor. You lose 1 rep due to how divided is your crew, and you mark level 1 harm on the Cohort or NPC that has been attacked. You can then choose whether to stand with the culprit or with the victim (i.e., punish the culprit); in both cases, the \"other\" party will start to harbor resentment towards the Crew (mark 1 tick on a 4-Clock).",
	
	"Cooperation": "A +3 status faction asks you for a favor. Agree to do it, or forfeit 1 rep per Tier of the friendly faction, or lose 1 status with them. If you don't have a +3 status faction, you avoid entanglements right now.",

	"Crew Trouble": "One of the PCs create trouble due to their Trauma(s). You can lose face (forfeit rep equal to your Tier +1), make an example of your fellow PC (mark level 2 harm, you may not resist it), or face reprisals from the wronged party (and lower your status with them by 1). If no PC has Trauma, you avoid entanglements right now.",

	"Crisis of Faith": "A new Cult (or an old acquaintance) takes hold among one of your Cohorts. You can either allow the cult to flourish (pick 1 extra Flaw for your Cohort), or fight it (lose 1 rep, mark level 1 harm on your Cohort, and mark 2 ticks on a 4-Clock \"The Cohort rebels\"). What is the Cult doctrine? Who is leading the Cult?",

	"Crisis of Vice": "A new vice purveyor (or an old acquaintance) takes hold among one of your Cohorts. You can either allow the vice to flourish (pick 1 extra Flaw for your Cohort), or fight it (lose 1 rep, mark level 1 harm on your Cohort, and mark 2 ticks on a 4-Clock \"The Cohort rebels\"). Who is the purveyor? What vice are they selling exactly",

	"Demonic Notice": "A demon approaches the crew with a dark offer. Accept their bargain, hide until it loses interest (forfeit 3 rep), or deal with it another way.",

	"Diplomatic Incident": "Pick a faction whose status with you is -1, 0, or +1. Choose: either forfeit 1 rep per Tier of the faction, or take -1 status with them, due to some offense or some conflicting interests. What is the nature of the offense or conflict? What did you do to enrage them?",

	"Enraged Citizenry": "Either forfeit 2 rep, or take -1 status with the Citizenry of a District where you own an \"annoying\" Claim (or a District where you recently made a conspicuous Score). Who are the individual(s) leading the Citizenry's protests? Did you do something to enrage them personally?",

	"Flipped": "One of the PCs' rivals arranges for one of your contacts, patrons, clients, or a group of your customers to switch allegiances due to the heat on you. They're loyal to another faction now.",

	"Gang Trouble": "One of your gangs (or other cohorts) causes trouble due to their flaw(s). You can lose face (forfeit rep equal to your Tier +1), make an example of one of the gang members, or face reprisals from the wronged party.",

	"Haunted Claim": "One of your Claims is haunted by ghosts. It will stop working until you either hire a Whisper (see Unquiet Dead), or you deal with ghosts yourself.",

	"Helping the Poor": "Vagrants or other desperates in your District (where you have your lair, or most of your activities) expect a show of generosity from you. Either pay them 2 coin, or reduce your status with your local Citizenry by 1.",

	"Hostile Magistrate": "One of the City's Magistrates is obsessed about your Crew. Either pay them 6 coin; or stage your very next Score to bribe, intimidate, blackmail or eliminate them (the Score should not pay any coin); or allow them to finish their investigation (and get +1 wanted level). Who is the Magistrate? What did you do to enrage them?",

	"Incarcerated Cohort": "One of your Cohorts (or a close friend, or your patron) gets sent to prison. Choose: you either pay coin equal to 1 + double your wanted level, or your Cohort is completely unavailable for a number of Scores equal to 1d + wanted level. In both cases, you clear just 3 heat (you do not clear all the heat and reduce your wanted level by 1 as usual)",

	"Interrogation": "The officers round up one of the PCs to question them about the crew's crimes. How did they manage to capture you? Either pay them off with 3 coin, or they beat you up (level 2 harm) and you tell them what they want to know (+3 heat). You can resist each of those consequences separately. Some players really hate it when their character gets captured! Just tell them that this is completely normal for a scoundrel of the underworld. You spend time in and out of jail, getting questioned and harassed by the law. It's not the end of the world. But now that you're here in the interrogation room, what kind of person are you? Do you talk? Do you stand up to them? Do you make a deal?",
	
	"Mayhem": "Roll again, twice. You suffer two entanglements.",

	"Overambitious Lackey": "An influential member of a Cohort (or a friend/contact, patron, or vice purveyor) tries to undermine your authority. You manage to control their ambitions, but you have to choose: either punish them (mark level 2 harm on the Cohort), or give them a raise (lose 2 coin), or lose face (-2 rep)",

	"Pushy Friends": "A +2 or +3 status faction asks you to hide a \"hot\" person, gear or merchandise, until things cool down and the cops stop looking for the thing. Either accept their request (and take +2 heat), or refuse (and take -1 status with them, or lose rep equal to their Tier, your choice)",

	"Questioning": "The cops grab an NPC member of your crew or one of the crew's contacts, to question them about your crimes. Who do they think is most vulnerable? Make a fortune roll to see how much they talk (1-3: +2 heat, 4/5: +1 heat), or pay the constables off with 2 coin.\nRoll 2d for a normal person to see how well they keep quiet. If they're an experienced underworld type or some kind of tough, give them 3d or 4d instead. If they're soft or if they have some loyalty to the law, give them 1d or 0d.",

	"Reprisals": "An enemy faction makes a move against you (or a friend, contact, or vice purveyor). Pay them (1 rep and 1 coin) per Tier of the enemy as an apology, allow them to mess with you or yours, or fight back and show them who's boss.",

	"Rivals": "A neutral faction throws their weight around. They threaten you, a friend, a contact, or one of your vice purveyors. Forfeit (1 rep or 1 coin) per Tier of the rival, or stand up to them and lose 1 status with them.",

	"Robbery": "An enemy or neutral faction robs (or scams) money from one of the Crew's interests or activities. Choose: you either get robbed and forfeit 2 Stash for each character, or you violently resist and lose 1 status with that faction.",

	"Search Warrant": "The cops search one of your Claims, or your Lair, or the establishment of a friend/contact or vice purveyor. Either pay them off (2 coin), or lose 1 rep and gain +2 heat",

	"Settling of Scores": "An enemy faction teaches a lesson to one of the PCs. Who is the most likely to be picked? You either stand your ground and endure a beating (mark level 3 harm, you may not resist it), or pay them and lose face (-2 coin, -2 rep)",

	"Show of Force": "A faction with whom you have a negative status makes a play against your holdings. Give them 1 claim or go to war (drop to -3 status). If you have no claims, lose 1 hold instead.",

	"Squanderers": "One of your Cohorts (or contacts) accidentally mismanages your finances, or causes you to lose money or resources some other way. Either forfeit 1 coin, or force them to repay the loss (and forfeit 1 rep due to your Cohort's discontent).",

	"Tax Evasion Charge": "Sum up the cash coin owned by the Crew, and by each character (not counting Stash, or Caveau). If the total exceeds 10 coin, either pay 4 coin as fines and bribes, or get +2 heat",

	"The Usual Suspects": "The cops grab someone in the periphery of your crew. One player volunteers a friend or vice purveyor as the person most likely to be taken. Make a fortune roll to find out if they resist questioning (1-3: +2 heat, 4/5: level 2 harm), or pay them off with 1 coin.",

	"Unexpected Complication": "Roll again, as if your heat level was 6 or more (i.e., use the 'worst' table to find your result)",

	"Unexpected Expenses": "A neutral or enemy faction creates you some trouble, due to competition for product or customers, to a disagreement about turf, etc. You either lose 1 coin or 1 rep to fix things. If you have neither, lose 1 hold instead.",

	"Unfair Competition": "A neutral or enemy faction is selling the same services you are selling, with a discount. Choose one of your claims that generate coin. The chosen claim will not work for this downtime. Moreover, you can either hold your ground and kick out the competing faction (-1 status with them) or allow them do to as they please (-2 rep), or deal with the issue some other way (e.g., play it out in detail, diplomatically or not).",

	"Unquiet Dead": "A rogue spirit is drawn to you perhaps it's a past victim? Acquire the services of an occultist to attempt to destroy or banish it, or deal with it yourself. They can hire an NPC by using the acquire asset downtime activity. Roll the NPC's quality level as a fortune roll to see how well they deal with the spirit.",

	"War": "Pick a faction whose status with you is -2. Choose: either forfeit 2 rep per Tier of the faction, or take -1 status with them (and go to war!), due to some offense or some conflicting interests. What is the nature of the conflict? What did you do to enrage them?"
}