const Discord = require("discord.js")
const db = require("quick.db")
const Canvacord = require("canvacord")

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
    const rankcard = new Canvacord.Rank()
        .setAvatar(user.displayAvatarURL({format: 'png', dynamic: true}))
        .setCurrentXP(db.fetch(`guild_${message.guild.id}_xp_${user.id}`) || 0)
        .setRequiredXP(xpNeeded)
        .setStatus(user.presence.status)
        .setLevel(db.fetch(`guild_${message.guild.id}_level_${user.id}`) || 0)
        .setRank(1, 'RANK', false)
        .setProgressBar("#a81d16", "COLOR")
        .setOverlay("#000000")
        .setUsername(user.username)
        .setDiscriminator(user.discriminator)
        .setBackground("COLOR", "#808080")
        rankcard.build()
        .then(data => {
            const atta = new Discord.MessageAttachment(data, "rank.png")
            message.channel.send(atta)
        })
    }
    }
