const Discord = require("discord.js")
const superagent = require("superagent")
module.exports = {
    name: "cuddle",
    usage: "cuddle <user>",
    category: "fun",
    run: async (client, message, args) => {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them");
        if (message.mentions.users.first().id == client.user.id && message.author.id !== "466778567905116170") return message.channel.send("Aww! *cuddles you* ")
        if (message.mentions.users.first().id == client.user.id && message.author.id == "466778567905116170") return message.reply(">///< *cuddles mousseur Pink*")
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/cuddle");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`${message.author.username} cuddled ${message.mentions.users.first().username} OwO`)
        .setImage(body.url) 
        .setFooter(`© Ice Bot: Made by Pinkalicious21902`);
        message.channel.send({embed})
    }
}