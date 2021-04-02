const Discord = require("discord.js");
module.exports = {
    name: "delrole",
    usage: "delrole <role>",
    category: "moderator",
    description: "Delete a role.",
    run: async (client, message, args) => {
let channel = message.guild.channels.cache.find(c => c.name === "logs")
    var deletename =  args.slice(0).join(' ');
    if (!message.member.hasPermission("MANAGE_ROLES"))  {
      return message.reply("You do not have permission to use this command!")
    }
    deletedrole = message.guild.roles.cache.find(role => role.name === deletename).delete();
    console.log(deletedrole)
    const embed = new Discord.MessageEmbed()
      .setAuthor(`Role deleted successfully`)
      .setFooter("Powered by Ice Bot")
      .setColor("GREEN")
      .setDescription(`${message.author} deleted the role ${deletename}.`)
    await message.channel.send(embed)
    await channel.send(embed)
    }
}

