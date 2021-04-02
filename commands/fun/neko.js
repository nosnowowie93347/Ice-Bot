const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "neko",
    description: 'Sends a random Neko OwO',
    usage: 'neko',
    category: "fun",
    run: async (client, message, args) => {
        const { body } = await superagent.get("https://nekos.life/api/neko");
        link = body.neko;

        const embed = new Discord.MessageEmbed()
            .setColor("#ff9900")
            .setTitle("Here's Your Neko OwO")
            .setImage(body.neko)
        await message.channel.send({embed})
    }
}
