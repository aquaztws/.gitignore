const command = require('./commands.js')

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

module.exports = class ping extends command {
	static  match(message) {
		return message.content.startsWith('!ping')
	}

	static   action (message) {
	message.reply('pong')
	}
}
