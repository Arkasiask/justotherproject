const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
    let user = message.mentions.users.first();
let autor = "<@!"+message.author.id+">"

        const gifs =
            ["https://cdn.discordapp.com/attachments/368476786641862657/542423582022828033/sGVgr74.gif", "https://cdn.discordapp.com/attachments/368476786641862657/542431030855073813/eisk88U.gif",
             "https://cdn.discordapp.com/attachments/368476786641862657/542450495650922507/tumblr_n5rfnvvj7H1t62gxao1_500.gif", "https://cdn.discordapp.com/attachments/368476786641862657/542450989525893130/tumblr_o1henjRfTe1uapp8co1_400.gif",
             "https://cdn.discordapp.com/attachments/368476786641862657/542452429229391893/6e2fe9073f4e6aa4080e2e9ab5e3f790.gif", "https://cdn.discordapp.com/attachments/368476786641862657/542452915718193153/1483981778_giphy.gif",
             "https://cdn.discordapp.com/attachments/368476786641862657/547602461767237633/1464194946_image1_1.GIF", "https://cdn.discordapp.com/attachments/544629061234720808/555811478070886402/7a0ade3ffdabc143c8e03be9583e0793c6fc6187_hq.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555811478070886402/7a0ade3ffdabc143c8e03be9583e0793c6fc6187_hq.gif", "https://cdn.discordapp.com/attachments/544629061234720808/555811576234639370/560bb37b1596f48d93a76db4f87dc2f9.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555811673466863651/1f1ca2c09f171676503c2533319b354f.gif", "https://cdn.discordapp.com/attachments/544629061234720808/555811690055335940/96c41cba02bff4a9e28ded16bf484bf2.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555812224053280769/1393257265138.gif", "https://cdn.discordapp.com/attachments/544629061234720808/555812294785892372/1531905537_tumblr_oa4ipvyh2a1v2hfg0o9_1280.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555812361219604480/1543346640_1537653495_ecks_deedmdmdmdm.gif", "https://cdn.discordapp.com/attachments/544629061234720808/555812371369689143/1437593807_3.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555812597203599360/blas2.gif", "https://cdn.discordapp.com/attachments/544629061234720808/555812656628498442/blas3.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555812724026900480/blas1.gif", "https://cdn.discordapp.com/attachments/368476786641862657/555813044941357056/205943122000202.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555813367294459925/tenor_2.gif", "https://cdn.discordapp.com/attachments/544629061234720808/555813483137073174/blas4.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555813477479088141/tenor_1.gif", "https://cdn.discordapp.com/attachments/544629061234720808/555813486488322048/blas5.gif",
             "https://cdn.discordapp.com/attachments/544629061234720808/555813964164890637/tumblr_mmnmy6DXJj1s26ehyo1_500.gif", "https://cdn.discordapp.com/attachments/368476786641862657/555814139851833346/tenor.gif"];

     const autoEmbed = new Discord.RichEmbed()
                .setDescription(" "+autor+"  Si nadie te da uno, yo sí. TOMA!!! >w<")
                .setColor("RANDOM")
                .setImage(gifs[Math.floor(gifs.length * Math.random())])

      if (message.mentions.users.size <1) return message.channel.send(autoEmbed)          
	  if (message.mentions.users.first() === message.author) return message.channel.send("Veo que te quieres mucho :kiss:")
      if (message.mentions.users.first() === bot.user) return message.channel.send("No seas tan descarado :confounded: ")
      

 const embed = new Discord.RichEmbed()
                .setDescription(""+autor+" besó a "+user+" o//w//o :heart: ")
                .setColor("RANDOM")
                .setImage(gifs[Math.floor(gifs.length * Math.random())])
                message.channel.send(embed);


  

}

exports.help = {
  name: "kiss"
}