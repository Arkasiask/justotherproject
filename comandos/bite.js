const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
   let user = message.mentions.users.first();
   let autor = "<@!"+message.author.id+">"

    const gifs =
            ["https://cdn.discordapp.com/attachments/544629061234720808/547575926532079616/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547577232902717449/tenor.gif",
            "https://cdn.discordapp.com/attachments/544629061234720808/547577293225066505/tumblr_mdb5upt2EI1r1z793o3_500.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547577475207659541/tenor_2.gif",
            "https://cdn.discordapp.com/attachments/544629061234720808/547578037588197376/tenor_6.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547578100297236482/1512580564_1442220503_be9d7b1509187211d5d99e6ce4b26cf8.gif",
            "https://cdn.discordapp.com/attachments/544629061234720808/547578264915279875/tenor_1.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547578396511830017/tenor_3.gif"]

            if (message.mentions.users.first() === message.author) return message.channel.send("No trates de morderte a ti mismo!!!")
            if (message.mentions.users.first() === bot.user) return message.channel.send("No trates de morderme, descarado")
            if (message.mentions.users.size <1) return message.reply("Debes buscar a alguien para morder!!!")

            const embed = new Discord.RichEmbed()
              .setDescription(""+autor+" ha mordido a "+user+" :grimacing:")
              .setColor("RANDOM")
              .setImage(gifs[Math.floor(gifs.length * Math.random())])
              message.channel.send(embed);

}

exports.help = {
  name: "bite"
}