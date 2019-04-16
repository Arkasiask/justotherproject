const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let autor = "<@!"+message.author.id+">"

      const mensajito = ["Vamos a bailar todos!!! 🎵", "HE! HE! HE!", "Mueve ese trasero!!! 🎵", "La pista es toda tuya!!!", "Baila sin miedo 🎵🎵🎵", "Y eso que no hay musica puesta!", "Baila porque ustedes no hacen nada!!!"]

      const gifs =
                ["https://cdn.discordapp.com/attachments/544629061234720808/548312808643624971/tumblr_mm726eaxTF1sp5yuho1_500.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548313445079056384/VV8f9TC.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548313662914297861/tumblr_nabqxnv4A61til5l2o1_400.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548313880703795222/tumblr_n29fw1gYm61son3fpo1_500.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548314757397217280/tumblr_nmpr7yYkZ61updw00o2_500.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548314936661770240/large.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548315055746318376/189798505001201.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548315133689069588/936.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548317875585155087/f2b.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548318494635065359/I6nwbYWT-ruI3fLTyzLACQJcIDa53vbquKzUDyrYWQQ.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/548318627405758464/Dance_015.gif", "https://cdn.discordapp.com/attachments/544629061234720808/548318668082380810/tenor.gif",
                "https://cdn.discordapp.com/attachments/368476786641862657/567560403429752853/tenor_1.gif"]

      const embed = new Discord.RichEmbed()
          .setDescription(""+autor+" se puso a bailar!! :hushed:  ")
          .setColor("RANDOM")
          .setImage(gifs[Math.floor(gifs.length * Math.random())])
          .setFooter(mensajito[Math.floor(mensajito.length * Math.random())], bot.user.avatarURL)
          message.channel.send(embed)

}

exports.help = {
  name: "dance"
}
