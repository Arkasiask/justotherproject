const Discord = require("discord.js");

exports.run = (bot,message,args) => {
  var result = Math.floor((Math.random() * 100) + 1);
    const embed = new Discord.RichEmbed()
      .setTitle(":game_die: Azar")
      .setColor("#cef442")
      .setThumbnail("https://cdn.discordapp.com/attachments/544629061234720808/559089450550820931/dado.png")
      .addField("Número al azar", result)
      message.channel.send(embed)
}

exports.help = {
  name: "azar"
}
