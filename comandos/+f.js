const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    if(!args[0]) return message.reply("escribe a que le quieres mostrar respeto")
    let autor = "<@!"+message.author.id+">"
    let saje = args.slice(0).join(" ");

    const embed = new Discord.RichEmbed()
      .setDescription(' '+autor+' presionó :regional_indicator_f: **'+saje+'** ')
      .setColor("RANDOM")

      message.channel.send(embed)


}

exports.help = {
  name: "+f"
}
