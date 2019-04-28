const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados, pervertid@. :envelope_with_arrow:  ').then (m => m.delete(10000));

    const nsfwlist = new Discord.RichEmbed()
    	.setTitle(":underage: Lista de comandos NSFW :underage:")
    	.setColor("#f9618f")
    	.setDescription('Eres un total **DESCARAD@** si estas pidiendo esta lista')
    	.addField('Comandos:', '•Fuck •Suck')



    	message.author.send(nsfwlist)
message.delete(1000);

}

exports.help = {
  name: "nsfw"
}