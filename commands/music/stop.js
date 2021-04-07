const discord = require('discord.js')
const distube = require('distube')

module.exports = {
  name: "stop",
  description: "stops currently playing music",
  category: "music",
  run: async (client, message, args) => {
    if(!message.member.voice.channel) return message.reply('please join a vc before using this cmd')
    let queue = await client.distube.getQueue(message)
    if(queue) {
        client.distube.stop(message)
        message.channel.send('Party is over, disconnected')
    } else if(!queue) {
        return
    }
}
}
