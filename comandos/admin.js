const Discord = require("discord.js");
const bot = new Discord.Client()

exports.run = (bot,message,args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Si no eres Moderador no es necesario que veas esto :wink: ")
      const embed = new Discord.RichEmbed()
        .setTitle(":hammer_pick: | Lista de comandos administrativos para Moderadores y Owners")
        .setColor("#e5106c")
        .setDescription('Nota: Para poder hacer uso de estos comandos debe existir un canal log llamado ``#klog`` donde se guardará el registro de cada acción con estos comandos')
        .addField('•``k!say``', 'Envia un mensaje en nombre de **Kasia** en el canal actual o un canal especifico | ``k!say #canal <mensaje>``')
        .addField('•``k!embed``', 'Envia un Embed en formato de noticia al canal actual o un canal especifico | ``k!embed #canal | <titulo> | <mensaje> | <autor> | <link de la imagen> | <hex color sin el #>``')
        .addField('•``k!cprefix``', 'Cambia el prefix de **Kasia** por uno personalizado | ``k!cprefix <nuevo prefix>``')
        .addField('•``k!clear``', 'Borra una cantidad especifica de mensajes | ``k!clear #``')
        .addField('•``k!mute``', 'Mutea de forma indefinida a un usuario | ``k!mute @user <razon>')
        .addField('•``k!tmute``', 'Mutea a un usuario del server por un tiempo especifico | ``k!tmute @user 1s/m/h <razon>')
        .addField('•``k!unmute``', 'Desmutea a un usuario | ``k!unmute @user``')
        .addField('•``k!kick``', 'Expulsa a un usuario del servidor | ``k!kick @user <razon>``')
        .addField('•``k!ban``', 'Expulsa permanentemente a un usuario del servidor | ``k!ban @user <razon>``')


        message.author.send(embed)
        message.delete().catch();
}

exports.help = {
  name: "admin"
}
