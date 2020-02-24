const command = require('./commands.js')

module.exports = class roulette extends command {
	static  match(message) {
		return message.content.startsWith('!roulette')
	}

	static   action (message) {


            function sleep(milliseconds) {                                    //creation de la fonction sleep
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

    






 let args = message.content.split(' ')
        args.shift()


        

        message.channel.send(args.join(' ')+'ok ?')
       let user1= message.author.tag;
       setTimeout(roulettestart, 3000);
                                                                         //pause de 5 s le temps de repondre ok 

  

function roulettestart(){
if (message.content.startsWith('ok')){                           //commence si ok est present

            let user2= message.author.tag
        }
    }
       

        if (message.content.startsWith('ok')){                           //commence si ok est present

            let user2= message.author.tag

      message.channel.send('Combien de balles ?(max 3)'+(user1))




            if (message.content.startsWith('1')){                               //une balle sur 6

                message.channel.send('on commence avec:'+(user2))
                int (random) = new Random();
                int (nb);
                nb= random.nextInt(7)
                for (var i = 0; i !=nb ; i++) {
                    var a = 0
                   message.channel.send(a+1)
                   message.channel.send('...')




                }
                   
                    if( nb === 0|2|4|6|8|10){

                    string (lemecquimeurt) = (user1)    

                    }else{



                    String (lemecquimeurt) = (user2)


                 

                }

                message.chanel.send('MORT IDIOT')
                member.kick(lemecquimeurt)




         }

            


            if (message.content.startsWith('2')){



                message.channel.send('on commence avec:'+(user2))
                int (random) = new Random()
                int (nb);
                nb= random.nextInt(4)
                for (var i = 0; i !=nb ; i++) {
                    var a = 0
                   message.channel.send(a+1)
                   message.channel.send('...')




                }
                   
                    if( nb === 0|2|4|6|8|10){

                        String (lemecquimeurt) = (user1)    

                    }else{



                        String (lemecquimeurt) = (user2)
                    

                 

                         }

                         message.chanel.send('MORT IDIOT')
                        member.kick(lemecquimeurt)






            }



            if (message.content.startsWith('3')){



                message.channel.send('on commence avec:'+(user2))
                int (random) = new Random()
                int (nb);
                nb= random.nextInt(3)
                for (var i = 0; i !=nb ; i++) {
                    var a = 0
                   message.channel.send(a+1)
                   message.channel.send('...')




                }
                   
                    if( nb === 0|2|4|6|8|10){

                    String (lemecquimeurt) = (user1)    

                    }else{



                    String (lemecquimeurt) = (user2)
                    

                 

                }

                message.chanel.send('MORT IDIOT')
                member.kick(lemecquimeurt)






            }










        } else {
            
            message.channel.send('bah alors on perds ses couilles'+args.join(' '))
        }
    }

}

client.login(fUisBIZ2KplSWUecFtUqGTOdYpIJ9UOj);
