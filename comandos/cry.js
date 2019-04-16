const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let autor = "<@!"+message.author.id+">"

      const mensajito = ["T-T", "Oh no!! ¿Quien le hizo llorar?", "No llores, Por favor 💔", "Rapido!!! Alguien dele un abrazo.", "💔", "Es triste verle así.💔", "¿Por que lloras?", "EEEHH... AMMM!! No llores!!! mira un conejito... "]
      const gifs =
                ["https://cdn.discordapp.com/attachments/544629061234720808/548378311555022878/Anime-girl-crying.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548378418559844363/tenor_1.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548378517222588417/giphy_1.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548378521270222848/KiXk.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548378608943628288/CraftyCircularHylaeosaurus-max-1mb.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548378661196136458/giphy.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548378671765782528/giphy_2.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548378792767389696/tenor.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548378818318958601/0f3.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548378827877777426/crying-meme-face-Gif.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548378852032905226/7239144f9492a477092d05271e10657b9e1a335b_hq.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548378857015869461/tumblr_inline_or4whcrg1z1ueut6r_540.gif"]

                 const embed = new Discord.RichEmbed()
          .setDescription(""+autor+" se puso a llorar!! :sob:")
          .setColor("RANDOM")
          .setImage(gifs[Math.floor(gifs.length * Math.random())])
          .setFooter(mensajito[Math.floor(mensajito.length * Math.random())], bot.user.avatarURL)
          message.channel.send(embed)

}

exports.help = {
  name: "cry"
}