const { Random } = require("something-random-on-discord")
const random = new Random();
module.exports = {
    name: "advice",
    description: "Get some fresh advice",
    category: "fun",
    usage: "advice",
    run: async (client, message, args) => {
        let data = await random.getAdvice()
    message.channel.send(data)
    }
}