const command = require('./commands.js')

module.exports = class ping extends command {
	static  match(message) {
		return message.content.startsWith('!ping')
	}

	static   action (message) {
	message.reply('pong')
	}
}

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);
