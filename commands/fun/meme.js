const random = require("something-random-on-discord").Random

module.exports = {
    name: "meme",
    description: "A random meme!",
    category: "fun",
    usage: "meme",
    run: async (client, message, args) => {
        let data = await random.getMeme()
    message.channel.send(data)
    }
}
