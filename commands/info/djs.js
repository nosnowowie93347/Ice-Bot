const fetch = require('node-fetch')
module.exports = {
	name: "djs",
	aliases: ["discordjs"],
	description: "Displays information from the discord.js documentation",
	category: "info",
	usage: "<searchquery>",
	run: async(client, message, query) => {

	const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`

	const docFetch = await fetch(url)
	const embed = await docFetch.json()

	if (!embed || embed.error) {
	return message.reply(`"${query}" couldn't be located in the discord.js documentation.`)
	}

	if (!message.guild) {
	return message.channel.send({ embed })
	}

	const msg = await message.channel.send({ embed })
	msg.react("🗑️")

	let react;
	try {
		react = await msg.awaitReactions(
			(reaction, user) => reaction.emoji.name === "🗑️" && user.id === message.author.id,
			{ max: 1, time: 10000, errors: ["time"] }
		)
	} catch (error) {
		msg.reactions.removeAll()
	}

	if (react && react.first()) message.delete();

	return message;
	}
}