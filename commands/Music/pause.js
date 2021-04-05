module.exports = {
	name: 'pause',
	description: 'Pause command.',
    category: "Music",
	run: async (client, message, args) => {
		const serverQueue = message.client.queue.cache.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Paused the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	}
};
