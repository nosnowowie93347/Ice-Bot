const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "hentaigif",
  category: "nsfw",
description: "",
run: async (client, message, args) => {
//command
if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Hentai gif")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`Tags: gif`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
message.delete({ timeout: 300000 })
})
}
};