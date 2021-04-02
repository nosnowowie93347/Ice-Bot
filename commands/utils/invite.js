const Discord = require("discord.js");
module.exports = {
    name: "invite",
    usage: "invite",
    category: "utils",
    description: "Gets the bot\'s invite link",
    run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .setTitle("Ice Bot Invite Link:", '')
  .addField('Inviting the Bot', "https://discord.com/oauth2/authorize?client_id=695370105307136132&permissions=1593175767&scope=bot")
  .setTimestamp()
  message.author.send({embed}).catch(e =>{
    if (e) {
    message.channel.send(`Error. You seems to be locking your DMs so I'll send it here instead.`);
    message.channel.send({embed});
    }
  });
  message.reply("Check your DMs!");  
    }
}