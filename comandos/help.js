const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados, amigo. :envelope_with_arrow:  ').then (m => m.delete(10000));

     const embed = new Discord.RichEmbed()
          .setTitle("Comandos de Kasia")
          .setDescription("Lista de comandos clasificados del bot")
          .setColor("RANDOM")
          .setFooter('Kasia | Si eres Moderador/Administrador del server consulta el comando "admin" ', bot.user.avatarURL)
          .addField(":gear: Utilidad", "info, avatar, invite, ping, server, kasia, report")
          .addField(":speech_balloon: Chat", "tirar, azar, f, +f, 8ball")
          .addField(":bulb: Interactivos", "kiss, pat, hug, slap, bite, poke, lick, punch, kill, tickles, tongue, nalguitas, feed")
          .addField(":heart: Emocionales", "blush, dance, cry, sleep, jpose")
          .addField(":underage: NSFW", "fuck")
     

message.author.send(embed)
message.delete(1000);

}

exports.help = {
  name: "help"
}
