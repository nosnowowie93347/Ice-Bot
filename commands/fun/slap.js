const Discord = require("discord.js")
const superagent = require("superagent")
module.exports = {
    name: "slap",
    description: "slap someone",
    category: "fun",
    run: async (client, message, args) => {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap them");
        if (message.mentions.users.first().id == client.user.id && message.author.id === "466778567905116170"){
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/slap");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`No u! *slaps*${message.mentions.users.first().username}`)
        .setImage(body.url) 
        .setFooter(`© Ice Bot by Pinkalicious21902`);
        return message.channel.send({embed})
        }else if (message.mentions.users.first().id == client.user.id && message.author.id !== "466778567905116170"){
        return message.channel.send("NOOO PLEASE **owwie**")
        }
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/slap");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`OwO, ${message.mentions.users.first().username} You got slapped by ${message.author.username}`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
}