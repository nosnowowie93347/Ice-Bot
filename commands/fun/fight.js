const Discord = require('discord.js')
const fights = require('../../data/fights.json');

module.exports = {
	name: "fight",
	description: "Fight someone",
	usage: "fight <user>",
	category: "fun",
	run: async (client, message, args) => {
	let user = message.mentions.users.first();
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('You can\'t fight thin air dude, pick someone to fight.');
      message.channel.send(`${message.author.username} is fighting ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
	}
}
