module.exports = {
  name: 'guildinvite',
  category: "utils",
  description: "creates an invite for the current guild.",
  run: async (client, message, args) => {
let guild = message.guild;
  
if (!guild) return message.reply("The bot isn't in the guild with this ID.");

let invitechannels = guild.channels.cache.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
if(!invitechannels) return message.channel.send('No Channels found with permissions to create Invite in!')

invitechannels.random().createInvite()
    .catch(e => {
      if (e) return message.channel.send(`Error to create invite: ${e}`)
    })
   .then(invite=> message.channel.send('Found Invite:\n https://discord.gg/' + invite.code))
  }
}
