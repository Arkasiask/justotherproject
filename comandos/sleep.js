const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
     let autor = "<@!"+message.author.id+">"

     const mensajito = ["Dulces sueños... zzZ", "Que descanses... zzZ", "Shhh...", "Guarden silencio...", "Que tiern@ se ve ❤", "Sueña con los angelitos... zzZ", "No hagan ruido... zzZ", "Una siesta no vendria nada mal ❤"]

     const gifs = 
     		["https://cdn.discordapp.com/attachments/368476786641862657/567092247695196160/3fYL8i6Q-n-155t3dn_4oa8joxN4d65hmFMp22bNTIUW3ufQExKZv-GKL4AdqgU.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567092248848891933/3fYL8i6Q-n-155t3dn_4jAuMHhi96tyYy7myzjSEZ3s47VsbZNvBC4sH1mEYvRE.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567092331107450891/3fYL8i6Q-n-155t3dn_4r102rO13nTjT4m7dTEfIUmuQSCOgE_DMfZMchYbwgz0.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567092440779980830/095.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567092847304769606/1449633772921.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567092931459284992/anime-sleep-gif-9.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567092943169650719/928cd76c937e2f4c6d998651c2c88d58.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567092954305527838/1493258632809.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567093235370033153/dasdadsad2e1.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567093250293366805/DrearyDenseFlicker-size_restricted.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567093288772042762/f510caf9e601d0484d52579411a9168e6ecf8387_hq.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567093594616233984/giphy-downsized-large.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567093774992408581/hCyzlL.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567093788779216906/original.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567093844114538506/original_1.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567094011307753482/tenor.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567094160822370324/tumblr_lqyjomallx1qfjhqfo1_500.gif", "https://cdn.discordapp.com/attachments/368476786641862657/567094197895692348/tumblr_m5dorjcPGS1r3aka4o1_500.gif",
     		"https://cdn.discordapp.com/attachments/368476786641862657/567094200152227840/tumblr_meq5k6m4pI1r9az4fo1_r1_500.gif"]

     const embed = new Discord.RichEmbed()
     	.setDescription(" OH! "+autor+" se ha dormido :sleeping: ")
     	.setColor("RANDOM")
     	.setImage(gifs[Math.floor(gifs.length * Math.random())])
     	.setFooter(mensajito[Math.floor(mensajito.length * Math.random())], bot.user.avatarURL)
          message.channel.send(embed)

}

exports.help = {
  name: "sleep"
}