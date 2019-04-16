const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
   let bicon = message.client.iconURL;
    let embed = new Discord.RichEmbed()
      .setTitle(":heart: HOLA! Soy Kasia")
      .setColor("#cef442")
      .setFooter("Kasia | Tabla de información sobre el bot", bot.user.avatarURL)
      .setDescription('**Conoce un poco más de mi**')
      .setThumbnail(bot.user.avatarURL)
      .addField("• Mi Nombre:", bot.user.username, true)
      .setTimestamp()
      .addField("• Programador:", "Arkasia#7701", true)
      .addField("• Nº de comandos:", '``34``', true)
      .addField("• Nº de Servers:", bot.guilds.size, true)
      .addField("• Nº de Usuarios", bot.users.size, true)
      .addField("• Fecha de mi creación:", bot.user.createdAt, true)
      .addField(" 📥 Puedes invitarme a tu servidor con el comando", '``k!invite``', true)
      .addField(":globe_with_meridians: Pagina:", "https://kasia-bot.webnode.com.ve")

      message.channel.send(embed)

}

exports.help = {
  name: "kasia"
}
