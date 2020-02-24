const command = require('./commands.js')
const Discord = require('discord.js')
const bot = new Discord.Client()

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

module.exports = class roulettep1 extends command {
	static  match(message) {
		return message.content.startsWith('!roulette1')
	}

	static   action (message) {

const user = message.author.id;
const user2 = message.mentions.users.first();
 let args = message.content.split(' ')
        args.shift()
        


        

        message.channel.send(args.join(' ')+'ok ?')
       const user1= message.author.tag;
       
                                                                         //pause de 5 s le temps de repondre ok 

           // let user2= args.join(' ')
            let mention = message.mentions.members.first();

      message.channel.send('Mode 1 balle choisi'+(user1))



      function getRandomIntInclusive(min, max) {
  min = Math.ceil(1);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min +1)) + min;
}



                message.channel.send('on commence avec:'+(user2))
                var random =0;
                
                var a = 0
              var  nb= getRandomIntInclusive()
                for (var i = 0; i !=nb ; i++) {
                    
                   message.channel.send(i)
                   message.channel.send('...')



}
                
if( nb ===18){

                    var lemecquimeurt = (user1)  
                     
setTimeout(kick1,5000);
                    
}


function kick1 (){
	

                    const member = message.guild.member(user);
                     member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          																							message.reply(`Successfully kicked ${user.tag}`);

                  })



	
}





function kick2 (){
	 var lemecquimeurt = (user2)
                     
    
   												 if (user2) {
  
    											  const member = message.guild.member(user2);
      
    												  if (member) {
        
        
         
       										 member.kick('Optional reason that will display in the audit logs').then(() => {
         
          												message.reply(`Successfully kicked ${user.tag}`);

                  })



	
}


                   
                    

                    else{
                    	setTimeout(kick2, 5000)


      }


                }


               
}

}



            
            
        

    
}






