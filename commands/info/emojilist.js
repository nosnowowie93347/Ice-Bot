module.exports = {
    name: "emojilist",
    category: "info",
    run: async (client, message, args) => {
        let emojis = message.guild.emojis.cache.map(e => e.toString())
        await message.channel.send(`The emojis on this server are: ${emojis}.`)
    }
}