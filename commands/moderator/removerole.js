const Discord = require("discord.js");
module.exports = {
    name: "removerole",
    description: "remove a role from a user",
    usage: "removerole <user> <rolename>",
    category: "moderator",
    run: async (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("❌**Error:** I don't have the **Manage Roles** permission!");
    if (message.mentions.users.size === 0) return message.reply("❌Please mention a user to take the role from.\nExample: `removerole @user Members`");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply("❌**Error:** That user does not seem valid.");
    let rname = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.cache.find(val => val.name === rname);
    if (!role) return message.reply(`❌**Error:** ${rname} isn't a role on this server!`);
    let botRolePosition = message.guild.member(client.user).roles.highest.position;
    let rolePosition = role.position;
    let userRolePossition = message.member.roles.highest.position;
    if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Failed to remove the role from the user because your role is lower than the specified role.")
    if (botRolePosition <= rolePosition) return message.channel.send("❌**Error:** Failed to remove the role from the user because my highest role is lower than the specified role.");
    member.roles.remove(role).catch(e => {
        return message.channel.send(":no_entry_sign: There was an error! It most likely is that the role you are trying to remove is higher than the the role I have!");
    });
    message.channel.send(`:white_check_mark: **${message.author.username}**, I've removed the **${role.name}** role from **${message.mentions.users.first().username}**.`);
    }
}