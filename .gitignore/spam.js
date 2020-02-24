const command = require('./commands.js')
const Discord = require('discord.js')
const User = new Discord.Client()
var DarKneSs = "DarKneSs#6433"
var tws = "tws#4511"

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);

module.exports = class spam extends command {
	static  match(message) {
		return message.content.startsWith('!spam')
	}

	static   action (message) {

		let args = message.author.id


   if(args==='152450822221987840'|| args ==='335162289672159232'){


		
		let args = message.content.split(' ')
		args.shift()
		message.delete()
		for (var i = 0; i <=15 ; i++) {
			message.channel.send(args.join(' '))
		}

	}else{message.reply('FAIT PAS LE FOU PAR CONTRE')
		
	}
}

	
 
}
