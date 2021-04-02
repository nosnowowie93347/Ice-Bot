const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "tickle",
    description: "tickle a user",
    category: "fun",
    guildOnly: "true",
    run: async (client, message, args) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to tickle them");
    if (message.mentions.users.first().id == client.user.id) return message.channel.send("Nuuuuuuuuuuuuuuuuuuuuuu that tickless")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, you got tickled by ${message.author.username}`)
    .setImage(body.url) 
    message.channel.send({embed})
    }
};