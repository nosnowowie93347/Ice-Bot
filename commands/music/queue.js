const distube = require("distube");
const discord = require('discord.js');

module.exports = {
    name: "queue",
    description: "gets the music queue",
    category: "music",
    run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply('please join a vc before using this cmd')
    let queue = await client.distube.getQueue(message)
    if(!queue) message.channel.send('Party is over, disconnected')
    const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
    message.channel.send(q) 
    }
}