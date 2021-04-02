module.exports = {
    name: "spam",
    usage: "spam <user>",
    category: "fun",
    run: async (client, message, args) => {
        let spam = 1;
        let user = message.mentions.users.first()
        if (user.id === "466778567905116170") {
            return await message.reply("Not spamming this person.")
        }
        while (spam < 13) {
            spam++;
            await message.channel.send(`Hello, <@!${user.id}>!!`)

        }   
}
}