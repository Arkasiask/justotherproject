const Discord = require("discord.js");
const bot = new Discord.Client();


exports.run = (bot,message,args) => {
    message.channel.send('**'+message.author.username+'**, Te he enviado mi link de invitación a tus mensajes privados, amigo. :envelope_with_arrow:  ').then (m => m.delete(10000));

    	const inviteEmbed = new Discord.RichEmbed()
    		.setTitle("»»Click aquí para invitarme a tu servidor««")
    		.setURL("https://discordapp.com/oauth2/authorize?client_id=549765424187703327&scope=bot&permissions=1345611902")
    		.setColor("RANDOM")
    		.setDescription('**Kasia** es una linda amiga Bot para tu servidor, tiene muchos comandos *interactivos* para los usuarios de tu servidor, comandos de *utilidad* y comandos *administrativos*, es un todo en uno. **¡¡Que tu servidor no se quede sin ella!!**')
            .addField(":globe_with_meridians: Pagina de Kasia:", "https://kasia-bot.webnode.com.ve")
            .addField("💎 Patreon:", "https://www.patreon.com/kasiabot")
    		.setTimestamp()
    		.setImage("https://images-ext-2.discordapp.net/external/zkj_qDX-gRvHfBkNH_iLql-rurd1Zp5I40s-q1Wjoeg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/549765424187703327/9ee6cdf69c9378231780a78870d99de8.png?width=468&height=468")
    		.setFooter("Kasia | Bot creado por y para la comunidad", bot.user.avatarURL)

	message.author.send(inviteEmbed)
}

exports.help = {
  name: "invite"
}
