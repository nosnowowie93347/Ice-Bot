const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

const { get } = require('snekfetch') // You can also use normal request if you want, you would just lose the ability of using .then(). Or you could just use snekfetch

module.exports = {
    name: "bdsm",
    category:"nsfw",
    description: "Sends random naughty picture related to BDSM.",
    run: async (client, message) => {
        if (!message.channel.nsfw) return message.reply("You can use this command only in nsfw channels!");
    
        var subreddits = [
     
            'bdsm',
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        randomPuppy(sub)
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setColor(`#000000`)
                    .setFooter(`Tags: bdsm`)
                    .setTitle("BDSM")
                    .setURL(url)
                    .setImage(url);
                message.channel.send({
                    embed
                });
            })
}
}