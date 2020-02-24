const command = require('./commands.js')

module.exports = class clear extends command {
	static  match(message) {
		return message.content.startsWith('!clear')
	}

	static   action (message) {

let args = message.content.split(' ')

args.shift()
 var numToPurge = args.shift()
        



		 if(!message.member.hasPermission("MANAGE_MESSAGES"))     return message.channel.send({embed: {
            color: 3447003,
            description: ":x: Tu n'as pas les permission "
        }})
        let channel = message.channel;

        // fail if number of messages to purge is invalid
        if (numToPurge <= 0) {
            return message.reply('Le nombre de messages a purger doit être supérieur à 0');
        }

        // channel type must be text for .bulkDelete to be available
        else if (channel.type === 'text') {
            return channel.fetchMessages({limit: numToPurge})
                .then(messages => channel.bulkDelete(messages))
                .then(messages => message.reply(`Purge faite`))
                .catch(console.error);
        }
        else {
            return message.reply('...');
        }
    }
};

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);

   









