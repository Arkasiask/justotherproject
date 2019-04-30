const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    message.channel.send(bot.guilds.map(c=> c.name).join(","))

}

exports.help = {
  name: "serverlist"
}