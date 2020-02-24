const command = require('./commands.js')

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);


module.exports = class trad  {
  static   match(message) {
		 return message.content.startsWith('!trad') 
	
}
  static  action (message) {

		let args = message.content.split(' ')

		args.shift()
		var element = args.shift();

		args.shift()

       if(element === "russe"){var element = "ru"}
       	       if(element === "espagnol"){var element = "es"}
                if(element === "anglais"){var element = "en"}


		message.delete()
		message.reply('https://translate.google.fr/?hl=fr#view=home&op=translate&sl=fr&tl='+(element)+'&text=' + args.join('%20'))
	}


}
