const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "feet",
  category: "nsfw",
description: "",
run: async (client, message, args) => {
//command
if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
superagent.get('https://nekos.life/api/v2/img/feet')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("futanari")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`Tags: feet`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
message.delete({ timeout: 300000 })
}
};