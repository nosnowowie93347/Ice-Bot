const Discord = require("discord.js");
module.exports = {
    name: "rename",
    description: "rename the mentioned user",
    category: "utils",
    usage: "rename <user> <newname>",
    run: async (client, message, args) => {
        let newname = args.slice(1).join(' ');
  let user;
  let mention = message.mentions.users.first();
  if (!mention){
    user = message.guilds.members.get(args[0])
    if (!user) return message.reply('You must Tag someone or give me a Valid userID for me to rename them.').catch(console.error);
  }else{
    user = message.guild.member(mention)
  }
    if (user.id === "466778567905116170" && message.author.id !== "466778567905116170") return message.reply("You can't rename my Developer:wink:");
  user.setNickname(newname).catch(e => {
    if(e) return message.channel.send(`An error occured: \`\`\`${e}\`\`\``)
  });
  message.channel.send("Done.");
    }
}