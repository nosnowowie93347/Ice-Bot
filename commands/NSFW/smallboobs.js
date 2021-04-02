const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "smallboobs",
  category: "nsfw",
  run: async (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/smallboobs')
        .end((err, response) => {
      const lewdembed = new Discord.MessageEmbed()
      .setTitle("Hentai")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`Tags: smallboobs`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
  message.delete({ timeout: 300000 })
    })
	
}
}