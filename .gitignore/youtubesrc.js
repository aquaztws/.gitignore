const command = require('./commands.js')

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);

module.exports = class youtubesrc extends command {
	static  match(message) {
		return message.content.startsWith('!youtubesrc') 
	}

	static   action (message) {
		let args = message.content.split(' ')
		args.shift()
		message.delete()
		message.channel.send('https://www.youtube.com/results?search_query=' + args.join('%20'))
	}
}
