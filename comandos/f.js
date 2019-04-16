const Discord = require("discord.js");

exports.run = (bot,message,args) => {
   let autor = "<@!"+message.author.id+">"
   let user = message.mentions.users.first();

   
   const embed = new Discord.RichEmbed()
    .setDescription(' **'+autor+'** presionó :regional_indicator_f:  para mostrar respeto')
    .setColor("RANDOM")
    

   if (message.mentions.users.size <1) return message.channel.send(embed)  

   const embedu = new Discord.RichEmbed()
    .setDescription(' **'+autor+'** presionó :regional_indicator_f: para mostrarle respetos a '+user+' ')
    .setColor("RANDOM")
    
    if(user) message.channel.send(embedu)


}

exports.help = {
  name: "f"
}
