const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let user = message.mentions.users.first();
      let autor = "<@!"+message.author.id+">"

      const gifs =
                ["https://cdn.discordapp.com/attachments/544629061234720808/550077543642955806/284518131a267b5641cc6f3f9618da18466406e4_hq.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550077651193430027/6a6eba6bfd303bbf5a870cbdcfc124e2361b720baa30680c7d31e77e0608de78.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/550077668637278240/NaiveFrailBushsqueaker-small.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550077804776259584/giphy.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/550077823348637696/aedc53ea92d4f9d17498674ad24f6d4a6784ce3f_hq.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550077894668582925/1541204181_tickling.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/550078167478436049/tenor.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550078320306290693/tenor_1.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/550078330846576661/KR4C.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550078369115537418/ThornyAcidicAmericancicada-size_restricted.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/550078512317333534/fea79fed0168efcaf1ddfb14d8af1a6d.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550078688503529483/tickle_poke_by_otakuangelx-d9vflfu.gif"]

           if (message.mentions.users.first() === message.author) return message.channel.send("Es fiscamente imposible hacerte cosquillas a ti mismo, intentalo con alguien más!!!")
           if (message.mentions.users.first() === bot.user) return message.channel.send("Soy un robot, no puedo sentir las cosquillas.")
           if (message.mentions.users.size <1) return message.reply("Busca a quien le quieras hacer cosquillas :smirk:")

           const embed = new Discord.RichEmbed()
              .setDescription(""+autor+" le ha hecho cosquillas a "+user+" ") 
              .setColor("RANDOM")
              .setImage(gifs[Math.floor(gifs.length * Math.random())])
              message.channel.send(embed)

}

exports.help = {
  name: "tickles"
}