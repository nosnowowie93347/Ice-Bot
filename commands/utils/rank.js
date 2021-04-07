const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rank",
  description: "Get a user's xp rank",
  category: "utils",
  usage: "rank <user>",
  run: async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    var level = db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0;
    var currentxp = db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0;
    var xpNeeded = level * 500 + 500 // 500 + 1000 + 1500
    const embedlvl = new Discord.MessageEmbed()
    .setTitle(`${user.username}'s Level`)
    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    .addFields(
        {name: `XP`, value: `${currentxp}/${xpNeeded}`, inline: true},
        {name: `Level`, value: `${level}`, inline: true}
    )
    message.channel.send(embedlvl)
    }
    }
