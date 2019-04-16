const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
  let sicon = message.guild.iconURL;
let serverembed = new Discord.RichEmbed()
.setTitle("•INFORMACIÓN DEL SERVIDOR•")
.setDescription('**Tabla con información básica del server**')
.setColor("RANDOM")
.setFooter('Kasia | Usa ``help`` para más comandos', bot.user.avatarURL, true)
.setThumbnail(sicon)
.addField("•Nombre del server:", message.guild.name, true)
.addField("•Dueño:", message.guild.owner.user.tag, true)
.addField("•Region:", message.guild.region, true)
.addField("•Miembros", message.guild.memberCount, true)
.addField("•Roles:", message.guild.roles.size, true)
.addField("•Bots:", message.guild.members.filter(member => member.user.bot).size, true)
.addField("•Canales:", message.guild.channels.size, true)
.addField("•Fecha de creación:", message.guild.createdAt, true)
.addField("•Entraste:", message.member.joinedAt, true)


return message.channel.send(serverembed);

}

exports.help = {
  name: "server"
}
