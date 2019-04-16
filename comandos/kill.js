const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let user = message.mentions.users.first();
      let autor = "<@!"+message.author.id+">"

        const gifs =
                  ["https://cdn.discordapp.com/attachments/544629061234720808/548369502883282944/dBBw41.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548369564086566923/52e0c43aea08e5bb06ff9491cfda559bc02a5469_hq.gif",
                  "https://cdn.discordapp.com/attachments/544629061234720808/548369603642785831/SilverSmoggyCatbird-small.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548369622265757696/source.gif",
                  "https://cdn.discordapp.com/attachments/544629061234720808/548369628569534464/tumblr_n7oa3iF8jk1qa7av8o1_500.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548369688250417175/690ea0f0dd927d10853e0a8fa88c9e647cc63fe0_hq.gif",
                  "https://cdn.discordapp.com/attachments/544629061234720808/548369966823374850/Uvgq.gif"]

         if (message.mentions.users.first() === message.author) return message.channel.send("¿Ya te quieres matar de nuevo?")
         if (message.mentions.users.first() === bot.user) return message.channel.send("¿En serio? Haré como si no lo hubieras tratado de hacer. ewe")
         if (message.mentions.users.size <1) return message.reply("Selecciona a tu victima!!! ")

      const embed = new Discord.RichEmbed()
          .setDescription(""+autor+" ha matado a "+user+" :skull_crossbones: ")
          .setColor("RANDOM")
          .setImage(gifs[Math.floor(gifs.length * Math.random())])
          message.channel.send(embed)

}

exports.help = {
  name: "kill"
}