const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
  let user = message.mentions.users.first();
  let autor = "<@!"+message.author.id+">"

    const gifs =
          ["https://cdn.discordapp.com/attachments/368476786641862657/545091004890480640/jeujue.gif", "https://cdn.discordapp.com/attachments/368476786641862657/545091039485100043/c21cc49e5cb75da6dd14ede0bde19d936b490d65_hq.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/545091056534814753/d69b8ce822eac0d007aeeb26228e8a50.gif", "https://cdn.discordapp.com/attachments/368476786641862657/545091184704618508/FrenchShimmeringAmericanmarten-size_restricted.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/545091221018902530/r9aU2xv.gif", "https://cdn.discordapp.com/attachments/368476786641862657/545091222298034191/tenor.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/545091260864790529/6b4bb8820a05a841d3317172b7b0224f.gif", "https://cdn.discordapp.com/attachments/368476786641862657/545091279135047680/tumblr_oltayyHynP1sy5k7wo1_400.gif",
          "https://cdn.discordapp.com/attachments/368476786641862657/545091339860312074/tuH4gqZ.gif", "https://cdn.discordapp.com/attachments/368476786641862657/545091378158501899/tenor_1.gif",
          "https://cdn.discordapp.com/attachments/544629061234720808/555816610288369665/08dd8f1b7ee99f2e462312d25daaf709.gif", "https://cdn.discordapp.com/attachments/544629061234720808/555816685601554433/tumblr_o2xp1rxwoS1tlmyzco1_500.gif",
          "https://cdn.discordapp.com/attachments/544629061234720808/555816702852595716/tumblr_ok57cfaPmS1svj22bo1_500.gif"];

          const sEmbed = new Discord.RichEmbed()
          	.setDescription(" "+autor+" Toma un suave y tierno abrazo de **Kasia** 😁")
          	.setColor("RANDOM")
          	.setImage(gifs[Math.floor(gifs.length * Math.random())])

          if (message.mentions.users.size <1) return message.channel.send(sEmbed)	
          if (message.mentions.users.first() === message.author) return message.channel.send("Si nadie te abraza, entonces abrazalos tu!!! :smile:")
          
          const embed = new Discord.RichEmbed()
              .setDescription(""+autor+" ha abrazado a "+user+" nwn ")
              .setColor("RANDOM")
              .setImage(gifs[Math.floor(gifs.length * Math.random())])
              message.channel.send(embed);

}

exports.help = {
  name: "hug"
}