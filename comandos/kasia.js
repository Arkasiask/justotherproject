const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
   let bicon = message.client.iconURL;
   let gsize = bot.guilds.size
   let usize = bot.users.size
    let embed = new Discord.RichEmbed()
      .setTitle(" HOLA! Soy Kasia :heart:")
      .setColor("#cef442")
      .setFooter("Kasia | Información básica sobre mi!!! 😀 ", bot.user.avatarURL)
      .setDescription('Soy producto de la idea de crear un bot exclusivo para un solo servidor, algo nada ambicioso, más sin embargo, por la buena recepción que tuvo por parte de los usuarios se comenzó a trabajar en la expansión de mi a otros servidores. Mi desarrollo cuenta con la integración de comandos de casi todo tipo, más que todo esos famosos comandos **interactivos** entre usuarios, incluyendo también algunos básicos de **utilidad** y otros **administrativos.** ')
      .setThumbnail(bot.user.avatarURL)
      .addField("• Mi Nombre:", bot.user.username, true)
      .setTimestamp()
      .addField("• Programador:", "Arkasia#7701", true)
      .addField("• Nº de comandos:", '``40``', true)
      .addField("• Nº de Servers:", " ``"+gsize+"`` ", true)
      .addField("• Nº de Usuarios", " ``"+usize+"`` ", true)
      .addField("• Fecha de mi creación:", bot.user.createdAt, true)
      .addField("📥 Puedes invitarme a tu servidor con el comando", '``k!invite``', true)
      .addField("🌐 Pagina:", "https://kasia-bot.webnode.com.ve")
      .addField("💎 Patreon:", "https://www.patreon.com/kasiabot")

      message.channel.send(embed)

}

exports.help = {
  name: "kasia"
}
