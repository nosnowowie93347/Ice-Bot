const Discord = require("discord.js")
module.exports = {
    name: "hackban",
    aliases: ["idban"],
    category: "moderator",
    usage: "hackban <userid>",
    description: "Ban user by id. Helpful if user has unmentionable name",
    run: async (client, message, args) => {
        let reason = args.slice(1).join(' ');
  let user = args[0];
  if (args[0] === message.author.id) return message.reply('I can\' let you do that, self-harm is bad:facepalm:');
  if (user === client.user.id) return message.reply("You pleblord, how can you use a bot to ban itself?:joy:");
  if (!user) return message.reply('You need to input a User ID');
  
  if (reason.length < 1) {reason = 'No reason supplied.'};
  //let obj = JSON.parse(`{"days":7, "reason": ${reason}}`)
  message.guild.members.ban(user, {days:7, reason: reason}).catch(e =>{
    if (e) return message.channel.send("That user has already been banned or I don't have permission or my role isn't high enough!");
  });

  const embed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Action:', 'HackBan')
    .addField('User:', `${user}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason)
  let logchannel = message.guild.channels.cache.find(x => x.name === 'logs').send({embed});
  if  (!logchannel){
  message.channel.send({embed})
  }else{
    message.channel.send({embed})
  } 
  if(user.bot) {return;}
}
 }