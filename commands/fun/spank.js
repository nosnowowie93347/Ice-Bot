const Discord = require('discord.js');
const superagent = require('superagent');
module.exports = {
	name: 'spank',
	usage: 'spank <user>',
	description: 'SPANKED',
	category: 'fun',
    run: async (client, message, args) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to spank them");
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, you got spanked in da butt by ${message.author.username} >:3`)
    .setImage(body.url)
    message.channel.send({embed})
}
  };