const discord = require('discord.js')
const distube = require('distube')

module.exports = {
  name: "play",
  description: "Play a song",
  category: "music",
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply('please join a vc before using this cmd')
    const music = args.join(" ")
    if(!music) return message.channel.send('please provide a song to play')
    client.distube.play(message, music)
}
}
