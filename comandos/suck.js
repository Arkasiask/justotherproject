const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
   let user = message.mentions.users.first();
   let autor = "<@!"+message.author.id+">"

    const gifs = ["https://cdn.discordapp.com/attachments/568146658756657158/572176426606919681/1.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572176389629935616/2.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572176603895824394/3.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572176389403443220/4.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572176796133490688/5.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572176982637543444/6.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572176993991393281/7.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572176956091531264/8.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572177378894413826/9.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572177452206522369/10.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572177441204994048/11.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572177350553501736/12.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572177949810360330/13.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572178078210588692/14.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572178038973005864/15.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572177974271410177/16.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572178275414310912/17.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572178260591378442/18.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572178341927583784/20.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572178222129872896/21.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572179016476262420/22.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572179013817073684/23.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572179169748713521/24.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572179022612529162/25.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572179381766717445/26.gif", "https://cdn.discordapp.com/attachments/568146658756657158/572179468181962753/27.gif",
    			  "https://cdn.discordapp.com/attachments/568146658756657158/572179424984956928/28.gif"]	

    if(!message.channel.nsfw) return message.reply("HE!!! Esto no es un canal NSFW, respeten :flushed: ")
    if (message.mentions.users.size <1) return message.channel.send("Menciona a quien le quieres dar un chupi :smirk:")          
	if (message.mentions.users.first() === message.author) return message.channel.send("Ehh no puedes hacer eso.")
    if (message.mentions.users.first() === bot.user) return message.channel.send("NO! NO! NO! NI LO INTENTES!!!")

    const embed = new Discord.RichEmbed()
    	.setDescription(" "+autor+" le hace un oral a "+user+" :kissing_closed_eyes::eggplant:  ")
    	.setColor("RANDOM")
    	.setImage(gifs[Math.floor(gifs.length * Math.random())])
   message.channel.send(embed);

}

exports.help = {
  name: "suck"
}