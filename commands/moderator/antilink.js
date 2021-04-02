const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db');

module.exports = {
    name: 'antilink',
    description: 'Changes the Antilink status for the server.',
    usage: 'antilink <channel>',
    run: async (client, message, args) => {

  if(message.author.id !== '466778567905116170') return message.reply(`:facepalm: You can't do that BOIII! :facepalm:`);
  if(!args[0] || args[0] == "help") return message.reply(`Usage: [p]antilink on|off\n([p] is the current prefix)`);

  if(args[0] === 'off'){
        let stats = await db.fetch(`antilink_${message.guild.id}`)
        if(!stats || stats ==='off') return message.reply("Antilink is already off");
        db.set(`antilink_${message.guild.id}`, 'off')
        message.channel.send("Success, Antilink is now Off")
        //console.log(await db.fetch(`antilink_${message.guild.id}`))
        return
    }else{
        if(args[0] === 'on'){
            let stats = await db.fetch(`antilink_${message.guild.id}`)
        if(stats ==='on') return message.reply("Antilink is already on");
            db.set(`antilink_${message.guild.id}`, 'on')
            //console.log(await db.fetch(`antilink_${message.guild.id}`))

            let embed = new Discord.MessageEmbed()
            .setColor("#ff8200")
            .setTitle("Anti-Link")
            .setDescription(`Antilink is now turned On`)
            await message.channel.send(embed)
    }else{
      if(args[0] === 'stats'){
        let stats = await db.fetch(`antilink_${message.guild.id}`)
        if(!stats || stats ==='off') return message.reply("Anti-link for this server is OFF");
        if(stats ==='on') return message.reply("Anti-link for this server is ON");
      
  }else{
      message.reply(`Usage: [p]antilink on|off \n([p] is the current prefix)`)
  }
  }
}
}
}
