 const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "smug",
  category: "fun",
  description: "shows that you are smug",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.smug());

        const smug = new Discord.MessageEmbed()
        .setTitle("Someone is smug")
        .setDescription(( message.author.toString() + " is smug "))
        .setImage(owo.url)
        .setColor(`#000000`)
        .setURL(owo.url);
        message.channel.send(smug);

}

      work();
}
                };