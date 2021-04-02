module.exports = {
name: 'punch',
usage: 'punch <user>',
category: 'fun',
run: async (client, message, args) => {
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to punch them.')
  if(user.id = message.author.id) return message.channel.send("https://tenor.com/view/why-huh-but-why-gif-13199396")
  if(user.id === '466778567905116170') return message.reply("You can't hurt him you pleblord.");
  if(user.id === client.user.id) return message.channel.send(`**Punches ${user.username}**`)
}
};
