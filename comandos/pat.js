const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let user = message.mentions.users.first();
  let autor = "<@!"+message.author.id+">"

    const gifs =
          ["https://cdn.discordapp.com/attachments/368476786641862657/542834286785593344/4ssddEQ.gif", "https://cdn.discordapp.com/attachments/368476786641862657/542834479098495006/laEy6LU.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/542834586120486923/ed0176937f5de9412f3408cdfd4c6d88b1ec0df1_hq.gif", "https://cdn.discordapp.com/attachments/368476786641862657/542834607280881667/I3yvqFL.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/542834681754812416/9bbdd3c7884308f36df49d3a3b2eb6f7.gif", "https://cdn.discordapp.com/attachments/368476786641862657/542834705788174340/tenor.gif"];

          const sEmbed = new Discord.RichEmbed()
            .setDescription("Palmadita en la cabeza para ti, "+autor+" owo ")
            .setColor("RANDOM")
            .setImage(gifs[Math.floor(gifs.length * Math.random())])

          if (message.mentions.users.first() === message.author) return message.channel.send("Que triste que tengas que hacer eso :worried: ")
          if (message.mentions.users.size <1) return message.channel.send(sEmbed)

          const embed = new Discord.RichEmbed()
              .setDescription(""+autor+" ha acariciado a "+user+" owo ")
              .setColor("RANDOM")
              .setImage(gifs[Math.floor(gifs.length * Math.random())])
              message.channel.send(embed);

}

exports.help = {
  name: "pat"
}