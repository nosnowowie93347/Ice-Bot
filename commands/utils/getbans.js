const Discord = require("discord.js");

module.exports = {
    name: "getbans",
    aliases: ["banlist", "listbans"],
    category: "utils",
    usage: "getbans",
    description: "Get a list of all banned users.",
    run: async (client, message, args) => {
    message.guild.fetchBans()
   .then(banned => {
    let list = banned.map(ban => ban.user.tag).join('\n');

    // Make sure if the list is too long to fit in one message, you cut it off appropriately.
    if (list.length >= 1950) {
        let list = `${list.slice(0, 1948)}...`;
    }
    message.channel.send(`**${banned.size} users are banned:**\n${list}`);
    console.log(list)
  })
    }
}