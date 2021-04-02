const Discord = require("discord.js")
module.exports = {
    name: "unban",
    category: "moderator",
    description: "Unban someone",
    run: async (client, message, args) => {
client.unbanAuth = message.author;
  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) reason = 'No reason supplied.';
  if (!user) return message.channel.send('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.members.unban(user, reason).catch(e =>{
    if(e){
      return message.channel.send(`${client.users.cache.get(`${args[0]}`).username} isn't banned, YET :wink:`);
    }
  }).then(() =>{
    const embed = new Discord.MessageEmbed()
      .setColor(0xFF0000)
      .setTimestamp()
      .addField('Action:', 'Unban')
      .addField('User:', `${client.users.cache.get(`${args[0]}`).username}#${client.users.cache.get(`${args[0]}`).discriminator} (${user})`)
      .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
      .addField('Reason', reason)

      let logchannel =  message.guild.channels.cache.find(x => x.name === 'logs');
      if  (!logchannel){
      message.channel.send({embed})
      }else{
        message.guild.channels.cache.get(logchannel.id).send({embed});
        message.channel.send({embed})
      }
  })
    }
 
};