const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    aliases: [''],
    name: "clyde",
    description: '',
    category: `fun`,
    run: async (client, message, args) => {
const text = args.slice(0).join(" ")
if(!text) return message.channel.send("you need some text there")
fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
.then((res) => res.json())
.then((body) => {
    console.log(body)
    let embed = new MessageEmbed()
    .setImage(body.message)
    .setColor("GOLD")
    message.channel.send(embed)
})
     }
    }