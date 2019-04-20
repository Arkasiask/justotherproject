const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
      let user = message.mentions.users.first();
      let autor = "<@!"+message.author.id+">"

      const gifs =
                ["https://cdn.discordapp.com/attachments/544629061234720808/547744946447187968/HJfGPTWbf.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547744953435029504/222035215014201.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547745099467980810/anime-punch-gif-9.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547745105272897542/tumblr_ogk36k1tT71son3fpo2_500.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547745202853642249/B50.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547745427525599242/lucy_punch_by_zombiegirl01-d4isxbn.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547745492772061194/d09e5ade3585cf1fa03b24dd8cbb07be54349f66_hq.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547745540335599635/giphy.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547745544383234048/tenor_2.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547745558211854336/tumblr_nmqo10FoDN1ri1zbno1_500.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547745606974570523/VuLl.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547745640952889344/tenor.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547745670552092692/tenor_1.gif"]

      const sEmbed = new Discord.RichEmbed()
        .setDescription(" "+autor+" ¿Planeas golpearme? ... Pues TOMA GOLPE!!! 😤  ")
        .setColor("RANDOM")
        .setImage(gifs[Math.floor(gifs.length * Math.random())])

         if (message.mentions.users.first() === message.author) return message.channel.send("No te golpees a ti mismo!!!")
         if (message.mentions.users.first() === bot.user) return message.channel.send(sEmbed)
         if (message.mentions.users.size <1) return message.reply("Dime a quien quieres golpear :smirk: ")

      const embed = new Discord.RichEmbed()
          .setDescription(""+autor+" le ha dado un fuerte puñetazo a "+user+" :punch:  ")
          .setColor("RANDOM")
          .setImage(gifs[Math.floor(gifs.length * Math.random())])
          message.channel.send(embed)

}

exports.help = {
  name: "punch"
}