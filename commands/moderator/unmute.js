const Discord = require("discord.js")
module.exports = {
  name: "unmute",
  category: "moderator",
  run: async (client, message, args) => {
  	let user = message.guild.member(message.mentions.users.first()) || message.guild.members.fetch(args[0]);
    let guild = Discord.Guild
    let role = message.guild.roles.cache.find(r => r.name == 'Muted');
    user.roles.remove(role);
    const embed = new Discord.MessageEmbed()
      .setAuthor("User Muted")
      .setFooter("Made by Ice Bot")
      .setColor("GREEN")
      .setDescription(`Successfully unmuted ${user}.`)
    message.channel.send(embed);
}
}