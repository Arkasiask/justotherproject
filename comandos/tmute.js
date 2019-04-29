const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require("ms");

exports.run = async (bot,message,args) => {
    let umute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!umute) return message.reply(':warning: Debes mencionar a la persona que quieres **Mutear** :warning:');
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return 
    if(umute.hasPermission("MANAGE_MESSAGES")) return message.reply(" :warning: No puedes mutear a este usuario :warning:");

    let muterole = message.guild.roles.find("name", "Muted");
    if(!muterole){
    	try{
    		muterole = await message.guild.createRole({
    			name: "Muted",
    			color: "#000000",
    			permissions: []
    		});
    	}catch(e){
    		console.log("No se pudo crear el rol");
    		console.log(e.stack);
    	}
    }	
    	
    try{
    	message.guild.channels.forEach(async (channel, id) => {
    		await channel.overwritePermissions(muterole, {
    			SEND_MESSAGES: false,
    			ADD_REACTIONS: false,
    			SPEAK: false
    		});
    	});
    }catch(e){
    	console.log("No se pudo actualizar el rol");
    	console.log(e.stack);
    }

    let mutetime = args[1];
    if(!mutetime) return message.reply(":warning: Especifica el tiempo que durará el mute en segundos, minutos u hora: ``k!tmute @user 10s razon`` :warning:");
     let razon = args.slice(2).join(' ');
    if(!razon) return message.reply(":warning: Especifica la razon del Mute :warning:")
    
    setTimeout(function() {
        umute.removeRole(muterole.id);
        message.channel.send(` ${umute} ha sido desmuteado despues de ${mutetime} , portate bien para la proxima.`)

    }, ms(mutetime));

    await(umute.addRole(muterole.id));
    let log = message.guild.channels.find('name', 'klog')
    if(!log) return message.reply(':warning: Debe haber un canal llamado **#klog** para poder usar los comandos de Administración. :warning: ');

    const mEmbed = new Discord.RichEmbed()
    	.setTitle(":pushpin:|Registro de Mute")
    	.setColor("#7442f4")
    	.setThumbnail(umute.avatarURL)
    	.addField('• Muteado:', umute, true)
    	.addField('• Muteado por:', message.author, true)
        .addField('• Duración:', mutetime, true)
    	.addField('• Razon:', razon)
    	

    	log.send(mEmbed)

    const gEmbed = new Discord.RichEmbed()
    	.setTitle(":no_entry_sign: Muteado")
    	.setColor("#7442f4")
    	.setDescription(" "+umute+" ha sido muteado "+mutetime+" por: **"+razon+"** ")

    	message.channel.send(gEmbed)
    	message.delete(1000);

}

exports.help = {
  name: "tmute"
}