const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let user = message.mentions.users.first();
   let autor = "<@!"+message.author.id+">"

      const gifs =
                ["https://cdn.discordapp.com/attachments/544629061234720808/547604162267971595/BCsw6.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547604261958320129/6C1.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547604445391880259/1524723447_ryGpGsnAZ.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547604580008067097/source.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547605151104368651/200.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547605449336160277/anime-lick-lips-gif-5.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547605543599079436/Raito_lamiendo_a_Yui.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547605673744138240/1473894188_tumblr_ocdmiujBEp1thwuv8o1_500.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547605685278343170/92b3653029e9196cfbedfd6a5ff3dc881488421004_full.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547605712260563004/SomberUnderstatedAnophelesmosquito-size_restricted.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547606208308183095/3cf.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547606604246155277/tenor_4.gif",
                "https://cdn.discordapp.com/attachments/544629061234720808/547606656947716126/tumblr_osuazevFcj1qcsnnso1_500.gif"]

            if (message.mentions.users.first() === message.author) return message.channel.send("Mejor lame a alguien owo!!!")
            if (message.mentions.users.first() === bot.user) return message.channel.send("Ni te atrevas a lamerme...")
            if (message.mentions.users.size <1) return message.reply("Menciona a quien quieres darle lamidas")

           const embed = new Discord.RichEmbed()
              .setDescription(""+autor+" ha lamido a "+user+" :stuck_out_tongue_winking_eye: ")
              .setColor("RANDOM")
              .setImage(gifs[Math.floor(gifs.length * Math.random())])
              message.channel.send(embed)

}

exports.help = {
  name: "lick"
}