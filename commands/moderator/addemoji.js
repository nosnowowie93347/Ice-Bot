
module.exports = {
    name: 'addemoji',
    aliases: ['em', 'emadd'],
    category: 'Staff',
    description: 'Add an emoji to the server.',
    usage: '<emoji to add>',
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("Invalid permissions.").then(msg => msg.delete({ timeout: 10000 }));
        if(!args.join(" ")) return message.channel.send("I need an emoji to add!")
        const hasEmoteRegex = /<a?:.+:\d+>/gm
        const emoteRegex = /<:(\w+):(\d+)>/gm
        const animatedEmoteRegex = /<a:(\w+):(\d+)>/gm
    
        const messageEmote = message.content.match(hasEmoteRegex)
    
        if (!messageEmote) return message.channel.send("Couldn't find an emoji to add!")
        /**
        * checks if an emoji is animated or not. this follows the DRY (do not repeat yourself) principle:
        * https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
        */
        const isAnimated = message.content.match(animatedEmoteRegex)
        /**
        * here we are using array destructuring. each index represents the relevant data. the first index is ignored as its the full string we we don't need
        * if you actually console logged the full variable without array destructuring, you'll see the indexes
        * more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        */
        const [, name, id] = isAnimated ? animatedEmoteRegex.exec(messageEmote) : emoteRegex.exec(messageEmote)
    
        const url = `https://cdn.discordapp.com/emojis/${id}.${isAnimated ? "gif" : "png"}?v=1`

        // we should ALWAYS handle our errors. let yourself (via logs) and the user know (the message) when something goes wrong
        try {
            const emoji = await message.guild.emojis.create(url, name)
            return message.channel.send(`${emoji} uploaded with the name "${emoji.name}"`);
        } catch (e) {
            // add any other sort of error handling here as well
            console.log(e)
            return message.channel.send("An error occurred add the emoji!");
        }
    }
}