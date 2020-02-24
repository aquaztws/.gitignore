const { Client, Util } = require('discord.js');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async message => { // eslint-disable-line


const args = message.content.split(' ');
const searchString = args.slice(1).join('');
const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
const serverQueue = queue.get(message.guild.id);
let commande = message.content.toLowerCase(split(' ')[0]);
	commande = commande.slice(PREFIX.length)

module.exports = class play extends command {


 	static  match (message) {
		return message.content.startsWith('!play')
	}

	 static action (message) {
	 	client.on('message', async message => {
	 	const voiceChannel = message.member.voiceChannel;
	 	if (!voiceChannel) return (message.channel.send('vas dans un channel vocal ducon'));
	 	if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)){
	 		const playlist = await youtube.getPLaylist(url);
	 		const videos =await playlist.getVideos();
	 		for (const video of Object.values(videos)){
	 			const video2 = await youtube.getVideoByID(video.id);
	 			await handleVideo(video2, message, voiceChannel, true);
	 		}
	 		return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`)
	 	} else {
	 		var video =await youtube.getVideo(url);

	 	}
	 		try {
	 			var videos = await youtube.searchVideos(searchString, 10);
	 			let index = 0;
	 			message.channel.send(`
__**Song selection:**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

Donne un nombres pour choisir ta vidéo de 1 à 10
					`);

	 			try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('Non ou valeur invalide  choisie, annulation de la selection de video.');

			}
		const videoIndex = parseInt(response.first().content);
		var video = await youtube.getVideoByID(videos[videoIndex - 1].id);

	 }catch (err) {
	 			console.error(err);
	 			return message.channel.send ('impossible de recuperer des resultats');

	 	}
	})
	 	return handleVideo(video, message, voiceChannel);

	 }
} 
 if (commande === 'skip') {
		if (!message.member.voiceChannel) return message.channel.send('Tu n es pas dans un channel vocal');	
			if (!serverQueue){ return message.channel.send('Je n ai rien à skip :(.'); }
		serverQueue.connection.dispatcher.end('La commande skip à été utilisé ^^');
		return undefined;
	} else  if (commande === 'pause'){
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('musique mise en pause !');
		}

		return message.channel.send('aucune écoute en cours');

}	 else if (commande ==='reprise'){

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ reprise de la musique');
		}
		return message.channel.send('aucune écoute en cours');
	}

	return undefined;
	
})








	   