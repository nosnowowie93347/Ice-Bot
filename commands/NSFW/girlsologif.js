const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "girlsologif",
  category: "nsfw",
description: "",
run: async (client, message, args) => {
//command
if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
superagent.get('https://nekos.life/api/v2/img/solog')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Girl solo gif")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
message.delete({ timeout: 300000 })
})
}
};