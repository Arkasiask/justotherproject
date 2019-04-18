const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
     let autor = "<@!"+message.author.id+">"

     const mensajito = ["Adiós mundo cruel", "Nadie pudo salvarle", "Era muy genial para este mundo", "RIP", "F", "Si algún día quiso vivir, ese día no era hoy", "Descansa en paz...", "¿Eso significa que tomaremos café en su velorio? 😃", "Unos que llegan y otros que se van",]  

     const gifs =
     	       ["https://cdn.discordapp.com/attachments/568256545519960074/568256990283956235/1.gif", "https://cdn.discordapp.com/attachments/568256545519960074/568256894481858580/2.gif",
     	       "https://cdn.discordapp.com/attachments/568256545519960074/568257032327659541/3.gif", "https://cdn.discordapp.com/attachments/568256545519960074/568257210900152340/4.gif",
     	       "https://cdn.discordapp.com/attachments/568256545519960074/568256854875045893/5.gif", "https://cdn.discordapp.com/attachments/568256545519960074/568256951717199893/6.gif",
     	       "https://cdn.discordapp.com/attachments/568256545519960074/568257048953749505/7.gif", "https://cdn.discordapp.com/attachments/568256545519960074/568257180784918531/8.gif",
     	       "https://cdn.discordapp.com/attachments/568256545519960074/568256892292431887/9.gif", "https://cdn.discordapp.com/attachments/568256545519960074/568256838919913473/10.gif"]

     const embed = new Discord.RichEmbed()
     	.setDescription(" "+autor+" se ha suicidado :skull:  ")
     	.setColor("RANDOM")
     	.setImage(gifs[Math.floor(gifs.length * Math.random())])
          .setFooter(mensajito[Math.floor(mensajito.length * Math.random())], bot.user.avatarURL)
          message.channel.send(embed)
}

exports.help = {
  name: "suicide"
}