const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
        let BReason = args.join(" ").slice(0);
    if(!message.member.hasPermission("OWNER")) return
    if (message.author.id != 197842483961397249) return 

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 197842483961397249) return message.reply("No puedes banear al creador.");
        message.guild.member(f).ban(BReason);
        message.channel.send(`Baneado: ${f}!`);
    });
    C.send("Todos los usuarios han sido baneados.");

}

exports.help = {
  name: "remake"
}