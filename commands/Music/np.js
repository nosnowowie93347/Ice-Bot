module.exports = {
    name: 'np',
    category: "Music",
	description: 'Now playing command.',
	run: async (client, message, args) => {
		const serverQueue = message.client.queue.cache.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	}
};
