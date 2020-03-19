const Discord = require("discord.js");
const bot = new Discord.Client();

export.run = (bot,message,args) => {

	image = message.attachments.first().url;
	bot.user.setAvatar(image);


}

exports.help = {

	name: "shange"
}