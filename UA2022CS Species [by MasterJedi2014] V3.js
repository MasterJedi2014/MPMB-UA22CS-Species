/*	-INFORMATION-
	Subject:	Species(Races)
	Effect:		This script adds the Species from UA22CS.
				This species is a transciption of the species found in UA22CS, transcribed by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference, & by contributors to the FToD Dragonborn RaceList object in "all_WotC_pub+UA.js" file.
	Date:		2024-03-21 (sheet v13.1.0)
*/

var iFileName = "UA2022CS Species [by MasterJedi2014] V3.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/03/21",
};

SourceList["UA22CS"] = {
	name : "Unearthed Arcana 2022: The Cleric and Revised Species",
	abbreviation : "UA22CS",
	date : "2022/12/01",
	url : "https://media.dndbeyond.com/compendium-images/one-dnd/cleric-and-revised-species/tr8jAj5cc33uQixi/UA-2022-ClericandSpecies.pdf",
};

// Ardlings
RaceList["climber ardling ua22cs"] = {
	regExpSearch : /^(?=.*ardling)(?=.*climber).*$/i,
	name : "Climber Ardling (UA22CS)",
	sortname : "Ardling, Climber (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	skills : ["Perception"],
	skillstxt : "Proficiency with Perception.",
	age : " reach adulthood in their late teens and live about 200 years on average.",
	height : " range from 3' to 7 ft tall (2'11\" + 6d8\")",
	weight : " typically weigh 174 lb (75 + 6d8 \xD7 1d4 lb)",
	heightMetric : " range from .91 to about 2.11 metres tall (89 + 12d10 cm)",
	weightMetric : " typically weigh around 79 kg (34 + 6d8 \xD7 5d4 / 10 kg)",
	trait : "Climber Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Bear, Cat, Lizard, or Squirrel.\nI have hooked claws, sharp nails, or a serpentine tail, giving me a Climb Speed equal to my Speed. Once per turn, I can deal my Proficiency Bonus in damage when I hit with a Unarmed Strike.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Intelligence, Wisdom, or Charisma is my spellcasting ability for any Spell I cast with this trait (choose the ability when I select the Species).\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
};
AddRacialVariant("climber ardling ua22cs", "int cantrip", {
	regExpSearch : /^(?=.*int)(?=.*cantrip).*$/i,
	name : "Climber Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Climber Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Bear, Cat, Lizard, or Squirrel.\nI have hooked claws, sharp nails, or a serpentine tail, giving me a Climb Speed equal to my Speed. Once per turn, I can deal my Proficiency Bonus in damage when I hit with a Unarmed Strike.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Intelligence is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "INT Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});
AddRacialVariant("climber ardling ua22cs", "wis cantrip", {
	regExpSearch : /^(?=.*wis)(?=.*cantrip).*$/i,
	name : "Climber Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Climber Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Bear, Cat, Lizard, or Squirrel.\nI have hooked claws, sharp nails, or a serpentine tail, giving me a Climb Speed equal to my Speed. Once per turn, I can deal my Proficiency Bonus in damage when I hit with a Unarmed Strike.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Wisdom is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "WIS Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});
AddRacialVariant("climber ardling ua22cs", "cha cantrip", {
	regExpSearch : /^(?=.*cha)(?=.*cantrip).*$/i,
	name : "Climber Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Climber Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Bear, Cat, Lizard, or Squirrel.\nI have hooked claws, sharp nails, or a serpentine tail, giving me a Climb Speed equal to my Speed. Once per turn, I can deal my Proficiency Bonus in damage when I hit with a Unarmed Strike.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Charisma is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "CHA Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});

RaceList["flyer ardling ua22cs"] = {
	regExpSearch : /^(?=.*ardling)(?=.*flyer).*$/i,
	name : "Flyer Ardling (UA22CS)",
	sortname : "Ardling, Flyer (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	action : [
		["reaction", "Negate fall dmg (fall ≥ 3m(10'))"],
	],
	skills : ["Perception"],
	skillstxt : "Proficiency with Perception.",
	age : " reach adulthood in their late teens and live about 200 years on average.",
	height : " range from 3' to 7 ft tall (2'11\" + 6d8\")",
	weight : " typically weigh 174 lb (75 + 6d8 \xD7 1d4 lb)",
	heightMetric : " range from .91 to about 2.11 metres tall (89 + 12d10 cm)",
	weightMetric : " typically weigh around 79 kg (34 + 6d8 \xD7 5d4 / 10 kg)",
	trait : "Flyer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Bat, Eagle, Owl, or Raven.\nI have vestigial wings, allowing me to use my Reaction to negate fall damage for falls higher than 3m (10 ft). I can also use my wings to gain Advantage on Ability Checks made during the Jump Action.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Intelligence, Wisdom, or Charisma is my spellcasting ability for any Spell I cast with this trait (choose the ability when I select the Species).\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
};
AddRacialVariant("flyer ardling ua22cs", "int cantrip", {
	regExpSearch : /^(?=.*int)(?=.*cantrip).*$/i,
	name : "Flyer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Flyer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Bat, Eagle, Owl, or Raven.\nI have vestigial wings, allowing me to use my Reaction to negate fall damage for falls higher than 3m (10 ft). I can also use my wings to gain Advantage on Ability Checks made during the Jump Action.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Intelligence is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "INT Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});
AddRacialVariant("flyer ardling ua22cs", "wis cantrip", {
	regExpSearch : /^(?=.*wis)(?=.*cantrip).*$/i,
	name : "Flyer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Flyer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Bat, Eagle, Owl, or Raven.\nI have vestigial wings, allowing me to use my Reaction to negate fall damage for falls higher than 3m (10 ft). I can also use my wings to gain Advantage on Ability Checks made during the Jump Action.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Wisdom is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "WIS Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});
AddRacialVariant("flyer ardling ua22cs", "cha cantrip", {
	regExpSearch : /^(?=.*cha)(?=.*cantrip).*$/i,
	name : "Flyer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Flyer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Bat, Eagle, Owl, or Raven.\nI have vestigial wings, allowing me to use my Reaction to negate fall damage for falls higher than 3m (10 ft). I can also use my wings to gain Advantage on Ability Checks made during the Jump Action.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Charisma is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "CHA Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});

RaceList["racer ardling ua22cs"] = {
	regExpSearch : /^(?=.*ardling)(?=.*racer).*$/i,
	name : "Racer Ardling (UA22CS)",
	sortname : "Ardling, Racer (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	skills : ["Perception"],
	skillstxt : "Proficiency with Perception.",
	age : " reach adulthood in their late teens and live about 200 years on average.",
	height : " range from 3' to 7 ft tall (2'11\" + 6d8\")",
	weight : " typically weigh 174 lb (75 + 6d8 \xD7 1d4 lb)",
	heightMetric : " range from .91 to about 2.11 metres tall (89 + 12d10 cm)",
	weightMetric : " typically weigh around 79 kg (34 + 6d8 \xD7 5d4 / 10 kg)",
	trait : "Racer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Deer, Dog, Horse, or Triceratops.\nWhen I take the Dash Action, my Speed increases by an amount equal to 10 times my Proficiency Bonus.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Intelligence, Wisdom, or Charisma is my spellcasting ability for any Spell I cast with this trait (choose the ability when I select the Species).\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
};
AddRacialVariant("racer ardling ua22cs", "int cantrip", {
	regExpSearch : /^(?=.*int)(?=.*cantrip).*$/i,
	name : "Racer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Racer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Deer, Dog, Horse, or Triceratops.\nWhen I take the Dash Action, my Speed increases by an amount equal to 10 times my Proficiency Bonus.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Intelligence is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "INT Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});
AddRacialVariant("racer ardling ua22cs", "wis cantrip", {
	regExpSearch : /^(?=.*wis)(?=.*cantrip).*$/i,
	name : "Racer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Racer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Deer, Dog, Horse, or Triceratops.\nWhen I take the Dash Action, my Speed increases by an amount equal to 10 times my Proficiency Bonus.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Wisdom is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "WIS Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});
AddRacialVariant("racer ardling ua22cs", "cha cantrip", {
	regExpSearch : /^(?=.*cha)(?=.*cantrip).*$/i,
	name : "Racer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Racer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Deer, Dog, Horse, or Triceratops.\nWhen I take the Dash Action, my Speed increases by an amount equal to 10 times my Proficiency Bonus.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Charisma is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "CHA Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});

RaceList["swimmer ardling ua22cs"] = {
	regExpSearch : /^(?=.*ardling)(?=.*swimmer).*$/i,
	name : "Swimmer Ardling (UA22CS)",
	sortname : "Ardling, Swimmer (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common"],
	skills : ["Perception"],
	skillstxt : "Proficiency with Perception.",
	dmgres : ["Cold"],
	age : " reach adulthood in their late teens and live about 200 years on average.",
	height : " range from 3' to 7 ft tall (2'11\" + 6d8\")",
	weight : " typically weigh 174 lb (75 + 6d8 \xD7 1d4 lb)",
	heightMetric : " range from .91 to about 2.11 metres tall (89 + 12d10 cm)",
	weightMetric : " typically weigh around 79 kg (34 + 6d8 \xD7 5d4 / 10 kg)",
	trait : "Swimmer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Crocodile, Dolphin, Frog, or Shark.\nI can hold my breath for up to an hour at a time, I have a Swim Speed equal to my Speed. I'm also Resistant to Cold Damage.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Intelligence, Wisdom, or Charisma is my spellcasting ability for any Spell I cast with this trait (choose the ability when I select the Species).\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
};
AddRacialVariant("swimmer ardling ua22cs", "int cantrip", {
	regExpSearch : /^(?=.*int)(?=.*cantrip).*$/i,
	name : "Swimmer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Swimmer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Crocodile, Dolphin, Frog, or Shark.\nI can hold my breath for up to an hour at a time, I have a Swim Speed equal to my Speed. I'm also Resistant to Cold Damage.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Intelligence is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "INT Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});
AddRacialVariant("swimmer ardling ua22cs", "wis cantrip", {
	regExpSearch : /^(?=.*wis)(?=.*cantrip).*$/i,
	name : "Swimmer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Swimmer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Crocodile, Dolphin, Frog, or Shark.\nI can hold my breath for up to an hour at a time, I have a Swim Speed equal to my Speed. I'm also Resistant to Cold Damage.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Wisdom is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "WIS Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});
AddRacialVariant("swimmer ardling ua22cs", "cha cantrip", {
	regExpSearch : /^(?=.*cha)(?=.*cantrip).*$/i,
	name : "Swimmer Ardling (UA22CS)",
	plural : "Ardlings",
	source : [["UA22CS", 8], ["MJ:HB", 0]],
	trait : "Swimmer Ardling:\n   Animal Ancestry: I am descended from a Celestial animal, and my head resembles the head of either a Crocodile, Dolphin, Frog, or Shark.\nI can hold my breath for up to an hour at a time, I have a Swim Speed equal to my Speed. I'm also Resistant to Cold Damage.\n\n   Divine Magic: I know one Cantrip from the Cleric or Druid Spell List (Thaumaturgy by default), and can swap it with another after a Long Rest.\n   Charisma is my spellcasting ability for any Spell I cast with this trait.\n\n   Keen Senses: I have Proficiency in the Perception Skill.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "CHA Innate Cantrip",
		"class" : ["cleric", "cleric ua23pt6", "druid", "druid ua23pt8"],
		selection : ["thaumaturgy"],
		level : [0, 0],
		firstCol : 'atwill',
	},
});

// Dragonborn; Credit to the author of the FToD Dragonborn entry in "all_WotC_pub+UA.js" as the foundation from which this UA version is built on. Spliced into this RaceList object are aspects from the Dragonborn entry in "ListsRaces.js" & descriptions from UA22CS.
var UA22CS_dragonborns_add = function () {
	var objDragonborns = {
		"Chromatic UA" : {
			regExpSearch : /^(?=.*chromatic)(?=.*dragonborn).*$/i,
			source : [["UA22CO", 9], ["MJ:HB", 0]],
			variants : [["Black", "Acid"], ["Blue", "Lightning"], ["Green", "Poison"], ["Red", "Fire"], ["White", "Cold"]],
			breathWeaponShape : "See description",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action on my turn, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in either a 5-ft by 30-ft line or a 15-ft cone, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest. The damage increases with +1d10 at 5th, 11th, and 17th level.",
				"Draconic Flight: From 5th level, I can manifest spectral wings. As a Bonus Action once per Long Rest, I can gain, for 10 minutes, a Fly Speed equal to my Speed."
			], "\n \u2022 "),
			features : {
				"draconic flight" : {
					name : "Draconic Flight",
					source : [["UA22CO", 9], ["MJ:HB", 0]],
					minlevel : 5,
					usages : 1,
					recovery : "long rest",
					action : [["bonus action", ""]]
				}
			}
		},
		"Gem UA" : { // Included for the following reasons. 1: The FToD code that this is based on has Gem dragonborn & I don't want to accidentally break the code by removing this. 2: The UA Metallic & Chromatic dragonborn are functionally identical, so the Gem dragonborn probably are as well.
			regExpSearch : /^(?=.*gem)(?=.*dragonborn).*$/i,
			source : [["UA22CO", 9], ["MJ:HB", 0]],
			variants : [["Amethyst", "Force"], ["Crystal", "Radiant"], ["Emerald", "Psychic"], ["Sapphire", "Thunder"], ["Topaz", "Necrotic"]],
			breathWeaponShape : "See description",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action on my turn, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in either a 5-ft by 30-ft line or a 15-ft cone, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest. The damage increases with +1d10 at 5th, 11th, and 17th level.",
				"Draconic Flight: From 5th level, I can manifest spectral wings. As a Bonus Action once per Long Rest, I can gain, for 10 minutes, a Fly Speed equal to my Speed."
			], "\n \u2022 "),
			features : {
				"draconic flight" : {
					name : "Draconic Flight",
					source : [["UA22CO", 9], ["MJ:HB", 0]],
					minlevel : 5,
					usages : 1,
					recovery : "long rest",
					action : [["bonus action", ""]]
				}
			}
		},
		"Metallic UA" : {
			regExpSearch : /^(?=.*metallic)(?=.*dragonborn).*$/i,
			source : [["UA22CO", 9], ["MJ:HB", 0]],
			variants : [["Brass", "Fire"], ["Bronze", "Lightning"], ["Copper", "Acid"], ["Gold", "Fire"], ["Silver", "Cold"]],
			breathWeaponShape : "See description",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action on my turn, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in either a 5-ft by 30-ft line or a 15-ft cone, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest. The damage increases with +1d10 at 5th, 11th, and 17th level.",
				"Draconic Flight: From 5th level, I can manifest spectral wings. As a Bonus Action once per Long Rest, I can gain, for 10 minutes, a Fly Speed equal to my Speed."
			], "\n \u2022 "),
			features : {
				"draconic flight" : {
					name : "Draconic Flight",
					source : [["UA22CO", 9], ["MJ:HB", 0]],
					minlevel : 5,
					usages : 1,
					recovery : "long rest",
					action : [["bonus action", ""]]
				}
			}
		}
	}
	for (var sDrBrn in objDragonborns) {
		var sDrBrnLC = sDrBrn.toLowerCase();
		var oDrBrn = objDragonborns[sDrBrn];
		RaceList[sDrBrnLC + " dragonborn ua22cs"] = {
			regExpSearch : oDrBrn.regExpSearch,
			name : sDrBrn + " Dragonborn (UA22CS)",
			sortname : "Dragonborn (UA22CS), " + sDrBrn,
			source : oDrBrn.source,
			plural : sDrBrn + " Dragonborn",
			size : 3,
			speed : {
				walk : { spd : 30, enc : 20 }
			},
			languageProfs : ["Common"],
			vision : [
				["Darkvision", 60],
			],
			weaponsAdd : ["Breath Weapon"],
			weaponOptions : [{
				regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
				name : "Breath weapon",
				source : oDrBrn.source,
				ability : 3,
				type : 'Natural',
				damage : ['C', 10, 'fire'],
				range : oDrBrn.breathWeaponShape.replace('by', '\xD7'),
				description : "5-ft by 30-ft line OR 15-ft cone; Hits all in area; Dex save, success - half damage",
				abilitytodamage : false,
				dc : true,
				dbBreathWeapon : true
			}],
			age : " reach adulthood in their late teens and live less than a century, about 80 years on average.",
			height : " range from 5' to 7' tall (5'6\" + 2d8\")",
			weight : " typically weigh between 230 and 280 lb (175 + 2d8 \xD7 2d6 lb)",
			heightMetric : " range from 1.5 to 2.1 metres tall (160 + 5d8 cm)",
			weightMetric : " typically weigh between 100 and 125 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
			trait : sDrBrn + " Dragonborn (UA22CS)"+
				"\n \u2022 " + sDrBrn + ' Ancestry: Choose a type of dragon using the "Racial Options" button. The damage type of my resistance and my breath weapon are determined by the dragon type chosen.'+
				+ oDrBrn.trait.replace(/>>type<< /ig, ""),
			features : {
				"breath weapon" : {
					name : "Breath Weapon",
					minlevel : 1,
					usages : "Proficiency bonus per ",
					usagescalc : "event.value = How('Proficiency Bonus');",
					recovery : "long rest",
					additional : levels.map(function (n) {
						return (n < 5 ? 1 : n < 11 ? 2 : n < 17 ? 3 : 4) + 'd10';
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (v.theWea.dbBreathWeapon && (/dragonborn/i).test(CurrentRace.known) && CurrentRace.variant) {
									fields.Damage_Type = CurrentRace.dmgres[0];
								}
							},
							'',
							1
						]
					}
				}
			},
			variants : []
		};
		if (oDrBrn.features) {
			for (var sFea in oDrBrn.features) {
				RaceList[sDrBrnLC + " dragonborn ua22cs"].features[sFea] = oDrBrn.features[sFea];
			}
		}
		for (var i = 0; i < oDrBrn.variants.length; i++) {
			var sDrBrnVar = oDrBrn.variants[i][0];
			var sDrBrnDmg = oDrBrn.variants[i][1];
			AddRacialVariant(sDrBrnLC + " dragonborn ua22cs", sDrBrnVar.toLowerCase(), {
				regExpSearch : RegExp(sDrBrnVar, "i"),
				name : sDrBrnVar + " " + sDrBrnLC + " dragonborn ua22cs",
				trait : sDrBrnVar + " " + sDrBrnLC + " dragonborn ua22cs"+
					oDrBrn.trait.replace(/>>TYPE<</g, sDrBrnDmg).replace(/>>type<</g, sDrBrnDmg.toLowerCase()),
				dmgres : [sDrBrnDmg]
			});
		}
	}
}();

// Goliaths
RaceList["goliath ua22cs"] = {
	regExpSearch : /^(?=.*goliath).*$/i,
	name : "Goliath (UA22CS)",
	source : [["UA22CO", 9], ["MJ:HB", 0]],
	plural : "Goliaths",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 },
	},
	languageProfs : ["Common"],
	savetxt : {
		text : "Adv. to end Grappled condition on myself",
	},
	age : " reach adulthood in their late teens and live about 80 years on average",
	height : " are between 6 and a half and 8 feet tall (6'2\" + 2d10\")",
	weight : " weigh between 280 and 340 lb (200 + 2d10 \xD7 2d6 lb)",
	heightMetric : " are between 2 and 2.4 metres tall (190 + 5d10 cm)",
	weightMetric : " weigh between 100 and 155 kg (90 + 5d10 \xD7 4d6 / 10 kg)",
	trait : "Goliath:\n   Giant Ancestry: I am descended from Giants, granting me a supernatural boon that I can use a Proficiency Bonus number of times per Long Rest.\n\n   Large Form: At 5th Lvl, I gain the ability change my Size to Large for 10 minutes as a Bonus Action. While I'm Large, I gain Adv. on Str Checks \u0026 my Speed increases by 10 ft.\n\n   Powerful Build: I have Adv. on Saving Throws to end the Grappled condition on myself. Additionally, I count as one Size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	carryingCapacity : 2,
};
AddRacialVariant("goliath ua22cs", "cloud", {
	regExpSearch : /^(?=.*cloud).*$/i,
	name : "Cloud Goliath (UA22CS)",
	sortname : "Goliath, Cloud (UA22CS)",
	plural : "Goliaths",
	source : [["UA22CS", 9], ["MJ:HB", 0]],
	trait : "Cloud Goliath:\n   Giant Ancestry: I am descended from Cloud Giants, granting me the supernatural ability to Teleport up to 30 ft to an unoccupied space I can see as Bonus Action. I can use this ability a Proficiency Bonus number of times per Long Rest.\n\n   Large Form: At 5th Lvl, I gain the ability change my Size to Large for 10 minutes as a Bonus Action. While I'm Large, I gain Adv. on Str Checks \u0026 my Speed increases by 10 ft.\n\n   Powerful Build: I have Adv. on Saving Throws to end the Grappled condition on myself. Additionally, I count as one Size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	features : {
		"cloud's jaunt" : {
			name : "Cloud's Jaunt",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [
				["bonus action", "Cloud's Jaunt"],
			],
		},
		"large form" : {
			name : "Large Form",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			action : [
				["bonus action", "Large Form"],
			],
		},
	},
});
AddRacialVariant("goliath ua22cs", "fire", {
	regExpSearch : /^(?=.*fire).*$/i,
	name : "Fire Goliath (UA22CS)",
	sortname : "Goliath, Fire (UA22CS)",
	plural : "Goliaths",
	source : [["UA22CS", 9], ["MJ:HB", 0]],
	trait : "Fire Goliath:\n   Giant Ancestry: I am descended from Fire Giants, granting me the supernatural ability to deal an extra 1d10 Fire damage with my attacks. I can use this ability a Proficiency Bonus number of times per Long Rest.\n\n   Large Form: At 5th Lvl, I gain the ability change my Size to Large for 10 minutes as a Bonus Action. While I'm Large, I gain Adv. on Str Checks \u0026 my Speed increases by 10 ft.\n\n   Powerful Build: I have Adv. on Saving Throws to end the Grappled condition on myself. Additionally, I count as one Size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	features : {
		"fire's burn" : {
			name : "Fire's Burn (+1d10 Fire Dmg)",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
		"large form" : {
			name : "Large Form",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			action : [
				["bonus action", "Large Form"],
			],
		},
	},
});
AddRacialVariant("goliath ua22cs", "frost", {
	regExpSearch : /^(?=.*frost).*$/i,
	name : "Frost Goliath (UA22CS)",
	sortname : "Goliath, Frost (UA22CS)",
	plural : "Goliaths",
	source : [["UA22CS", 9], ["MJ:HB", 0]],
	trait : "Frost Goliath:\n   Giant Ancestry: I am descended from Frost Giants, granting me the supernatural ability to deal an extra 1d6 Cold damage with my attacks \u0026 reduce the target's Speed by 10 ft until the start of my next turn. I can use this ability a Proficiency Bonus number of times per Long Rest.\n\n   Large Form: At 5th Lvl, I gain the ability change my Size to Large for 10 minutes as a Bonus Action. While I'm Large, I gain Adv. on Str Checks \u0026 my Speed increases by 10 ft.\n\n   Powerful Build: I have Adv. on Saving Throws to end the Grappled condition on myself. Additionally, I count as one Size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	features : {
		"frost's chill" : {
			name : "Frost's Chill (+1d6 Cold Dmg)",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
		"large form" : {
			name : "Large Form",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			action : [
				["bonus action", "Large Form"],
			],
		},
	},
});
AddRacialVariant("goliath ua22cs", "hill", {
	regExpSearch : /^(?=.*hill).*$/i,
	name : "Hill Goliath (UA22CS)",
	sortname : "Goliath, Hill (UA22CS)",
	plural : "Goliaths",
	source : [["UA22CS", 9], ["MJ:HB", 0]],
	trait : "Hill Goliath:\n   Giant Ancestry: I am descended from Hill Giants, granting me the supernatural ability to knock the targets of my attacks Prone. I can use this ability a Proficiency Bonus number of times per Long Rest.\n\n   Large Form: At 5th Lvl, I gain the ability change my Size to Large for 10 minutes as a Bonus Action. While I'm Large, I gain Adv. on Str Checks \u0026 my Speed increases by 10 ft.\n\n   Powerful Build: I have Adv. on Saving Throws to end the Grappled condition on myself. Additionally, I count as one Size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	features : {
		"hill's tumble" : {
			name : "Hill's Tumble",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
		},
		"large form" : {
			name : "Large Form",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			action : [
				["bonus action", "Large Form"],
			],
		},
	},
});
AddRacialVariant("goliath ua22cs", "stone", {
	regExpSearch : /^(?=.*stone).*$/i,
	name : "Stone Goliath (UA22CS)",
	sortname : "Goliath, Stone (UA22CS)",
	plural : "Goliaths",
	source : [["UA22CS", 9], ["MJ:HB", 0]],
	trait : "Stone Goliath:\n   Giant Ancestry: I am descended from Stone Giants, granting me the supernatural ability to use my Reaction to reduce damage taken by 1d12 + Con Mod. I can use this ability a Proficiency Bonus number of times per Long Rest.\n\n   Large Form: At 5th Lvl, I gain the ability change my Size to Large for 10 minutes as a Bonus Action. While I'm Large, I gain Adv. on Str Checks \u0026 my Speed increases by 10 ft.\n\n   Powerful Build: I have Adv. on Saving Throws to end the Grappled condition on myself. Additionally, I count as one Size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	features : {
		"stone's endurance" : {
			name : "Stone's Endurance",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [
				["reaction", "Stone's Endurance [-1d12+Con Dmg]"],
			],
		},
		"large form" : {
			name : "Large Form",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			action : [
				["bonus action", "Large Form"],
			],
		},
	},
});
AddRacialVariant("goliath ua22cs", "storm", {
	regExpSearch : /^(?=.*storm).*$/i,
	name : "Storm Goliath (UA22CS)",
	sortname : "Goliath, Storm (UA22CS)",
	plural : "Goliaths",
	source : [["UA22CS", 9], ["MJ:HB", 0]],
	trait : "Storm Goliath:\n   Giant Ancestry: I am descended from Storm Giants, granting me the supernatural ability to use my Reaction to deal 1d8 Thunder damage to a target within 60 ft that just damaged me. I can use this ability a Proficiency Bonus number of times per Long Rest.\n\n   Large Form: At 5th Lvl, I gain the ability change my Size to Large for 10 minutes as a Bonus Action. While I'm Large, I gain Adv. on Str Checks \u0026 my Speed increases by 10 ft.\n\n   Powerful Build: I have Adv. on Saving Throws to end the Grappled condition on myself. Additionally, I count as one Size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	features : {
		"storm's thunder" : {
			name : "Storm's Thunder",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [
				["reaction", "Storm's Thunder [1d8 Thunder Dmg]"],
			],
		},
		"large form" : {
			name : "Large Form",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			action : [
				["bonus action", "Large Form"],
			],
		},
	},
});