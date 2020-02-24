const command = require('./commands.js')
const Discord = require('discord.js')
const User = new Discord.Client()
var DarKneSs = "DarKneSs#6433"
var tws = "tws#4511"

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

module.exports = class tag extends command {
	static  match(message) {
		return message.content.startsWith('!tag')
	}

	static   action (message) {

		let args = message.author.id
		 let user1= message.author.tag


   message.channel.send(user1)
	
 
}





}
