const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    args = args.join(" ").split("|");
    sChannel = message.mentions.channels.first();

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;

    for (var i = 0; i < args.length; i++) args[i] = args[i].trim();

	if (args[5]) args[5] = parseInt(`0x${args[5]}`); 
	
	let options = {
		title: args[1] || '• Anuncio del Servidor •',
		message: args[2] || 'Hoja en blanco',
		name: args[3] ||'Kasia',
		icon: args[4] || '',
		embedColor: args[5] || 0xffffff
	}

	const embed = new Discord.RichEmbed()
		.setColor(options.embedColor)
		.setTitle(options.title)
		.setThumbnail(options.icon)
		.setFooter("•De:" + options.name)

		if (options.message) embed.setDescription(options.message);

		message.delete()

	if(sChannel) {
 	 	sChannel.send(embed)
 	 } else {
 	 	message.channel.send(embed)
 	 }		

}

exports.help = {
  name: "embed"
}