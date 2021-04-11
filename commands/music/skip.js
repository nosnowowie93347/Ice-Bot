const distube = require("distube");
const discord = require('discord.js');

module.exports = {
    name: "skip",
    description: "skips a song",
    category: "music",
    run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply('please join a vc before using this cmd')
    const queue = client.distube.getQueue(message)
    if(!queue) return message.channel.send('There is nothing playing')
    client.distube.skip(message)
    message.channel.send('Song is skipped')
    }
}