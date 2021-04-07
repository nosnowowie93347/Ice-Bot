const random = require("something-random-on-discord").Random

module.exports = {
    name: "joke",
    description: "A random joke!",
    category: "fun",
    usage: "joke",
    run: async (client, message, args) => {
        let data = await random.getJoke()
    message.channel.send(data)
    }
}
