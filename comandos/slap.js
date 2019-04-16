const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
  let user = message.mentions.users.first();
  let autor = "<@!"+message.author.id+">"

    const gifs =
          ["https://cdn.discordapp.com/attachments/368476786641862657/546548519796867073/giphy_1.gif", "https://cdn.discordapp.com/attachments/368476786641862657/546548553019817996/anime-slap-gif-14.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/546548670393221150/giphy.gif", "https://cdn.discordapp.com/attachments/368476786641862657/546548672075268106/1522022523_Rei_slaps_Shinji.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/546548695488004106/giphy_2.gif", "https://cdn.discordapp.com/attachments/368476786641862657/546548725376614410/o2SJYUS.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/546548726848815122/velga.gif", "https://cdn.discordapp.com/attachments/368476786641862657/546548728723537920/YA7g7h7.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/546548888862064642/Slap.gif", "https://cdn.discordapp.com/attachments/368476786641862657/546549041777999886/6fc8d6bbe59fba01-anime-slap-tumblr.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/546549112997412874/3iiocp7oxfvy.gif"]

          if (message.mentions.users.first() === message.author) return message.channel.send("¿Te vas a abofetear a ti mismo? :confused: ")
          if (message.mentions.users.first() === bot.user) return message.channel.send("Conmigo no puedes hacer eso, abusador!!! ")
          if (message.mentions.users.size <1) return message.reply("¿A quien le quieres dar una buena cachetada? :smiling_imp: ")

          const embed = new Discord.RichEmbed()
            .setDescription(""+autor+" ha cacheteado a "+user+" :smiling_imp:")
            .setColor("RANDOM")
            .setImage(gifs[Math.floor(gifs.length * Math.random())])
            message.channel.send(embed);

}

exports.help = {
  name: "slap"
}