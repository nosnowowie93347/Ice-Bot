const Discord = require("discord.js")

module.exports = {
    name: "shutdown",
    description: "shuts down the bot!",
    category: "owner",
    accessableby: "Bot Owner",
    aliases: ["botstop"],
    run: async(client, message, args) => {
        if(message.author.id != "735237182649794571") return message.channel.send("This command can only be used by the owner :facepalm:")

        try {
            await message.channel.send("Bot is shutting down...")
            process.exit()
        } catch(e) {
            message.channel.send(`ERROR: ${e.message}`)
        }
    


}
    }
