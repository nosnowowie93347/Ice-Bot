const discord = require('discord.js')

module.exports = {
    name: "lockdown",
    category: "moderator",
    description: "lockdown channels to prevent ppl from sending messages",
    run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You dont have enough permission to execute this command")
    if(!message.member.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I dont have enough permissions")

    message.guild.channels.cache.forEach(channel => {
        try {
            channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: false
            })
        }catch(e) {
            console.log(e)
            return message.channel.send(`I couldn't lock ${channel}`)
        }
    })

    message.channel.send("Successfully locked all the channels")

}
}