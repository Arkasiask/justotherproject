const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let user = message.mentions.users.first();
    let autor = "<@!"+message.author.id+">"

    const gifs = 
    	["https://cdn.discordapp.com/attachments/567866449327030312/567897477542576128/1.gif", "https://cdn.discordapp.com/attachments/567866449327030312/567897533125230611/2.gif", 
    	"https://cdn.discordapp.com/attachments/567866449327030312/567897567921307649/3.gif", "https://cdn.discordapp.com/attachments/567866449327030312/567897537185579047/4.gif",
    	"https://cdn.discordapp.com/attachments/567866449327030312/567898116502716456/5.gif", "https://cdn.discordapp.com/attachments/567866449327030312/567898057136406540/6.gif",
    	"https://cdn.discordapp.com/attachments/567866449327030312/567898106843365417/7.gif", "https://cdn.discordapp.com/attachments/567866449327030312/567898147624321065/8.gif",
    	"https://cdn.discordapp.com/attachments/567866449327030312/567898697032138762/9.gif", "https://cdn.discordapp.com/attachments/567866449327030312/567898791072628746/10.gif",
    	"https://cdn.discordapp.com/attachments/567866449327030312/567898660478779402/11.gif", "https://cdn.discordapp.com/attachments/567866449327030312/567898802573279243/12.gif",
    	"https://cdn.discordapp.com/attachments/567899221030862869/567899500513853470/13.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567899604188659753/14.gif",
    	"https://cdn.discordapp.com/attachments/567899221030862869/567899625344991252/15.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567899616448741396/16.gif",
    	"https://cdn.discordapp.com/attachments/567899221030862869/567900143576154122/17.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567900234030776321/18.gif",
    	"https://cdn.discordapp.com/attachments/567899221030862869/567900415472042004/19.gif", "https://cdn.discordapp.com/attachments/567899221030862869/567900292759289867/20.gif",]

      if (message.mentions.users.size <1) return message.channel.send("Menciona a quien le quieres dar de comer! owo")          
	  if (message.mentions.users.first() === message.author) return message.channel.send("Veo que te quieres mucho :kiss:")
      if (message.mentions.users.first() === bot.user) return message.channel.send("No seas tan descarado :confounded: ")

      	const embed = new Discord.RichEmbed()
      		.setDescription(" "+autor+" le ha dado de comer a "+user+" :ramen: ")
      		.setColor("RANDOM")
      		.setImage(gifs[Math.floor(gifs.length * Math.random())])
      		message.channel.send(embed)


}

exports.help = {
  name: "feed"
}