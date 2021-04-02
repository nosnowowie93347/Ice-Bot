const { MessageEmbed } = require('discord.js');
const moment = require("moment");
module.exports = {
    name: "emojinfo",
    description: "gets info about an emoji",
    usage: "emojinfo <emoji>",
    category: "info",
    run: async (client, message, emote) => {
        console.log(emote)
        const regex = emote.toString().replace(/^<a?:\w+:(\d+)>$/, "$1");

        const emoji = message.guild.emojis.cache.find((emj) => emj.name === emote || emj.id === regex);

        if (!emoji) return message.reply("Please provide a valid custom emoji!");

        const checkOrCross = (bool) => bool ? ":white_check_mark:" : ":negative_squared_cross_mark:";

        const embed = new MessageEmbed()
            .setDescription(`**Emoji information for __${emoji.name.toLowerCase()}__**`)
            .setColor("PINK")
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField('General', [
                `**❯ ID:** ${emoji.id}`,
                `**❯ URL:** ${emoji.url}`,
                `**❯ Time Created:** ${moment(emoji.createdTimestamp).format('LT')} ${moment(emoji.createdTimestamp).format('LL')} ${moment(emoji.createdTimestamp).fromNow()}`,
              ])
            .addField('Other', [
                `**❯ Animated:** ${checkOrCross(emoji.animated)}`,
                `**❯ Managed:** ${checkOrCross(emoji.managed)}`,
                `**❯ Requires Colons:** ${checkOrCross(emoji.requiresColons)}`,
                `**❯ Deletable:** ${checkOrCross(emoji.deletable)}`,
            ]);

        return message.channel.send(embed)


    }
}