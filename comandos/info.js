const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
  let member = message.mentions.users.first() || message.author;
  if(message.mentions.users.first === bot.user) return message.reply('Puedes ver mi Información con el comando ``kasia``')
  let userembed = new Discord.RichEmbed()
      .setColor(message.guild.member(member).highestRole.color)
      .setThumbnail(member.displayAvatarURL)
      .setTitle(`Información de: ${member.username}'s `)
      .addField(`• Nombre:`, member.username, true)
      .addField(`• Id:`, member.id, true)
      .addField(`• Bot:`, member.bot ? "Sí" : "No", true)
      .addField("• Jugando a:", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "No está jugando", true)
      .addField("• Apodo:", message.guild.member(member).nickname ? message.guild.member(member).nickname : "Ninguno", true )
      .addField("• Ultimo mensaje:", member.lastMessage, true)
      .addField("• Fecha de ingreso:", message.member.joinedAt, true)
      .addField(`• Roles:`, message.guild.member(member).roles.map(s => s).join(" | "), true)

      message.channel.send(userembed);

}

exports.help = {
  name: "info"
}
