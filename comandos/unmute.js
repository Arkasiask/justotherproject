const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require("ms");

exports.run = async (bot,message,args) => {
    let unmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!unmute) return message.reply(':warning: Debes mencionar a la persona que quieres **desmutear** :warning:');
    //let razon = args.slice(1).join(' ');
    //if(!razon) return message.reply(":warning: Especifica la razon del Mute :warning:")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return 
    if(unmute.hasPermission("MANAGE_MESSAGES")) return message.reply(" :warning: No puedes mutear a este usuario :warning:");

    let muterole = message.guild.roles.find("name", "Muted");
    if(!muterole) return;
    	
    //let mutetime = args[1];
    //if(!mutetime) return message.reply(":warning: Especifica el tiempo que durará el mute :warning:");
    await(unmute.removeRole(muterole.id));
    let log = message.guild.channels.find('name', 'klog')
    if(!log) return message.reply(':warning: Debe haber un canal llamado **#klog** para poder usar los comandos de Administración. :warning: ');

    const mEmbed = new Discord.RichEmbed()
    	.setTitle(":pushpin:|Registro de Unmute")
    	.setColor("#7442f4")
    	.setThumbnail(unmute.avatarURL)
    	.addField('• Desmuteado:', unmute, true)
    	.addField('• Desmuteado por:', message.author, true)

    	
    log.send(mEmbed)

    const gEmbed = new Discord.RichEmbed()
    	.setTitle(":no_entry_sign: Muteado")
    	.setColor("#7442f4")
    	.setDescription(" "+unmute+" ha sido desmuteado")

    	message.channel.send(gEmbed)
    	message.delete(1000);

}

exports.help = {
  name: "unmute"
}