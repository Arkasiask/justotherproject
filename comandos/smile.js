const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let autor = "<@!"+message.author.id+">"

    const mensajito = ["Sonriele a la vida", "Siempre con una sonrisa", "Siempre tan sonriente ¿no? 😁", "Dinos ¿A que le sonries? 😮", "Que lind@ se ve sonriendo", "Linda sonrisa :flushed:", "😊"]

    const gifs = 
    		["https://cdn.discordapp.com/attachments/568256545519960074/569409566916476946/1.gif", "https://cdn.discordapp.com/attachments/568256545519960074/569409395314917387/2.gif",
    		"https://cdn.discordapp.com/attachments/568256545519960074/569409601964081162/3.gif", "https://cdn.discordapp.com/attachments/568256545519960074/569409596888842242/4.gif",
    		"https://cdn.discordapp.com/attachments/568256545519960074/569409471915360269/5.gif", "https://cdn.discordapp.com/attachments/568256545519960074/569409612181274625/6.gif",
    		"https://cdn.discordapp.com/attachments/568256545519960074/569409400289230849/7.gif", "https://cdn.discordapp.com/attachments/568256545519960074/569409534704222218/8.gif",
    		"https://cdn.discordapp.com/attachments/568256545519960074/569409467184185358/9.gif", "https://cdn.discordapp.com/attachments/568256545519960074/569409535383699461/10.gif",
    		"https://cdn.discordapp.com/attachments/568256545519960074/569409654430367744/11.gif", "https://cdn.discordapp.com/attachments/568256545519960074/569409472384991243/12.gif",
    		"https://cdn.discordapp.com/attachments/568256545519960074/569409554954190859/13.gif", "https://cdn.discordapp.com/attachments/568256545519960074/569409620024623109/14.gif",]

    const embed = new Discord.RichEmbed()
     	.setDescription(" OH! "+autor+" ha puesto una gran sonrisa :smile: ")
     	.setColor("RANDOM")
     	.setImage(gifs[Math.floor(gifs.length * Math.random())])
     	.setFooter(mensajito[Math.floor(mensajito.length * Math.random())], bot.user.avatarURL)
          message.channel.send(embed)

}

exports.help = {
  name: "smile"
}