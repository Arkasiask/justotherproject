const Discord = require("discord.js");
const bot = new Discord.Client();
const ascii = require("ascii-art")

exports.run = (bot,message,args) => {
	if(!args.join(' ')) return message.channel.send("¿Que quieres convertir en ascii?")    

		ascii.font(args.join(' '), 'Doom', async txt => {
			message.channel.send(txt,{
				code: 'md'
			});
		});

}

exports.help = {
  name: "ascii"
}