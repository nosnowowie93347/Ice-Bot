const Discord = require("discord.js")
module.exports = {
  name: "dm",
  aliases:  ["pm"],
  description: "Direct message anyone in the server!",
  category: "utils",
  run: async (client, message, args) => {
  let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `You did not mention a user, or you gave an invalid id`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("You did not specify your message");
      const embed = new Discord.MessageEmbed()
      .addField('Action:', 'DM')
      .setDescription(`Dmed user ${user.user.username}`)
      .setTimestamp()
      .setColor("GREEN")
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("That user could not be DMed!"))
      .then(() => message.channel.send({embed}));
  }
}