const Discord = require("discord.js")
const moment = require("moment")
const flags = {
  DISCORD_EMPLOYEE: 'Discord Employee',
  DISCORD_PARTNER: 'Discord Partner',
  BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
  BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
  HYPESQUAD_EVENTS: 'HypeSquad Events',
  HOUSE_BRAVERY: 'House of Bravery',
  HOUSE_BRILLIANCE: 'House of Brilliance',
  HOUSE_BALANCE: 'House of Balance',
  EARLY_SUPPORTER: 'Early Supporter',
  TEAM_USER: 'Team User',
  SYSTEM: 'System',
  VERIFIED_BOT: 'Verified Bot',
  VERIFIED_DEVELOPER: 'Verified Bot Developer'
};
const filterLevels = {
  DISABLED: 'Off',
  MEMBERS_WITHOUT_ROLES: 'No Role',
  ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
  NONE: 'None',
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: '(╯°□°）╯︵ ┻━┻',
  VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
module.exports = {
	name: "userinfo",
	description: "info about user",
	usage: "userinfo <user>",
	category: "info",
	run: async (client, message, args) => {
    let id = args[0]
	const member = message.mentions.members.last() || message.guild.members.cache.get(id) || message.member;
    const roles = member.roles.cache
      .sort((a, b) => b.position - a.position)
      .map(role => role.toString())
      .slice(0, -1);
    const userFlags = member.user.flags.toArray();
    const embed = new Discord.MessageEmbed()
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setColor(member.displayHexColor || 'BLUE')
      .addField('User', [
        `**❯ Username:** ${member.user.username}`,
        `**❯ Discriminator:** ${member.user.discriminator}`,
        `**❯ ID:** ${member.id}`,
        `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
        `**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
        `**❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
        `**❯ Status:** ${member.user.presence.status}`,
        `**❯ Game:** ${member.user.presence.game || 'Not playing a game.'}`,
        `\u200b`
      ])
      .addField('Member', [
        `**❯ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
        `**❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
        `**❯ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
        `**❯ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
        `\u200b`
      ]);
    return message.channel.send(embed);
	}
}