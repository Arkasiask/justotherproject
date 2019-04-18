const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados, amigo. :envelope_with_arrow:  ').then (m => m.delete(10000));

    	const inviteEmbed = new Discord.RichEmbed()
    		.setTitle("»»Click Aquí««")
    		.setURL("https://discordapp.com/oauth2/authorize?client_id=567847484743876649&scope=bot&permissions=1345611902")
    		.setColor("RANDOM")
    		.setDescription('**Invita a Kasia a travez del boton de arriba!!!**')
            .addField(":globe_with_meridians: Pagina del bot:", "https://kasia-bot.webnode.com.ve")
    		.setTimestamp()
    		.setImage("https://images-ext-2.discordapp.net/external/zkj_qDX-gRvHfBkNH_iLql-rurd1Zp5I40s-q1Wjoeg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/549765424187703327/9ee6cdf69c9378231780a78870d99de8.png?width=468&height=468")
    		.setFooter("Kasia | Bot creado por y para la comunidad", bot.user.avatarURL)

	message.author.send(inviteEmbed)
}

exports.help = {
  name: "invite"
}
