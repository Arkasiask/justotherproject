const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
     let autor = "<@!"+message.author.id+">"

     const mensajito = ["B-Baka", "¿E-EH?", ">/////<", "Ca-Callate!!!", "Que lindo ❤", "Rojit@ como un tomate", "Que pena!!!", "o////o", "o//w//o ❤", "Eso ha sido muy adorable n///n"]

      const gifs =
                ["https://cdn.discordapp.com/attachments/544629061234720808/548294824940535809/tumblr_niqngeUn2K1u55xnmo2_500.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548294876601647104/1526845376359.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548294887133544499/tumblr_n252ztaSyq1qckkfko2_500.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548295245088030720/tenor_1.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548295316466565121/DistantHalfKitten-small.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548295605017903134/tumblr_n02m902fgm1r4kkpvo1_500.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548295994517880843/N8X5Vmb.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548296114617450522/tenor.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548296113849892875/1440300006_tumblr_n06t5iftFV1smxplyo1_500.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548296120980340736/1471551022_tumblr_motjtmee8T1rkmjjzo1_500.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548296117226438656/original.gif"]

      const embed = new Discord.RichEmbed()
          .setDescription(""+autor+" se ha sonrojado /////  ")
          .setColor("RANDOM")
          .setImage(gifs[Math.floor(gifs.length * Math.random())])
          .setFooter(mensajito[Math.floor(mensajito.length * Math.random())], bot.user.avatarURL)
          message.channel.send(embed)

}

exports.help = {
  name: "blush"
}