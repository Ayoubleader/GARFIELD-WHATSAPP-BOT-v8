// 👈 You Can change this your choice 
// 👈 You Can change this your choice  
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}


//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.symb = '█' // 👈  Enter Any ▁ ▂ █ ░ ▘ □ ▣
global.symb2 = '▎ █' // 👈 Enter Any ▬▓▌▎■
global.symb3 = '▬' // 👈 Enter Any ▅ ▂ ▁ ▊
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi I m*
*LEADER Ξ*
*I am 27 years old developer...*
*From MOROCCO / GERMANY*
*I am a.*
*Not more..*
*Also I am coach*
*send message , my whatsapp - https://wa.me/+212690943590?text=بــــاش♕ناجوطـــيك💜*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+212690943590'] //👈  Enter Your number
global.premium =  ['https://wa.me/+212690943590?text=بــــاش♕ناجوطـــيك'] //👈  Enter Your number
global.ownernomer = '+212690943590' //👈  Enter Your number
global.ownername = 'AYOUB-PITER' //👈 Enter Your name
global.botname = 'LEADER ＢＯＴ' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 ᏞᎬᎯ ᎠᎬᎡ 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://github.com/xnoize/LEADER-WHATSAPP-BOT-v10' // 👈 You Can change this your choice
global.region = 'germsny , munich-Zepnerstach' // 👈 You Can change this your choice
global.sc = 'https://github.com/noize/LEADER-WHATSAPP-BOT-v10'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://wa.me/+212690943590?text=بــــاش♕ناجوطـــيك/'// 👈 Enter your Social media link to follow now button
global.welcome = '*مرحبا بك في المجموعة 🦋*' // 👈 You Can change this your choice
global.bye = '*مع السلامة ، نلتقي في الجنة 🐼*' // 👈 You Can change this your choice
global.packname = 'LEADER-BOTv10'  // 👈 You Can change this your choice 
global.author = 'AYOUB/LEADER DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🌹','🤍','⚽'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'تم 💗', // 👈 You Can change this your choice
    admin: ' الميزة للمشرف فقط!', // 👈 You Can change this your choice
    botAdmin: 'على البوت أن يكون مشرفا في المجموعة أولا!', // 👈 You Can change this your choice
    owner: 'هذه الميزة لمالك البوت فقط!', // 👈 You Can change this your choice
    group: 'هذه الميزة تشتغل فقط في المجموعات!', // 👈 You Can change this your choice
    private: 'هذه الميزة تشتغل في المحادثاث الخاصة فقط!', // 👈 You Can change this your choice
    bot: 'هذه الميزة مخصصة للبوت فقط', // 👈 You Can change this your choice
    wait: '```تسنا شوية 😂...```', // 👈 You Can change this your choice
    error: 'هناك خطأ🤔!', // 👈 You Can change this your choice
    endLimit: 'باراكا ، راك كثرتي 😂',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})



// Update Logs
// New Menu Ui
/*
▬
▎ Hi   👋 
▎ 𝑳𝑬𝑨𝑫𝑬𝑹•⚽💗ꦿ ＢＯＴ
▎ █ 𝗦𝗽𝗲𝗲𝗱 : 0.00119 miliseconds
▎ █ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : 9 hours, 58 minutes, 23 seconds
▎ █ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ᏞᎬᎯ ᎠᎬᎡ ＢＯＴ 
▎ █ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ZENOI
▎ █ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : https://wa.me/+212690943590?text=بــــاش♕ناجوطـــيك💜
▎ █ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : AYOUB
▎ █ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : linux
▎ █ 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : 11
   Ｍｅｎｕ Ｃｏｍｍａｎｄｓ🌀
   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 
   *▓  AllMenu* 
   *▓  DownloadMenu*
   *▓  Searchmenu*
   *▓  mainimenu*
   *▓  Convertmenu*
   *▓  Funmenu*
   *▓  Databasemenu*
   *▓  Gamemenu*
   
▎ ️LEADER ＢＯＴ  Created by AYOUB 🪁
▎ ᴘᴏᴡᴇʀᴇᴅ ʙʏ LEADER 𝖡𝖮Т v8.6 and 
▎ BAVARI4EVEEER Ｉ v1.00             
⭕►▁▁▁▁▁▁▁▁▁▁▁▁▁▁
   ▎ ᏞᎬᎯ ᎠᎬᎡ ＢＯＴ
   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁
 ▁▁▁▁▁▁▁▁▁▁▁▁▁▁
▎ 
   █▄▄ █▀█ ▀█▀
   █▄█ █▄█ ░█░
⭕▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
*/
// Fix Audio And Video Bug
