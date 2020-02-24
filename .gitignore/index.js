
const Discord = require('discord.js')

const bot = new Discord.Client()

	const Google = require('./commands/google.js')

		const ping = require('./commands/ping.js')

   // const play = require('./commands/playv2.js')

 const say = require ('./commands/say.js')

 const toby = require ('./commands/toby.js')

 const youtubesrc = require ('./commands/youtubesrc.js')

 const discorddoc = require ('./commands/discorddoc.js')

const spam = require ('./commands/spam.js')

const trad = require ('./commands/tradtest.js')

//const trad = require ('./commands/trad.js')

const role = require ('./commands/roles.js')

const soundboardyarn = require ('./commands/soundboardyarn.js')

const gamechange = require ('./commands/gamechange.js')

const clear = require ('./commands/clear.js')



 const roulettep1 = require ('./commands/roulettep1.js')

 const tag = require ('./commands/tag.js')

 //const tag2 =require ('./commands/tag2.js')


const kick = require('./commands/kick.js')


const roulettep2 = require('./commands/roulettep2.js')

const ban = require ('./commands/ban.js')

const mute = require ('./commands/mute.js')

const unmute =require ('./commands/unmute.js')

const soundboard = require ('./commands/Soundboard.js')

	
	bot.on('message', function (message) {
	


	let commandUsed = 	Google.parse(message) || toby.parse(message) ||		ping.parse(message)	||  say.parse(message) || youtubesrc.parse(message) || discorddoc.parse(message) || spam.parse(message) || clear.parse(message);


	
	if (gamechange.match(message)){return gamechange.action(message);}


	

	if(trad.match(message)){
		return trad.action(message)
		
	}

	
	
	if(role.match(message)){return role.action(message)}
		
		
		
		if(soundboardyarn.match(message)){return soundboardyarn.action(message)}

			if(soundboard.match(message)){return soundboard.action(message)}

		
			
			if(roulettep1.match(message)){return roulettep1.action(message)}



				if(tag.match(message)){return tag.action(message)}

					//if(tag2.match(message)){return tag2.action(message)}
				if(kick.match(message)){return kick.action(message)}

					if(roulettep2.match(message)){return roulettep2.action(message)}

						if(ban.match(message)){return ban.action(message)}
 						
 							if(mute.match(message)){return mute.action(message)}

 								if(unmute.match(message)){return unmute.action(message)}
	
	})





  	 //bot.user.setActivity('game')
	
	
	


	bot.on('ready', function () {
		bot.user.setActivity('Strip poker', { type: 'PLAYING' })  

	
	 

	  })






	bot.login('NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRXcQ.osNXnnf1KUBxqRFF3_Mffvnl9Ss')

