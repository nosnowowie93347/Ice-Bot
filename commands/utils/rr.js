const discord = require('discord.js')
const { MessageButton, MessageActionRow } = require("discord-buttons")

module.exports = {
  name: 'rr',
  aliases: [],
  description: "reaction role",
  run: async (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle("Reaction Role")
    .setColor("GREEN")
    .setDescription("Click on the button below to get the 'x' role")

    const add = new MessageButton()
    .setStyle("green")
    .setLabel("Add")
    .setID("AddXRole")



    const remove = new MessageButton()
    .setStyle("grey")
    .setLabel("remove")
    .setID("RevXRole")


    const row = new MessageActionRow()
    .addComponent([add, remove])


    message.channel.send({component: row, embed: embed})

  }
}
