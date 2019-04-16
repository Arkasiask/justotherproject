const Discord = require("discord.js");
const bot = new Discord.Client()

exports.run = (bot,message,args) => {
  let user = message.mentions.users.first();
      let razon = args.slice(1).join(' ');
      let log = message.guild.channels.find('name', 'klog')

      if(!log) return message.reply(':warning: Debe haber un canal llamado **#klog** para poder usar los comandos de Administración. :warning: ');
      if (message.mentions.users.size < 1) return message.reply(':warning: Debes mencionar a la persona que vas a **kickear** :warning: ').catch(console.error);
      if(!razon) return message.channel.send(':warning: Describe la razón, `k!kick @username [razón]` :warning: ');
      if(!message.guild.member(user).bannable) return message.reply(':warning: **No** puedo **Kickear** a este usuario. :warning: ');
      if(!message.member.hasPermission("KICK_MEMBERS"))  return

      const gEmbed = new Discord.RichEmbed()
        .setTitle("Kickeado")
        .setColor("#ff900a")
        .setThumbnail(user.avatarURL)
        .addField('• Usuario:', user.username)
        .addField('• Razon', razon)

message.channel.send(gEmbed);


  const embed = new Discord.RichEmbed()
  .setThumbnail(user.avatarURL)
  .setColor("#ff900a")
  .setTitle(":pushpin: | Registro de Kick")
  .setFooter("Kasia | Registro de usuario kickeado", bot.user.avatarURL)
  .addField(":bust_in_silhouette: | Usuario Kickeado", user.username, true)
  .addField(":label: | ID", user.id, true)
  .addField(":spy: | Kickado por:", message.author.username, true)
  .addField(":page_facing_up: | Razon", razon, true)

  message.guild.member(user).kick(razon).reason
  user.send(embed)
  log.send(embed)
  message.delete(1000);

}

exports.help = {
  name: "kick"
}
