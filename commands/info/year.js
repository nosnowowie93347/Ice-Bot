const moment = require("moment")
const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "year",
	description: "Shows amount of time until next year",
	category: 'info',
	run: async (client, message, args) => {
	const now = new Date();
        const next = new Date(now);
        next.setFullYear(now.getFullYear() + 1);
        next.setHours(0, 0, 0, 0);
        next.setMonth(0, 1);
        const duration = next - now;
        const seconds = Math.floor((duration / 1000) % 60);
        const minutes = Math.floor((duration / 1000 / 60) % 60);
        const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        const days = Math.floor(duration / (1000 * 60 * 60 * 24));

        const embed = new MessageEmbed()
            .setAuthor("Next Year!", message.author.displayAvatarURL())
            .setColor("RANDOM")
            .setDescription(
                `There are **${days} days**, **${hours} hours**, **${minutes} minutes** and **${seconds} seconds** until **${next.getFullYear()}**!`
            )
            .setFooter(`Or, in short, ${moment.duration(next - now).humanize()}.`);
        message.channel.send(embed);
    }

	}