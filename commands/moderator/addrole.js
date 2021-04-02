const Discord = require("discord.js")

module.exports = {
    name: "addrole",
    category: "moderator",
    description: "Adds a role to a member of the guild!",
    usage: "addrole <user> <role>",
    aliases: ["ar", "roleadd"],
    run: async (client, message, args) => {

    if(!message.member.hasPermission(["MANAGE_ROLES"])) return message.channel.send("You dont have permission to perform this command!")

    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.fetch(args[0]);
    if(!rMember) return message.channel.send("Please provide a user to add a role too.")
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Please provide a role to add to said user.") 
    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send("Please provide a reason")

    if(rMember.roles.cache.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, already has the role!`)
    } else {
        await rMember.roles.add(role.id).catch(e => console.log(e.message))
        message.channel.send(`The role, ${role.name}, has been added to ${rMember}.`)
    }

    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "Addrole")
    .addField("Mutee:", rMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.cache.find(c => c.name === "logs")
        sChannel.send(embed)
}

}