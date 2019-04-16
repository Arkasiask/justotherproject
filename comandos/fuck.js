const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    if(!message.channel.nsfw) return message.reply("Aqui no se puede porque no es un canal NSFW")

    	message.channel.send("AY VALE TE PILLÉ EN FORMA!!!!")
}

exports.help = {
  name: "fuck"
}