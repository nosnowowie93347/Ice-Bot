const Discord = require("discord.js")
const superagent = require('superagent')
module.exports = {
    name: "feed",
    category: "fun",
    description: "feed someone",
    run: async (client, message, args) => {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to feed them!");
        if (message.mentions.users.first().id == client.user.id && message.author.id !== "466778567905116170") return message.channel.send("I don't eat tho")
        if (message.mentions.users.first().id == client.user.id && message.author.id == "466778567905116170") return message.reply("BRUH! You know bots don't eat >///< Now give me more RAM :3")
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/feed");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`${message.mentions.users.first().username}, you got fed by ${message.author.username} OwO`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
}