const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();

let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./comandos/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() == "js");
    jsfiles.forEach((f, i) => {
      let props = require(`./comandos/${f}`);
      console.log(`Comando ${f} se cargó correctamente`)
      client.commands.set(props.help.name, props);
     });
  });

  client.on('ready', () => {
    console.log(`Un Arboles Renace`);
    ///client.user.setActivity("Bot de Testeo"), {type: "PLAYING"}

    let statuses = [
    `Más de ${client.users.size} usuarios!`,
    "k!help",
    `En ${client.guilds.size} servers!`,
    "Un árbol nuevo renace!!!",
    "Cumple las reglas del server!!!"
    ]

    setInterval(function() {
    	let status = statuses[Math.floor(statuses.length * Math.random())]
    	client.user.setActivity(status, {type: "PLAYING"});
    }, 40000)
  });

  client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    //let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    if(cooldown.has(message.author.id)){
      message.delete();
      return message.reply("Tienes que esperar ``5`` segundos entre comando.")
    }
    if(!message.member.hasPermission("ADMINISTRATOR")){
      cooldown.add(message.author.id)
    }

    let archivocmd = client.commands.get(command.slice(prefix.length));
    if(archivocmd) archivocmd.run(client,message,args);

    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, cdseconds * 1000)

});
client.login(process.env.BOT_TOKEN);
