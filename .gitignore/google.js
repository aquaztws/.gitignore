const command = require('./commands.js')

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

module.exports = class Google extends command {
	static  match(message) {
		return message.content.startsWith('!google')
	}

	static   action (message) {
		let args = message.content.split(' ')
		args.shift()
		message.delete()
		message.reply('https://www.google.fr/#q=' + args.join('%20'))
	}
}

