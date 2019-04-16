const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let user = message.mentions.users.first();
    let autor = "<@!"+message.author.id+">"

    const gifs = 
              ["https://cdn.discordapp.com/attachments/544629061234720808/550100315014299668/tenor_1.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550100469024817163/PaleRightBaboon-small.gif",
              "https://cdn.discordapp.com/attachments/544629061234720808/550100674852028416/tenor_3.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550100689620041744/giphy.gif",
              "https://cdn.discordapp.com/attachments/544629061234720808/550100728270553088/tongue-anime-gif-2.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550100813293551616/Pxg.gif",
              "https://cdn.discordapp.com/attachments/544629061234720808/550100926573182986/tenor_2.gif", "https://cdn.discordapp.com/attachments/544629061234720808/550101031049232394/tenor.gif",]

         if (message.mentions.users.first() === message.author) return message.channel.send("¿Te burlas de ti mismo?") 
         if (message.mentions.users.first() === bot.user) return message.channel.send("No seas inmaduro :$ ") 
         if (message.mentions.users.size <1) return message.reply("¿A quien le vas a sacar la lengua?")

         const  embed = new Discord.RichEmbed()
              .setDescription(" "+autor+" le sacó la lengua a "+user+" :stuck_out_tongue_winking_eye: ")
              .setColor("RANDOM")
              .setImage(gifs[Math.floor(gifs.length * Math.random())]) 
              message.channel.send(embed)

}

exports.help = {
  name: "tongue"
}