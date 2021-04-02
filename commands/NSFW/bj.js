const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "bj",
  category: "nsfw",
description: "",
run: async (client, message, args) => {
//command
if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
superagent.get('https://nekos.life/api/v2/img/bj')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("bj")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`Tags: bj`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
message.delete({ timeout: 300000 })
})
}
};