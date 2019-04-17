const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let autor = "<@!"+message.author.id+">"

    const mensajito = ["Yare Yare Daze", "Za warudo", "Kono dio da", "Ora Ora Ora Ora!!!", "Fabuloso ✨", "WOW!!! ✨", "!!!!!!!!!!",]

    const gifs = 
    		["https://cdn.discordapp.com/attachments/567899221030862869/567914288933765135/1.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567914275545546772/2.gif",
    		"https://cdn.discordapp.com/attachments/567899221030862869/567914290263097354/3.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567914397389946880/4.gif",
    		"https://cdn.discordapp.com/attachments/567899221030862869/567915803924496384/5.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567915813223399465/6.gif",
    		"https://cdn.discordapp.com/attachments/567899221030862869/567915815886913536/7.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567915844613570600/8.gif",
    		"https://cdn.discordapp.com/attachments/567899221030862869/567916779809144853/9.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567916520378859520/10.gif",
    		"https://cdn.discordapp.com/attachments/567899221030862869/567916825367674900/11.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567916674523856915/12.gif",
    		"https://cdn.discordapp.com/attachments/567899221030862869/567917726778130434/13.gif"]

    const embed = new Discord.RichEmbed()
          .setDescription(""+autor+" Ha hecho una fabulosa JoJo's Pose!!! :sparkles:")
          .setColor("RANDOM")
          .setImage(gifs[Math.floor(gifs.length * Math.random())])
          .setFooter(mensajito[Math.floor(mensajito.length * Math.random())], bot.user.avatarURL)
          message.channel.send(embed)

}

exports.help = {
  name: "jpose"
}