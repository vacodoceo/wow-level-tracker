// https://develop.battle.net/documentation/world-of-warcraft/game-data-apis

export interface Realm {
  name: string;
  id: number;
  slug: string;
}

const realms = [
  {
    name: "Lightbringer",
    id: 1,
    slug: "lightbringer"
  },
  {
    name: "Cenarius",
    id: 2,
    slug: "cenarius"
  },
  {
    name: "Uther",
    id: 3,
    slug: "uther"
  },
  {
    name: "Kilrogg",
    id: 4,
    slug: "kilrogg"
  },
  {
    name: "Proudmoore",
    id: 5,
    slug: "proudmoore"
  },
  {
    name: "Hyjal",
    id: 6,
    slug: "hyjal"
  },
  {
    name: "Frostwolf",
    id: 7,
    slug: "frostwolf"
  },
  {
    name: "Ner'zhul",
    id: 8,
    slug: "nerzhul"
  },
  {
    name: "Kil'jaeden",
    id: 9,
    slug: "kiljaeden"
  },
  {
    name: "Blackrock",
    id: 10,
    slug: "blackrock"
  },
  {
    name: "Tichondrius",
    id: 11,
    slug: "tichondrius"
  },
  {
    name: "Silver Hand",
    id: 12,
    slug: "silver-hand"
  },
  {
    name: "Doomhammer",
    id: 13,
    slug: "doomhammer"
  },
  {
    name: "Icecrown",
    id: 14,
    slug: "icecrown"
  },
  {
    name: "Deathwing",
    id: 15,
    slug: "deathwing"
  },
  {
    name: "Kel'Thuzad",
    id: 16,
    slug: "kelthuzad"
  },
  {
    name: "Eitrigg",
    id: 47,
    slug: "eitrigg"
  },
  {
    name: "Garona",
    id: 51,
    slug: "garona"
  },
  {
    name: "Alleria",
    id: 52,
    slug: "alleria"
  },
  {
    name: "Hellscream",
    id: 53,
    slug: "hellscream"
  },
  {
    name: "Blackhand",
    id: 54,
    slug: "blackhand"
  },
  {
    name: "Whisperwind",
    id: 55,
    slug: "whisperwind"
  },
  {
    name: "Archimonde",
    id: 56,
    slug: "archimonde"
  },
  {
    name: "Illidan",
    id: 57,
    slug: "illidan"
  },
  {
    name: "Stormreaver",
    id: 58,
    slug: "stormreaver"
  },
  {
    name: "Mal'Ganis",
    id: 59,
    slug: "malganis"
  },
  {
    name: "Stormrage",
    id: 60,
    slug: "stormrage"
  },
  {
    name: "Zul'jin",
    id: 61,
    slug: "zuljin"
  },
  {
    name: "Medivh",
    id: 62,
    slug: "medivh"
  },
  {
    name: "Durotan",
    id: 63,
    slug: "durotan"
  },
  {
    name: "Bloodhoof",
    id: 64,
    slug: "bloodhoof"
  },
  {
    name: "Khadgar",
    id: 65,
    slug: "khadgar"
  },
  {
    name: "Dalaran",
    id: 66,
    slug: "dalaran"
  },
  {
    name: "Elune",
    id: 67,
    slug: "elune"
  },
  {
    name: "Lothar",
    id: 68,
    slug: "lothar"
  },
  {
    name: "Arthas",
    id: 69,
    slug: "arthas"
  },
  {
    name: "Mannoroth",
    id: 70,
    slug: "mannoroth"
  },
  {
    name: "Warsong",
    id: 71,
    slug: "warsong"
  },
  {
    name: "Shattered Hand",
    id: 72,
    slug: "shattered-hand"
  },
  {
    name: "Bleeding Hollow",
    id: 73,
    slug: "bleeding-hollow"
  },
  {
    name: "Skullcrusher",
    id: 74,
    slug: "skullcrusher"
  },
  {
    name: "Argent Dawn",
    id: 75,
    slug: "argent-dawn"
  },
  {
    name: "Sargeras",
    id: 76,
    slug: "sargeras"
  },
  {
    name: "Azgalor",
    id: 77,
    slug: "azgalor"
  },
  {
    name: "Magtheridon",
    id: 78,
    slug: "magtheridon"
  },
  {
    name: "Destromath",
    id: 79,
    slug: "destromath"
  },
  {
    name: "Gorgonnash",
    id: 80,
    slug: "gorgonnash"
  },
  {
    name: "Dethecus",
    id: 81,
    slug: "dethecus"
  },
  {
    name: "Spinebreaker",
    id: 82,
    slug: "spinebreaker"
  },
  {
    name: "Bonechewer",
    id: 83,
    slug: "bonechewer"
  },
  {
    name: "Dragonmaw",
    id: 84,
    slug: "dragonmaw"
  },
  {
    name: "Shadowsong",
    id: 85,
    slug: "shadowsong"
  },
  {
    name: "Silvermoon",
    id: 86,
    slug: "silvermoon"
  },
  {
    name: "Windrunner",
    id: 87,
    slug: "windrunner"
  },
  {
    name: "Cenarion Circle",
    id: 88,
    slug: "cenarion-circle"
  },
  {
    name: "Nathrezim",
    id: 89,
    slug: "nathrezim"
  },
  {
    name: "Terenas",
    id: 90,
    slug: "terenas"
  },
  {
    name: "Burning Blade",
    id: 91,
    slug: "burning-blade"
  },
  {
    name: "Gorefiend",
    id: 92,
    slug: "gorefiend"
  },
  {
    name: "Eredar",
    id: 93,
    slug: "eredar"
  },
  {
    name: "Shadowmoon",
    id: 94,
    slug: "shadowmoon"
  },
  {
    name: "Lightning's Blade",
    id: 95,
    slug: "lightnings-blade"
  },
  {
    name: "Eonar",
    id: 96,
    slug: "eonar"
  },
  {
    name: "Gilneas",
    id: 97,
    slug: "gilneas"
  },
  {
    name: "Kargath",
    id: 98,
    slug: "kargath"
  },
  {
    name: "Llane",
    id: 99,
    slug: "llane"
  },
  {
    name: "Earthen Ring",
    id: 100,
    slug: "earthen-ring"
  },
  {
    name: "Laughing Skull",
    id: 101,
    slug: "laughing-skull"
  },
  {
    name: "Burning Legion",
    id: 102,
    slug: "burning-legion"
  },
  {
    name: "Thunderlord",
    id: 103,
    slug: "thunderlord"
  },
  {
    name: "Malygos",
    id: 104,
    slug: "malygos"
  },
  {
    name: "Thunderhorn",
    id: 105,
    slug: "thunderhorn"
  },
  {
    name: "Aggramar",
    id: 106,
    slug: "aggramar"
  },
  {
    name: "Crushridge",
    id: 107,
    slug: "crushridge"
  },
  {
    name: "Stonemaul",
    id: 108,
    slug: "stonemaul"
  },
  {
    name: "Daggerspine",
    id: 109,
    slug: "daggerspine"
  },
  {
    name: "Stormscale",
    id: 110,
    slug: "stormscale"
  },
  {
    name: "Dunemaul",
    id: 111,
    slug: "dunemaul"
  },
  {
    name: "Boulderfist",
    id: 112,
    slug: "boulderfist"
  },
  {
    name: "Suramar",
    id: 113,
    slug: "suramar"
  },
  {
    name: "Dragonblight",
    id: 114,
    slug: "dragonblight"
  },
  {
    name: "Draenor",
    id: 115,
    slug: "draenor"
  },
  {
    name: "Uldum",
    id: 116,
    slug: "uldum"
  },
  {
    name: "Bronzebeard",
    id: 117,
    slug: "bronzebeard"
  },
  {
    name: "Feathermoon",
    id: 118,
    slug: "feathermoon"
  },
  {
    name: "Bloodscalp",
    id: 119,
    slug: "bloodscalp"
  },
  {
    name: "Darkspear",
    id: 120,
    slug: "darkspear"
  },
  {
    name: "Azjol-Nerub",
    id: 121,
    slug: "azjolnerub"
  },
  {
    name: "Perenolde",
    id: 122,
    slug: "perenolde"
  },
  {
    name: "Eldre'Thalas",
    id: 123,
    slug: "eldrethalas"
  },
  {
    name: "Spirestone",
    id: 124,
    slug: "spirestone"
  },
  {
    name: "Shadow Council",
    id: 125,
    slug: "shadow-council"
  },
  {
    name: "Scarlet Crusade",
    id: 126,
    slug: "scarlet-crusade"
  },
  {
    name: "Firetree",
    id: 127,
    slug: "firetree"
  },
  {
    name: "Frostmane",
    id: 128,
    slug: "frostmane"
  },
  {
    name: "Gurubashi",
    id: 129,
    slug: "gurubashi"
  },
  {
    name: "Smolderthorn",
    id: 130,
    slug: "smolderthorn"
  },
  {
    name: "Skywall",
    id: 131,
    slug: "skywall"
  },
  {
    name: "Runetotem",
    id: 151,
    slug: "runetotem"
  },
  {
    name: "Moonrunner",
    id: 153,
    slug: "moonrunner"
  },
  {
    name: "Detheroc",
    id: 154,
    slug: "detheroc"
  },
  {
    name: "Kalecgos",
    id: 155,
    slug: "kalecgos"
  },
  {
    name: "Ursin",
    id: 156,
    slug: "ursin"
  },
  {
    name: "Dark Iron",
    id: 157,
    slug: "dark-iron"
  },
  {
    name: "Greymane",
    id: 158,
    slug: "greymane"
  },
  {
    name: "Wildhammer",
    id: 159,
    slug: "wildhammer"
  },
  {
    name: "Staghelm",
    id: 160,
    slug: "staghelm"
  },
  {
    name: "Emerald Dream",
    id: 162,
    slug: "emerald-dream"
  },
  {
    name: "Maelstrom",
    id: 163,
    slug: "maelstrom"
  },
  {
    name: "Twisting Nether",
    id: 164,
    slug: "twisting-nether"
  },
  {
    name: "Cho'gall",
    id: 1067,
    slug: "chogall"
  },
  {
    name: "Gul'dan",
    id: 1068,
    slug: "guldan"
  },
  {
    name: "Kael'thas",
    id: 1069,
    slug: "kaelthas"
  },
  {
    name: "Alexstrasza",
    id: 1070,
    slug: "alexstrasza"
  },
  {
    name: "Kirin Tor",
    id: 1071,
    slug: "kirin-tor"
  },
  {
    name: "Ravencrest",
    id: 1072,
    slug: "ravencrest"
  },
  {
    name: "Balnazzar",
    id: 1075,
    slug: "balnazzar"
  },
  {
    name: "Azshara",
    id: 1128,
    slug: "azshara"
  },
  {
    name: "Agamaggan",
    id: 1129,
    slug: "agamaggan"
  },
  {
    name: "Lightninghoof",
    id: 1130,
    slug: "lightninghoof"
  },
  {
    name: "Nazjatar",
    id: 1131,
    slug: "nazjatar"
  },
  {
    name: "Malfurion",
    id: 1132,
    slug: "malfurion"
  },
  {
    name: "Aegwynn",
    id: 1136,
    slug: "aegwynn"
  },
  {
    name: "Akama",
    id: 1137,
    slug: "akama"
  },
  {
    name: "Chromaggus",
    id: 1138,
    slug: "chromaggus"
  },
  {
    name: "Draka",
    id: 1139,
    slug: "draka"
  },
  {
    name: "Drak'thul",
    id: 1140,
    slug: "drakthul"
  },
  {
    name: "Garithos",
    id: 1141,
    slug: "garithos"
  },
  {
    name: "Hakkar",
    id: 1142,
    slug: "hakkar"
  },
  {
    name: "Khaz Modan",
    id: 1143,
    slug: "khaz-modan"
  },
  {
    name: "Mug'thol",
    id: 1145,
    slug: "mugthol"
  },
  {
    name: "Korgath",
    id: 1146,
    slug: "korgath"
  },
  {
    name: "Kul Tiras",
    id: 1147,
    slug: "kul-tiras"
  },
  {
    name: "Malorne",
    id: 1148,
    slug: "malorne"
  },
  {
    name: "Rexxar",
    id: 1151,
    slug: "rexxar"
  },
  {
    name: "Thorium Brotherhood",
    id: 1154,
    slug: "thorium-brotherhood"
  },
  {
    name: "Arathor",
    id: 1165,
    slug: "arathor"
  },
  {
    name: "Madoran",
    id: 1173,
    slug: "madoran"
  },
  {
    name: "Trollbane",
    id: 1175,
    slug: "trollbane"
  },
  {
    name: "Muradin",
    id: 1182,
    slug: "muradin"
  },
  {
    name: "Vek'nilash",
    id: 1184,
    slug: "veknilash"
  },
  {
    name: "Sen'jin",
    id: 1185,
    slug: "senjin"
  },
  {
    name: "Baelgun",
    id: 1190,
    slug: "baelgun"
  },
  {
    name: "Duskwood",
    id: 1258,
    slug: "duskwood"
  },
  {
    name: "Zuluhed",
    id: 1259,
    slug: "zuluhed"
  },
  {
    name: "Steamwheedle Cartel",
    id: 1260,
    slug: "steamwheedle-cartel"
  },
  {
    name: "Norgannon",
    id: 1262,
    slug: "norgannon"
  },
  {
    name: "Thrall",
    id: 1263,
    slug: "thrall"
  },
  {
    name: "Anetheron",
    id: 1264,
    slug: "anetheron"
  },
  {
    name: "Turalyon",
    id: 1265,
    slug: "turalyon"
  },
  {
    name: "Haomarush",
    id: 1266,
    slug: "haomarush"
  },
  {
    name: "Scilla",
    id: 1267,
    slug: "scilla"
  },
  {
    name: "Ysondre",
    id: 1268,
    slug: "ysondre"
  },
  {
    name: "Ysera",
    id: 1270,
    slug: "ysera"
  },
  {
    name: "Dentarg",
    id: 1271,
    slug: "dentarg"
  },
  {
    name: "Andorhal",
    id: 1276,
    slug: "andorhal"
  },
  {
    name: "Executus",
    id: 1277,
    slug: "executus"
  },
  {
    name: "Dalvengyr",
    id: 1278,
    slug: "dalvengyr"
  },
  {
    name: "Black Dragonflight",
    id: 1280,
    slug: "black-dragonflight"
  },
  {
    name: "Altar of Storms",
    id: 1282,
    slug: "altar-of-storms"
  },
  {
    name: "Uldaman",
    id: 1283,
    slug: "uldaman"
  },
  {
    name: "Aerie Peak",
    id: 1284,
    slug: "aerie-peak"
  },
  {
    name: "Onyxia",
    id: 1285,
    slug: "onyxia"
  },
  {
    name: "Demon Soul",
    id: 1286,
    slug: "demon-soul"
  },
  {
    name: "Gnomeregan",
    id: 1287,
    slug: "gnomeregan"
  },
  {
    name: "Anvilmar",
    id: 1288,
    slug: "anvilmar"
  },
  {
    name: "The Venture Co",
    id: 1289,
    slug: "the-venture-co"
  },
  {
    name: "Sentinels",
    id: 1290,
    slug: "sentinels"
  },
  {
    name: "Jaedenar",
    id: 1291,
    slug: "jaedenar"
  },
  {
    name: "Tanaris",
    id: 1292,
    slug: "tanaris"
  },
  {
    name: "Alterac Mountains",
    id: 1293,
    slug: "alterac-mountains"
  },
  {
    name: "Undermine",
    id: 1294,
    slug: "undermine"
  },
  {
    name: "Lethon",
    id: 1295,
    slug: "lethon"
  },
  {
    name: "Blackwing Lair",
    id: 1296,
    slug: "blackwing-lair"
  },
  {
    name: "Arygos",
    id: 1297,
    slug: "arygos"
  },
  {
    name: "Echo Isles",
    id: 1342,
    slug: "echo-isles"
  },
  {
    name: "The Forgotten Coast",
    id: 1344,
    slug: "the-forgotten-coast"
  },
  {
    name: "Fenris",
    id: 1345,
    slug: "fenris"
  },
  {
    name: "Anub'arak",
    id: 1346,
    slug: "anubarak"
  },
  {
    name: "Blackwater Raiders",
    id: 1347,
    slug: "blackwater-raiders"
  },
  {
    name: "Vashj",
    id: 1348,
    slug: "vashj"
  },
  {
    name: "Korialstrasz",
    id: 1349,
    slug: "korialstrasz"
  },
  {
    name: "Misha",
    id: 1350,
    slug: "misha"
  },
  {
    name: "Darrowmere",
    id: 1351,
    slug: "darrowmere"
  },
  {
    name: "Ravenholdt",
    id: 1352,
    slug: "ravenholdt"
  },
  {
    name: "Bladefist",
    id: 1353,
    slug: "bladefist"
  },
  {
    name: "Shu'halo",
    id: 1354,
    slug: "shuhalo"
  },
  {
    name: "Winterhoof",
    id: 1355,
    slug: "winterhoof"
  },
  {
    name: "Sisters of Elune",
    id: 1356,
    slug: "sisters-of-elune"
  },
  {
    name: "Maiev",
    id: 1357,
    slug: "maiev"
  },
  {
    name: "Rivendare",
    id: 1358,
    slug: "rivendare"
  },
  {
    name: "Nordrassil",
    id: 1359,
    slug: "nordrassil"
  },
  {
    name: "Tortheldrin",
    id: 1360,
    slug: "tortheldrin"
  },
  {
    name: "Cairne",
    id: 1361,
    slug: "cairne"
  },
  {
    name: "Drak'Tharon",
    id: 1362,
    slug: "draktharon"
  },
  {
    name: "Antonidas",
    id: 1363,
    slug: "antonidas"
  },
  {
    name: "Shandris",
    id: 1364,
    slug: "shandris"
  },
  {
    name: "Moon Guard",
    id: 1365,
    slug: "moon-guard"
  },
  {
    name: "Nazgrel",
    id: 1367,
    slug: "nazgrel"
  },
  {
    name: "Hydraxis",
    id: 1368,
    slug: "hydraxis"
  },
  {
    name: "Wyrmrest Accord",
    id: 1369,
    slug: "wyrmrest-accord"
  },
  {
    name: "Farstriders",
    id: 1370,
    slug: "farstriders"
  },
  {
    name: "Borean Tundra",
    id: 1371,
    slug: "borean-tundra"
  },
  {
    name: "Quel'dorei",
    id: 1372,
    slug: "queldorei"
  },
  {
    name: "Garrosh",
    id: 1373,
    slug: "garrosh"
  },
  {
    name: "Mok'Nathal",
    id: 1374,
    slug: "moknathal"
  },
  {
    name: "Nesingwary",
    id: 1375,
    slug: "nesingwary"
  },
  {
    name: "Drenden",
    id: 1377,
    slug: "drenden"
  },
  {
    name: "Drakkari",
    id: 1425,
    slug: "drakkari"
  },
  {
    name: "Ragnaros",
    id: 1427,
    slug: "ragnaros"
  },
  {
    name: "Quel'Thalas",
    id: 1428,
    slug: "quelthalas"
  },
  {
    name: "Azuremyst",
    id: 1549,
    slug: "azuremyst"
  },
  {
    name: "Auchindoun",
    id: 1555,
    slug: "auchindoun"
  },
  {
    name: "Coilfang",
    id: 1556,
    slug: "coilfang"
  },
  {
    name: "Shattered Halls",
    id: 1557,
    slug: "shattered-halls"
  },
  {
    name: "Blood Furnace",
    id: 1558,
    slug: "blood-furnace"
  },
  {
    name: "The Underbog",
    id: 1559,
    slug: "the-underbog"
  },
  {
    name: "Terokkar",
    id: 1563,
    slug: "terokkar"
  },
  {
    name: "Blade's Edge",
    id: 1564,
    slug: "blades-edge"
  },
  {
    name: "Exodar",
    id: 1565,
    slug: "exodar"
  },
  {
    name: "Area 52",
    id: 1566,
    slug: "area-52"
  },
  {
    name: "Velen",
    id: 1567,
    slug: "velen"
  },
  {
    name: "The Scryers",
    id: 1570,
    slug: "the-scryers"
  },
  {
    name: "Zangarmarsh",
    id: 1572,
    slug: "zangarmarsh"
  },
  {
    name: "Fizzcrank",
    id: 1576,
    slug: "fizzcrank"
  },
  {
    name: "Ghostlands",
    id: 1578,
    slug: "ghostlands"
  },
  {
    name: "Grizzly Hills",
    id: 1579,
    slug: "grizzly-hills"
  },
  {
    name: "Galakrond",
    id: 1581,
    slug: "galakrond"
  },
  {
    name: "Dawnbringer",
    id: 1582,
    slug: "dawnbringer"
  },
  {
    name: "Goldrinn",
    id: 3207,
    slug: "goldrinn"
  },
  {
    name: "Nemesis",
    id: 3208,
    slug: "nemesis"
  },
  {
    name: "Azralon",
    id: 3209,
    slug: "azralon"
  },
  {
    name: "Tol Barad",
    id: 3210,
    slug: "tol-barad"
  },
  {
    name: "Gallywix",
    id: 3234,
    slug: "gallywix"
  },
  {
    name: "Caelestrasz",
    id: 3721,
    slug: "caelestrasz"
  },
  {
    name: "Aman'Thul",
    id: 3722,
    slug: "amanthul"
  },
  {
    name: "Barthilas",
    id: 3723,
    slug: "barthilas"
  },
  {
    name: "Thaurissan",
    id: 3724,
    slug: "thaurissan"
  },
  {
    name: "Frostmourne",
    id: 3725,
    slug: "frostmourne"
  },
  {
    name: "Khaz'goroth",
    id: 3726,
    slug: "khazgoroth"
  },
  {
    name: "Dreadmaul",
    id: 3733,
    slug: "dreadmaul"
  },
  {
    name: "Nagrand",
    id: 3734,
    slug: "nagrand"
  },
  {
    name: "Dath'Remar",
    id: 3735,
    slug: "dathremar"
  },
  {
    name: "Jubei'Thos",
    id: 3736,
    slug: "jubeithos"
  },
  {
    name: "Gundrak",
    id: 3737,
    slug: "gundrak"
  },
  {
    name: "Saurfang",
    id: 3738,
    slug: "saurfang"
  }
];

export default realms;
