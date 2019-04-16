const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot,message,args) => {
  var sayings = ["**Cara** :japanese_goblin: ", "**Cruz** :cross: "];

   var result = Math.floor((Math.random() * sayings.length) + 0);
   message.reply(`Tiraste una moneda y salió: ${sayings[result]}`);

}

exports.help = {
  name: "tirar"
}
