const Discord = require("discord.js")
module.exports = {
	name: "report",
	usage: "report <user>",
	category: "moderator",
	description: "Report a user",
	run: async (client, message, args) => {
	let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.fetch(args[0]);

        if (!rMember)
            return message.reply("Couldn't find that person?");

        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("Can't report that member");

        if (!args[1])
            return message.channel.send("Please provide a reason for the report");
        
        const channel = message.guild.channels.cache.find(c => c.name === "reports")
            
        if (!channel)
            return message.channel.send("Couldn't find a `#reports` channel");

        const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor("Reported member", rMember.user.avatarURL())
            .setDescription(`Member:** ${rMember} (${rMember.user.id})
            **> Reported by:** ${message.author}
            **> Reported in:** ${message.channel}
            **> Reason:** ${args.slice(1).join(" ")}`);
	try {
        await channel.send(embed);
	}
	catch(error) {
		await message.reply(`an error occured: ${error}`)
}
}
}
