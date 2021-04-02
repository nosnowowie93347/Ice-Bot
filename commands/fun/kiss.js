const Discord = require('discord.js');
const superagent = require('superagent');
module.exports = {
    name: 'kiss',
    description: 'Kisses someone OwO',
    usage: 'kiss',
    category: "fun",
    run: async (client, message, args) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them :3");
    if (message.mentions.users.first().id == message.author.id) return message.reply("Umm. That's not possible, but it'd be cool if it was")
    if (message.mentions.users.first().id == client.user.id) return message.reply("Uhhh... What? >///<")
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username} >:3`)
    .setImage(body.url);
    message.channel.send({embed})
    }
}