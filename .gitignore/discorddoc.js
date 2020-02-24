const command = require('./commands.js')

module.exports = class discorddoc extends command {
	static  match(message) {
		return message.content.startsWith('!discorddoc') 
	}

	static   action (message) {
		let args = message.content.split(' ')
		args.shift()
		message.delete()
		message.reply('https://discord.js.org/#/docs/main/stable/search?q=' + args.join('%20'))
	}
}
client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);
