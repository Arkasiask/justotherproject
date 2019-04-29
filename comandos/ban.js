const Discord = require("discord.js");
const bot = new Discord.Client()

exports.run = (bot,message,args) => {

          let user = message.mentions.users.first();
          let razon = args.slice(1).join(' ');
          let log = message.guild.channels.find('name', 'klog')

          if(!log) return message.reply(':warning: Debe haber un canal llamado **#klog** para poder usar los comandos de Administración. :warning: ');
          if (message.mentions.users.size < 1) return message.reply(':warning: Debes mencionar a la persona que quieres **Banear** :warning: ').catch(console.error);
          if(!razon) return message.channel.send(':warning: Describe la razón, `k!ban @username [razón]` :warning: ');
          if(!message.guild.member(user).bannable) return message.reply(':warning: **No** puedo banear al usuario mencionado. :warning: ');
          if(!message.member.hasPermission("BAN_MEMBERS"))  return message.reply(':warning: **No** tienes tanto poder para hacer eso amigo! :warning: ');

          const gEmbed = new Discord.RichEmbed()
          .setTitle("Baneado")
          .setColor("#f21a2c")
          .setThumbnail(user.avatarURL)
          .addField('• Usuario:', user.username)
          .addField('• Razon', razon)

      message.channel.send(gEmbed);

      const embed = new Discord.RichEmbed()
      .setThumbnail(user.avatarURL)
      .setColor("#f21a2c")
      .setTitle(":pushpin: | Registro de Ban")
      .setFooter("Kasia | Registro de usuario baneado ", bot.user.avatarURL)
      .addField("• Usuario Baneado", user.username, true)
      .addField("• ID", user.id, true)
      .addField("• Baneado por:", message.author.username, true)
      .addField("• Razon", razon, true)
      message.guild.member(user).ban(razon).reason
      user.send(embed)
      log.send(embed)
      message.delete(1000);


}

exports.help = {
  name: "ban"
}
