const Discord = require("discord.js");

exports.run = (bot,message,args) => {
  if(!args[0]) return message.reply("¿Podrias hacer mejor tu pregunta?")
   let pregunta = args.slice(0).join(" ");
   let respuesta = ["¡Estas en lo cierto!",
                 "Puede ser :wink:",
                 "Sin duda, amigo",
                 "Sí, definitivamente :smile: ",
                 "Puedes estar seguro de ello ",
                 "No estes tan seguro de ello :sweat_smile: ",
                 "Por lo que veo, sí  ",
                 "Por lo que veo, no",
                 "Lo más probable",
                 "Buena perspectiva",
                 "¿Tu que crees?",
                 "Preguntale a tu corazon",
                 "Tu dilema se puede resolver con un rico y refrescante vaso de agua",
                 "¿Por que mejor no le preguntas a un amigo tuyo? oh... que no tienes, lo siento :confused: ",
                 "Tal vez debas pensar mejor lo que dices o haces",
                 "Seria genial",
                 "Supongo que si",
                 "Supongo que no",
                 "Si me preguntas a mi yo diria que no",
                 "si me preguntas a mi yo diria que sí",
                 "Sí",
                 "No",
                 "Todo apunta a que sí :smile:",
                 "Todo apunta a que no",
                 "No comprendo, vuelve a preguntar, amiguito",
                 "Ahora no, amigo",
                 "Pregunta más tarde, amigo",
                 "Mejor no te lo digo ahora, amigo",
                 "No podria decirte",
                 "Centrate y vuelve a preguntar, amigo",
                 "No cuentes con ello",
                 "Mi respuesta es no ",
                 "Los frutos dicen que no",
                 "Eso no luce bien ",
                 "Oh! Eso suena bien",
                 "Oh! Eso no suena nada bien",
                 "Podria ser buena idea... o tal vez no",
                 "La verdadera pregunta es... ¿Ya te bañaste?",
                 "La verdadera pregunta es... ¿Ya hiciste la tarea?",
                 "¿No es triste que tengas que consultar con un bot tus dudas? :thinking: ",
                 "Intentalo, amigo",
                 "Nope",
                 "Sipi",
                 "Es mejor no responderte a ello",
                 "Dudoso"];

   let result = Math.floor((Math.random() * respuesta.length) + 0);

   const embed = new Discord.RichEmbed()
    .setTitle(":8ball: | 8ball")
    .setThumbnail("https://cdn.discordapp.com/attachments/544629061234720808/558383397320261646/8_ball.png")
    .setColor("#f9f9f9")
    .addField("• Pregunta:", pregunta)
    .addField("• Respuesta:", respuesta[result])

    message.channel.send(embed)

}

exports.help = {
  name: "8ball"
}
