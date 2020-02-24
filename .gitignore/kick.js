const command = require('./commands.js')

const Discord = require('discord.js')
const Guildmember = new Discord.Client()

module.exports = class kick  {


  static   match(message) {
		 return message.content.startsWith('!kick') 
	
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
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
           //We let the message author know we were able to kick the person
          message.reply(`cya ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('nope');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('Il est où?');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('Qui ?');
    }
  }
}

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);  
	






