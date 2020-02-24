const command = require('./commands.js')


const Discord = require('discord.js')
const Client  = new Discord.Client()

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

module.exports = class soundboard  {
  static   match(message) {
		 return message.content.startsWith('!play') 
	
}
  static  action (message) {

  	/* let voiceChannel = message.guild.channels
  	 .filter(function (channel) {return channel.type === 'voice'})
  	 .first()
  	 voiceChannel.join()
  	 .then(function (connection){
    */
       message.member.voiceChannel.join().then(function (connection){ 

  	 	let args = message.content.split(' ')

		args.shift()
		var element = args.shift();

		args.shift()

       if(element === "manquerderespect"){connection.playFile('./music/apprendreamanquerderespect.mp3')}
       	       if(element === "cestlechien"){connection.playFile('./music/cestlechien.mp3')}
                if(element === "hein"){connection.playFile('./music/hein.mp3')}


		message.delete()

  	 })

		
	}


}