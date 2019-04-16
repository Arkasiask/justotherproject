const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let rUser = message.mentions.users.first();
    let razon = args.slice(0).join(' ');
    let rlog = message.guild.channels.find('name', 'reportes')

    

    let sEmbed = new Discord.RichEmbed()
      .setTitle(' ✅ |Reporte enviado')
      .setDescription('Tu reporte ha sido enviado satisfactoriamente y será revisado por los **Moderadores** ')
      .setColor("#15f153")
      .setAuthor(message.author.username, message.author.avatarURL)

      message.channel.send(sEmbed).then (m => m.delete(60000));

      let srEmbed = new Discord.RichEmbed()
       .setTitle(":exclamation:| Reporte")
       .setFooter("Kasia | Registro de Reporte", bot.user.avatarURL)
       .setColor("#15f153")
       .setThumbnail(message.author.avatarURL)
       .addField(":bust_in_silhouette:Reporte por:", message.author.username, true)
       .addField(":round_pushpin:Canal del reporte:", message.channel, true)
       .addField(":page_facing_up:Razon", razon)

       message.delete().catch();

       if(!rUser) return rlog.send(srEmbed);
       if(!rlog) return message.channel.send(':warning: Debe haber un canal llamado **#reportes** para poder usar este comando. :warning: ');
       if(!razon) return message.channel.send(':warning: Describe la razón, `k!report @username [razón]` :warning: ');


    let rEmbed = new Discord.RichEmbed()
      .setThumbnail(rUser.avatarURL)
      .setTitle(" :exclamation:| Reporte ")
      .setFooter("Kasia | Registro de Reporte ", bot.user.avatarURL)
      .setColor("#15f153")
      .setFooter("Kasia | Registro de reporte ", bot.user.avatarURL)
      .addField(":bust_in_silhouette: | Usuario reportado", `${rUser}`, true)
      .addField(":label: | ID", rUser.id, true)
      .addField(":spy: | Reportado por:", message.author.username, true)
      .addField(":round_pushpin: | Canal del reporte:", message.channel, true)
      .addField(":page_facing_up: | Razon", razon, true)
      rlog.send(rEmbed)
      message.delete().catch();

}

exports.help = {
  name: "report"
}
