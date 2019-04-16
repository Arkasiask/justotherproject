const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return
  if(!args[0]) return message.channel.send(":warning: Especifica la cantidad de mensajes a borrar (Maximo 100 mensajes) :warning: ").then (m => m.delete(10000))
    let number = args[0]
    if(isNaN(number)) return message.channel.send(":warning: Tienen que ser **números**, no letras ni signos! :warning: ").then (m => m.delete(10000))
    number = parseInt(number)
    if(number >= 100 || number <= 0) return message.channel.send (':warning: Tiene que ser una cantidad entre `1` y `100`, aprende a contar. :warning:').then (m => m.delete(10000))
    message.channel.bulkDelete(number + 1 ).then( () => {
      message.channel.send( `:recycle: Se han borrado ${number} mensajes exitosamente :recycle:`).then (m => m.delete(10000))
    }).catch(error => {
        message.channel.send(`UY! tenemos un problema: ${error.message}`)
    })

}

exports.help = {
  name: "clear"
}
