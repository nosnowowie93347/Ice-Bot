const discord = require('discord.js')
const distube = require('distube')

module.exports = {
    name: "pause",
    description: "pause currently playing music",
    category: "music",
    run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply('please join a vc before using this cmd')
    const queue = client.distube.getQueue(message)
    if(!queue) return message.channel.send('There is nothing playing')
    client.distube.pause(message)
    message.channel.send('Song is Paused')
}
}