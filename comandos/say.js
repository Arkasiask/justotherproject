const Discord = require("discord.js");

exports.run = (bot,message,args) => {
      var text = message.content.split(' ').slice(1).join(' ')
      if (!text) return message.reply('Di algo ¿no?')
      message.delete().catch();
      message.channel.send(text)

}

exports.help = {
  name: "say"
}

///Comando say - decir
