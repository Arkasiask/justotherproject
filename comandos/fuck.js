const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
		 let user = message.mentions.users.first();
		 let autor = "<@!"+message.author.id+">"

		 const gifs = 
		 			["https://cdn.discordapp.com/attachments/568146658756657158/568149465073057792/1.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568149445116690435/2.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568149550775271424/3.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568149539127558184/4.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568149896876654598/5.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568149881009733632/6.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568149958990233616/7.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568149967898935326/8.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568150303321489409/9.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568150474403086347/10.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568150463820857368/11.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568150340055072780/12.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568150942818500608/13.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568151214114734092/14.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568150898946342913/15.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568150907603386368/16.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568151494210093088/17.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568151460055875652/18.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568151493425889280/19.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568151443564003373/20.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568151895038885915/21.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568151900004941846/22.gif",
		 			"https://cdn.discordapp.com/attachments/568146658756657158/568151939641245736/23.gif", "https://cdn.discordapp.com/attachments/568146658756657158/568151951498280984/24.gif"]


    if(!message.channel.nsfw) return message.reply("HE!!! Esto no es un canal NSFW, respeten :flushed: ")
    if (message.mentions.users.size <1) return message.channel.send("Menciona a quien quieres Follarte :smirk:")          
	if (message.mentions.users.first() === message.author) return message.channel.send("Ehh no puedes hacer eso.")
    if (message.mentions.users.first() === bot.user) return message.channel.send("NO! NO! NO! NI LO INTENTES!!!")	

    	 const embed = new Discord.RichEmbed()
    		.setDescription(" "+autor+" se está follando a "+user+" :flushed: ")
    		.setColor("RANDOM")
    		.setImage(gifs[Math.floor(gifs.length * Math.random())])
                message.channel.send(embed);
    	
}

exports.help = {
  name: "fuck"
}