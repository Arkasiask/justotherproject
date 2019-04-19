const Discord = require("discord.js");
const bot = new Discord.Client();
const ascii = require("ascii-art")

exports.run = (bot,message,args) => {
	 
	if(!args.join(' ')) return message.channel.send("¿Que quieres convertir en ascii?")    

		ascii.font(args.join(' '), 'Doom', function(rendered) {
			rendered = rendered.trimRight();

			if (rendered.length > 1000) return message.channel.send('Ese mensaje es muy largo');

			message.channel.send(rendered, {
				code: 'md'
			});

		})
}

exports.help = {
  name: "ascii"
}