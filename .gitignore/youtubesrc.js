const command = require('./commands.js')

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

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