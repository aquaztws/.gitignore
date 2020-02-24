const command = require('./commands.js')


const Discord = require('discord.js')
const bot  = new Discord.Client()


module.exports = class gamechange  {
  static   match(message) {
		 return message.content.startsWith('!gamechange') 
	
}
  static  action (message) {
  if (message.member.hasPermission("ADMINISTRATOR")){
    let args = message.content.split(' ')
   
    args.shift()
   // var game = args.shift() 

    message.delete()

   var game = (args.join(' '))

  
    
    
   // Client.user.setActivity(game)
    bot.user.setActivity('game',{type:'PLAYING'})
   // Client.user.setActivity(args.join(' '))



  	    }

		
	

     }

}

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);

