const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let user = message.mentions.users.first();
  let autor = "<@!"+message.author.id+">"

    const gifs =
            ["https://cdn.discordapp.com/attachments/544629061234720808/547588465722654721/244663-sword-art-online-poke-poke.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547588905340370964/anime-poke-gif-6.gif",
            "https://cdn.discordapp.com/attachments/544629061234720808/547589263752036364/tenor_2.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547589409030275083/Zi4ahyj.gif",
            "https://cdn.discordapp.com/attachments/544629061234720808/547589893686034440/tenor_4.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547590033121738752/tenor_3.gif",
            "https://cdn.discordapp.com/attachments/544629061234720808/547590495031918632/dff25b130a1f0ee5ea9ab56fdc6c2ba77c35513f_hq.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547590745373278211/Omake_Gif_Anime_-_Kuma_Miko_-_Episode_4_-_Machi_Cheek_Poke.gif",
            "https://cdn.discordapp.com/attachments/544629061234720808/547591162563788801/KeyImaginativeBushsqueaker-size_restricted.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547591766451421209/tenor_5.gif",
            "https://cdn.discordapp.com/attachments/544629061234720808/547591854498119690/tenor.gif", "https://cdn.discordapp.com/attachments/544629061234720808/547592132458971146/tenor_1.gif"]

            if (message.mentions.users.first() === message.author) return message.channel.send("Mejor pokea a alguien más")
            if (message.mentions.users.first() === bot.user) return message.channel.send("Ni te atrevas a tocarme")
            if (message.mentions.users.size <1) return message.reply("Menciona a quien quieres darle toquecitos")

          const embed = new Discord.RichEmbed()
              .setDescription(""+autor+" está dandole toquecitos a "+user+" :point_right: ")
              .setColor("RANDOM")
              .setImage(gifs[Math.floor(gifs.length * Math.random())])
              message.channel.send(embed)

}

exports.help = {
  name: "poke"
}