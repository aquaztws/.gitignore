  const command = require('./commands.js')
const YoutubeStream = require('ytdl-core')
module.exports = class play extends command {
	static  match(message) {
		return message.content.startsWith('!play')
	}

	static   action (message) {
		let voiceChannel = message.guild.channels
		.filter(function (channel){ return channel.type == 'voice'})
		.first()
		let args = message.content.split(' ')
		voiceChannel.join()
		.catch(console.error)
		.then(function (connection){

						let stream = YoutubeStream(args[1])
						stream.on('error', function(){
							connection.disconnect
						})
					connection.playStream(stream).on('end', function (){
						connection.disconnect()
					})
						

			}) 
				
					}
		}
		
		client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);

	
