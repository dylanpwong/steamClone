const User = require("../models/User");
const Game = require("../models/Game");
const Genre=require('../models/Genre');
const Review= require('../models/Review');
const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;
// const bcrypt = require('bcryptjs');

// connects to database
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })   // connects to database, asynchronous "promise"
    .then(() => console.log("Connected to MongoDB successfully"))   
    .catch((err) => console.log(err));  

// temporary, wipes out games/genres in database
Genre.deleteMany({})
    .then(() => console.log("deleted Genres"))
    .catch((error) => console.log(error));
Game.deleteMany({})
    .then(() => console.log("deleted Games"))
    .catch((error) => console.log(error));

Review.deleteMany({})
    .then(() => console.log("deleted Review"))
    .catch((error) => console.log(error));
User.findOne({username: 'demoUser'}).then((user)=>{


//GENRES
// Array of new Genre objects
const genres = [
    new Genre({
        name: 'Action'

    }),
    new Genre({
        name: 'Horror'

    }),
    new Genre({
        name: 'RPG'
    }),
    new Genre({
        name: 'Souls Like'
    }),
    new Genre({
        name: 'Adventure'
    }),
    new Genre({
        name: 'Anime'
    }),
    new Genre({
        name: 'FPS'
    }),
    new Genre({
        name: 'Multiplayer'
    }),
    new Genre({
        name: 'Survival'
    }),
    new Genre({
      name: 'Fighting'
    }),
    new Genre({
      name: "Visual Novel"
    }),
    new Genre({
      name: "Detective"
    }),
    new Genre({
      name: 'Open World'
    })
    
]

let actionId=genres[0]._id;
let horrorId=genres[1]._id;
let rpgId=genres[2]._id;
let soulsLikeId=genres[3]._id;
let adventureId=genres[4]._id;
let animeId=genres[5]._id;
let fpsId=genres[6]._id;
let multiPlayeId=genres[7]._id;
let survivalId = genres[8]._id;
let fightingId = genres[9]._id;
let visualNovelId = genres[10]._id;
let detectiveId=genres[11]._id;
let openWorldId=genres[12]._id;

// finished saves genres into database 
let finished = 0;
for (let i = 0; i < genres.length; i++) {
    genres[i]
        .save() //special to mongoose, saves to database
        .then((genre) => {
            finished++;
            if (finished === genres.length) {
                // exit();
            }
        })
        .catch((error) => console.log(error));
}
// REVIEWS

const reviews=[
    new Review({
        content: 'THIS IS GREAT PLEASE TRY IT!!!!',
        recommendation: true,
        helpfulYes: 50,
        helpfulNo: 10,
        user: user
    }),
    new Review({
      content: 'Why are you looking at negative Reviews This game is great!',
      recommendation: false,
      helpfulYes: 10,
      helpfulNo: 0,
      helpfulFunny: 20,
      user: user
    }),
    
]




///// GAMES
// const hellTakerImgs = [
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/helltakerScreenShot1.jpg",
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot2.jpg",
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot3.jpg",
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot4.jpg",
//   "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot5.png",
// ];
const games = [
  new Game({
    title: "HellTaker",
    price: "Free",
    description: "HellTaker is a short game about sharply dressed demon girls.",
    about:
      "You woke up one day with a dream. Harem full of demon girls. You've opened the portal in hopes of fulfilling your wildest desires. Hellfire burns through your lungs, death awaits around every corner and everything looks like from a cutesy mobile game. You are in hell.",

    imgUrl: "https://dpwong-steamclone-dev.s3.amazonaws.com/HelltakerImg.jpg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/helltakerScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/HellTakerScreenShot5.png",
    ],
    minSystem: {
      Storage: "300 MB available space",
    },

    // genres:
  }),
  new Game({
    title: "Dark Souls",
    price: "$20.00",
    description:
      "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps.",
    about:
      "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps. Dark Souls Remastered includes the main game plus the Artorias of the Abyss DLC.",
    imgUrl:
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsv2cover.jpg",
    gif: "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsHit.gif",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darkSoulsScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsScreenShot3.jpeg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsScreenShot4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/darksoulsScreenShot5.jpg",
    ],
    sales: 2,
    minSystem: {
      OS: "Windows 7 64-bit, Service Pack 1",
      Processor: "IIntel Core i5-2300 2.8 GHz / AMD FX-6300, 3.5 GHz",
      Memory: "6 GB RAM",
      Graphics: "GeForce GTX 460, 1 GB / Radeon HD 6870, 1 GB",
      Storage: "8 GB available space",
    },
    recSystem: {
      OS: "Windows 10 64 Bit",
      Processor: "IIntel Core i5-4570 3.2 GHz / AMD FX-8350 4.2 GHz",
      Memory: "8 GB RAM",
      Graphics: "GeForce GTX 660, 2 GB / Radeon HD 7870, 2 GB",
      Storage: "8 GB available space",
    },
  }),
  new Game({
    title: "Persona 5 Royal",
    price: "$60.00",
    imgUrl:
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5RoyalCover.jpg",
      description:"You should go to sleep",
      developer: "Atlus",
      about:
      "Persona 5[a] is a role-playing video game developed by Atlus. It is the sixth installment in the Persona series, which is part of the larger Megami Tensei franchise. The game was released for the PlayStation 3 and PlayStation 4 in Japan in September 2016, and worldwide in April 2017. It was published by Atlus in Japan and North America and by Deep Silver in Europe and Australia. An expanded version featuring new content, Persona 5 Royal,[b] was released for PlayStation 4 in Japan in October 2019 and worldwide in March 2020.",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/Persona5ScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5ScreenShot2.jpeg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5ScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5Screenshot4.jpeg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/persona5ScreenShot5.png",
    ],
  }),
  new Game({
    title: "Resident Evil 4",
    price: "$30.00",
    imgUrl: "https://dpwong-steamclone-dev.s3.amazonaws.com/res4newCover.jpg",
    description:
      "Special agent Leon S. Kennedy is sent on a mission to rescue the U.S. President’s daughter who has been kidnapped.",
    about:
      "In resident evil 4, special agent Leon S. Kennedy is sent on a mission to rescue the U.S. President’s daughter who has been kidnapped. Finding his way to a rural village in Europe, he faces new threats that are a departure from the traditional lumbering zombie enemies of the earlier instalments in the series. Leon battles horrific new creatures infested by a new threat called Las Plagas and faces off against an aggressive group of enemies including mind-controlled villagers that are tied to Los Illuminados, the mysterious cult which is behind the abduction.",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/residentEvil4ScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/residentevil4ScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/residentEvil4ScreenShots3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ResidentEvil4ScreenShot4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ResidentEvil4ScreenShot5.jpg",
    ],
    sales: 5,
  }),
  new Game({
    title: "Call Of Duty Black Ops 3",
    price: "$50.00",
    description:
      "Call of Duty®: Black Ops III Zombies Chronicles Edition includes the full base game plus the Zombies Chronicles content expansion.",
    about:
      "Call of Duty®: Black Ops III Zombies Chronicles Edition includes the full base game and the Zombies Chronicles content expansion. Call of Duty: Black Ops III combines three unique game modes: Campaign, Multiplayer, and Zombies, providing fans with the deepest and most ambitious Call of Duty ever. The Zombies Chronicles content expansion delivers 8 remastered classic Zombies maps from Call of Duty®: World at War, Call of Duty®: Black Ops and Call of Duty®: Black Ops II. Complete maps from the original saga are fully remastered and HD playable within Call of Duty®: Black Ops III.",

    imgUrl:
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackops3+coverv2.jpg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackOps3ScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackopsScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackops3ScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackops3ScreenShot4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/blackops3ScreenShot5.jpg",
    ],
    minSystem: {
      OS: "Windows 7 64-Bit / Windows 8 64-Bit / Windows 8.1 64-Bit",
      Processor:
        "Intel® Core™ i3-530 @ 2.93 GHz / AMD Phenom™ II X4 810 @ 2.60 GHz",
      Memory: "6 GB RAM",
      Graphics: "NVIDIA® GeForce® GTX 470 @ 1GB / ATI® Radeon™ HD 6970 @ 1GB",
      Storage: "100 GB available space",
    },
  }),

  new Game({
    title: "Skullgirls",
    price: "$20.00",
    description:
      "Skullgirls is a fast-paced 2-D fighting game that puts players in control of fierce warriors in an extraordinary Dark Deco world. Featuring all-new game systems which test the skills of veteran fighting game fans while also making the genre enjoyable and accessible to newcomers.",
    about:
      "Skullgirls is a fast-paced 2-D fighting game that puts players in control of fierce warriors in an extraordinary Dark Deco world. Featuring all-new game systems which test the skills of veteran fighting game fans while also making the genre enjoyable and accessible to newcomers. Skullgirls is a modern take on classic arcade fighters with a hand-drawn high-definition twist. It’s a one-of-a-kind, action-packed competition complete with awesome combos and an intriguing backstory.",
    imgUrl:
      "https://dpwong-steamclone-dev.s3.amazonaws.com/skullgirlsCover.jpg",
    gif: "https://dpwong-steamclone-dev.s3.amazonaws.com/skullgirlsGif.gif",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/skullgirlsScreenShot1.png",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/skullgirlsScreenShot2.jpeg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/skullgirlScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/skullgirlsScreenShot4.png",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/skullgirlsScreenShot5.jpg",
    ],
    minSystem: {
      OS: "Windows XP, Window Vista, Windows 7, Windows 8",
      Processor: "Dual-core CPU",
      Memory: "2 GB RAM",
      Graphics: "Intel HD3000",
      Storage: "2 GB available space",
    },
  }),

  new Game({
    title: "Danganronpa V3: Killing Harmony",
    price: "$40.00",
    about:
      "Welcome to a new world of Danganronpa, and prepare yourself for the biggest, most exhilarating episode yet. Set in a “psycho-cool” environment, a new cast of 16 characters find themselves kidnapped and imprisoned in a school. Inside, some will kill, some will die, and some will be punished. Reimagine what you thought high-stakes, fast-paced investigation was as you investigate twisted murder cases and condemn your new friends to death.",
    description:
      "A new cast of 16 characters find themselves kidnapped and imprisoned in a school. Inside, some will kill, some will die, and some will be punished. Reimagine what you thought high-stakes, fast-paced investigation was as you investigate twisted murder cases and condemn your new friends to death.",
    gif: "https://dpwong-steamclone-dev.s3.amazonaws.com/danganronpaV3Gif.gif",
    website: "https://www.spike-chunsoft.co.jp/",
    imgUrl:
      "https://dpwong-steamclone-dev.s3.amazonaws.com/DanganronpaCover.jpg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/danganronpaScreenShot1.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/danganronpaScreenShot2.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/danganronpaV3ScreenShot3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/danganronpaV3ScreenShot4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/danganronpaV3ScreenShot5.jpg",
    ],
    minSystem: {
      OS: "Windows 7 64 Bit",
      Processor: "Intel Core i3-4170 @ 3.70GHz",
      Memory: "4 GB RAM",
      Graphics: "NVIDIA@ GeForce@ GTX 460 or better",
      Storage: "26 GB available space",
    },
    recSystem: {
      OS: "Windows 7 64 Bit",
      Processor: "Intel Core i5-4690K @3.50GHz",
      Memory: "8 GB RAM",
      Graphics: "NVIDIA@ GeForce@ GTX 960",
      Storage: "26 GB available space",
    },
    clicks: 5,
  }),

  new Game({
    title: "Red Dead Redemption 2",
    price: "$60.00",
    description:
      "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
    about:
      "America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 also includes free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more. With all new graphical and technical enhancements for deeper immersion, Red Dead Redemption 2 for PC takes full advantage of the power of the PC to bring every corner of this massive, rich and detailed world to life including increased draw distances; higher quality global illumination and ambient occlusion for improved day and night lighting; improved reflections and deeper, higher resolution shadows at all distances; tessellated tree textures and improved grass and fur textures for added realism in every plant and animal. Red Dead Redemption 2 for PC also offers HDR support, the ability to run high-end display setups with 4K resolution and beyond, multi-monitor configurations, widescreen configurations, faster frame rates and more.",
    imgUrl: "https://dpwong-steamclone-dev.s3.amazonaws.com/ReadDeadCover.jpg",
    otherImgs: [
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ReadeadSS1.png",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ReaddeadSS2.png",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ReaddeadSS3.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ReaddeadSS4.jpg",
      "https://dpwong-steamclone-dev.s3.amazonaws.com/ReaddeadSS5.png",
    ],
    developer: "Rockstar Games",
    minSystem: {
      OS: "Windows 7 - Service Pack 1 (6.1.7601)",
      Processor: "Intel® Core™ i5-2500K / AMD FX-6300",
      Memory: "8 GB RAM",
      Graphics: "Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
      Storage: "150 GB available space",
    },
    recSystem: {
      OS: "Windows 10 - April 2018 Update (v1803)",
      Processor: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
      Memory: "12 GB RAM",
      Graphics: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
      Storage: "150 GB available space",
    },
  }),
];
games[0].genres.push(genres[0]); //helltaker
games[0].genres.push(genres[1]);    // just gives IDs of genres, NOT actual values
games[0].reviews.push(reviews[0]);
games[0].reviews.push(reviews[1]);
reviews[0].game = games[0];
reviews[1].game=games[0];
user.games.push(games[0]);
user.games.push(games[1]);
user.reviews.push(reviews[0]);
user.reviews.push(reviews[1]);
// user.reviewList[reviews[0]]=reviews[0];
user.reviewList.push(games[0]);
// user.reviewList=Object.assign({},user.reviewList, reviews[0] );
// user.reviewList = Object.assign({}, user.reviewList, games[1]);
// user.reviewList=reviews[0];

user.save();


// games[0].otherImgs= hellTakerImgs;

games[1].genres.push(soulsLikeId); //dark souls
games[1].genres.push(actionId);

games[2].genres.push(animeId); // persona 5
games[2].genres.push(rpgId);

games[3].genres.push(horrorId); // Resident Evil 4
games[3].genres.push(actionId);
games[3].genres.push(survivalId);

games[4].genres.push(fpsId); //black ops 3
games[4].genres.push(multiPlayeId);

games[5].genres.push(fightingId); // Skullgirls
games[5].genres.push(actionId);

games[6].genres.push(detectiveId); //Danganronpa V3
games[6].genres.push(animeId);
games[6].genres.push(visualNovelId);

games[7].genres.push(actionId);//Red Dead 2
games[7].genres.push(adventureId);
games[7].genres.push(openWorldId);
// same as finished1, but for games instead
let finished2 = 0;
for (let i = 0; i < games.length; i++) {
    games[i]
        .save()
        .then((game) => {
            finished2++;
            if (finished2 === games.length) {
                exit();
            }
        })
        .catch((error) => console.log(error));
}
//loop for reviews
let finished3 = 0;
for (let i = 0; i < reviews.length; i++) {
  reviews[i]
    .save()
    .then((review) => {
        finished3++;
        if (finished3 === reviews.length) {
          // exit();
        }
    
    })
    .catch((error) => console.log(error));
}//end of loop for reviews


})
// console.log(`Game's Genre: ${games[0].genres}`)
function exit() {
    mongoose
        .disconnect()
        .then(() => console.log("Disconnected"))
        .catch((error) => console.log(error));
}
