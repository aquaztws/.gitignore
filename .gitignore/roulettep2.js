const command = require('./commands.js')
const Discord = require('discord.js')
const bot = new Discord.Client()

client.login(NjgxNjIwNjQ5Mzk0ODMxNDEw.XlRG8g.cWnNQtW_F-2OydQJk6oBnqBoiFE);

module.exports = class roulettep2 extends command {
	static  match(message) {
		return message.content.startsWith('!roulette2')
	}

	static   action (message) {


const user = message.author.id;
const user2 = message.mentions.users.first();



		function kick1 (){


          if (user) {
  
    const member = message.guild.member(user);
      
    if (member) {
        
        
         
     member.kick('Optional reason that will display in the audit logs').then(() => {
         
    message.reply(`Successfully kicked ${user.tag}`);

                  })



	
				}

					
					}
						}



function kick2 (){
	 
                     
    
   	if (user2) {
  
    const member = message.guild.member(user2);
      
    if (member) {
        
        
         
     member.kick('Optional reason that will display in the audit logs').then(() => {
         
    message.reply(`Successfully kicked ${user.tag}`);

                  })



	
			}


			}

				}




 function getRandomIntInclusive(min, max) {
  min = Math.ceil(1);
  max = Math.floor(3);
  return Math.floor(Math.random() * (max - min +1)) + min;
	}


var nb = getRandomIntInclusive();

if (nb === 0 |2|4|6){setTimeout(kick2,3000);}else{setTimeout(kick2,3000);}




	}

}

