/*const command = require('./commands.js')
const Discord = require('discord.js')
const bot = new Discord.Client()



module.exports = class toby extends command {



static match(message) {
		return message.content.startsWith('Toby?')

	}
        //	if(User.id ===152450822221987840){
		static action (message){
		
			message.channel.send("OUI MAITRE")

		
	}
}
*/

const command = require('./commands.js')
const Discord = require('discord.js')
const Client = new Discord.Client()

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);


module.exports = class toby extends command {
	static  match(message) {


		return message.content.startsWith('Toby?')
	}


	static action (message){
		 if (message.member.hasPermission("ADMINISTRATOR")){
		 	message.channel.send("OUI MAITRE")
	} else {
		for (var i =0; i <= 5; i++) {

			message.channel.send("TOBY N'EST PAS TON ELFE " + (message.reply("")))
			message.channel.send("TOBY EN COLERE")
		}
	}


}

}
