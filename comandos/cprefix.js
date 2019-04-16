const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")

exports.run = (bot,message,args) => {
    
    if(!args[0] || args[0 == "help"]) return message.reply('Utiliza: ``k!cprefix <nuevo prefix>`` para establecer uno nuevo.')
    if(!message.member.hasPermission("ADMINISTRATOR")) return

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
	
	prefixes[message.guild.id] = {
		prefixes: args[0]
	};
 	
 	fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
 		if (err) console.log(err)
 	});

 	const cEmbed = new Discord.RichEmbed()
 	.setTitle("✅ | Prefix establecido")
 	.setColor("#15f153")
 	.setDescription(`El prefix de **Kasia** ha sido cambiado a: ${args[0]}`);

 	message.channel.send(cEmbed)

}

exports.help = {
  name: "cprefix"
}