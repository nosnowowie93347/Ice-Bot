const Discord = require("discord.js");
const fs = require('fs');
module.exports = {
    name: 'unblacklist',
    description: 'un-blacklist a user.',
    usage: 'unblacklist [userid]',
    category: 'owner',
    run: async (client, message, args) => {
        let blacklist = JSON.parse(fs.readFileSync("commands/moderator/blacklist.json", "utf8"));
        let user = args[0];
        if(message.author.id !== "466778567905116170") return message.channel.send("This command is Owner-Only!");
        //if (user = "blacklist") return message.reply('You need to imput a User ID');
        if (!user) return message.reply('You need to input a User ID');
        
        if (!blacklist[user]) {
            message.reply("That user has not been blacklisted");
            return;
        };
        
        if (blacklist[user].state === false) {
            message.reply("That user has not been blacklisted");
            return;
        };
    
        if (blacklist[user].state === true) {
            blacklist[user] = {
                state: false
            }
        message.reply("That user has been removed from blacklist");
            fs.writeFile("commands/moderator/blacklist.json", JSON.stringify(blacklist), err => {
            if(err) throw err;
            return;
        });
        }

    }
}

