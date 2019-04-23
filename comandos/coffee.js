const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")

exports.run = (bot,message,args) => {
  let user = message.mentions.users.first();
  let autor = message.author.username
  if (!user) return message.reply("Un café sabe mejor acompañado de alguien, nombralo ☕");
  if (message.mentions.users.first() === message.author) return message.channel.send("En solitario es muy amargo el café. Mejor compartelo con alguien del server.")

   let cafecitos = JSON.parse(fs.readFileSync("./cafecitos.json", "utf8"));
   		if(!cafecitos[message.author.id]){
   			cafecitos[message.author.id] = 0
   		
   		}

   		cafecitos[message.author.id]++

   		fs.writeFile("./cafecitos.json", JSON.stringify(cafecitos), (err) => {
 		if (err) console.log(err)
 	});	 	

  const mensajito = ["Que buen café ¿no? ☕", "¿Una cucharadita de azucar?", "¿Doble o suave?", "Acompañado de un rico pan azucarado 🥖", "Un rico café hecho por Mamá", "Podria tomarlo todo el día", "Ve y compra pan para acompañar", "No dejes que se enfrie, es mucho mejor caliente", "¿No le gustaria pasar a tomar una tacita de cafe?", "1 taza de ☕, 2 tazas de ☕ "]
   	
   	const embed = new Discord.RichEmbed()
    .setTitle("Hora del Café ☕")
    .setThumbnail("https://cdn.discordapp.com/attachments/569403035718254593/569403187023314964/Hot_Coffee_Emoji_large.png")
    .addField(' **'+autor+'** comparte una taza de ☕ con '+user.username+' ', mensajito[Math.floor(mensajito.length * Math.random())])
    .setColor("#593b19")
    .setFooter("☕| " + cafecitos[message.author.id])
    message.channel.send(embed)
}

exports.help = {
  name: "coffee"
}
