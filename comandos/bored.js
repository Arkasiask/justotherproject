const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let autor = "<@!"+message.author.id+">"

    const mensajito = ["Que aburrimiento 😑 ", "¿Podriamos hacer algo mejor? 😑 ", "¿Alguien tiene un plan? 😩", "Parece sabado por la tarde ☹", "Alguien haga algo 😒", "Habria que ponerse a jugar 😑","Esta que cae en coma de aburrimiento", "Mejor ponte a estudiar si tan aburrido estas 😊", "Soy un bot que lee sus cosas, más aburrido que yo no creo que esten 😒", " 😮 Cómo diria mamá: Ponte a hacer oficios entonces 😋"]

    const gifs = ["https://cdn.discordapp.com/attachments/570631614502273102/570631969264762900/1.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570631855070773248/2.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570631889392631811/3.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570631792126722058/4.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570632310253158410/5.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570632444064301066/6.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570632447918866432/7.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570632438074834974/8.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570632982176727061/9.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570632910462255115/10.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570632912035381258/11.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570632889222430720/12.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570633378743713795/13.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570633373354033154/14.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570633422192640021/15.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570633339560787978/16.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570633634034352139/17.gif", "https://cdn.discordapp.com/attachments/570631614502273102/570633658944454656/18.gif",
    			"https://cdn.discordapp.com/attachments/570631614502273102/570633666255126543/19.gif"]

    const embed = new Discord.RichEmbed()
          .setDescription(""+autor+" Está aburrido 😑 ")
          .setColor("RANDOM")
          .setImage(gifs[Math.floor(gifs.length * Math.random())])
          .setFooter(mensajito[Math.floor(mensajito.length * Math.random())], bot.user.avatarURL)
          message.channel.send(embed)
}

exports.help = {
  name: "bored"
}