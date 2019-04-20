const Discord = require("discord.js");

exports.run = (bot,message,args) => {
      
      if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return 

     let argsresult;
 	 let sChannel = message.mentions.channels.first()

 	 message.delete()
 	 if(sChannel) {
 	 	argsresult = args.slice(1).join(" ")
 	 	sChannel.send(argsresult)
 	 } else {
 	 	argsresult = args.join(" ")
 	 	message.channel.send(argsresult)
 	 }

}

exports.help = {
  name: "say"
}

///Comando say - decir
