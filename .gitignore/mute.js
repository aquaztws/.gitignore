const command = require('./commands.js')

const Discord = require('discord.js')
const Guildmember = new Discord.Client()

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

module.exports = class mute  {


  static   match(message) {
		 return message.content.startsWith('!mute') 
	
}
  static  action (message) {
  const user = message.mentions.users.first();


    // If we have a user mentioned
    message.channel.send(user)
    if (user) {

      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        message.channel.send(member)

        member.setRoles([])
  member.setRoles(['681487204832379129'])

        
          
     
  }
}

  

}







}
