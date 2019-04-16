const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
  let user = message.mentions.users.first();
  let autor = "<@!"+message.author.id+">"
  if (!user) return message.reply("Nombra a quien le quieres darle las nalgas :peach:");

  const mensajito = ["Ay que atrevid@", "///// disfrutalas", "Puedes darle nalgadas", "No todos los arboles sueltan asi las frutas :smirk:", "Si te las rompe no te quejes :smirk:",
                      "UFFF", "Cometelas antes de que alguien mas lo haga", ":heart:", ":eggplant: :smirk:",
                      "Esto es vergonzoso ////", "¡No las mires mucho!", "¿Satisfech@? :smirk:", "Fresca fruta uwu", "Sólo por esta vez!!!"]

  const embed = new Discord.RichEmbed()
    .setTitle("¡Nalguitas!")
    .setThumbnail("https://cdn.discordapp.com/attachments/287000835463053313/557338481408475150/20190318_190636.png")
    .setDescription(' **'+autor+'** le dió las :peach: a '+user+' ')
    .setColor("#ff8147")
    .addField(mensajito[Math.floor(mensajito.length * Math.random())], "▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔")
    message.channel.send(embed)
}

exports.help = {
  name: "nalguitas"
}
