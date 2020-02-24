const command = require('./commands.js')
const Discord = require('discord.js')
const User = new Discord.Client()
var DarKneSs = "DarKneSs#6433"
var tws = "tws#4511"

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

module.exports = class say extends command {
	static  match(message) {
		return message.content.startsWith('!say')
	}

	static   action (message) {
		let args = message.content.split(' ')
		args.shift()
		message.delete()
		message.channel.send(args.join(' '))
	}

	
 
}