const urban = require('urban');
const Discord = require('discord.js');
module.exports = {
    name: "urban",
    category: "utils",
    description: "Get def of word using Urban Dict",
    run: async (client, message, args) => {
        if (args.length < 1) {
            return message.channel.send('Please enter a word');
        }
        let word = args.join(' ');

        urban(word).first(json => {
            if (!json) {
                return message.channel.send('No such word exist!');
            }
            let newstr = json.definition.match(/(.|[\r\n]){1,2040}/g);
            if (newstr.length >= 2){
                const def = new Discord.MessageEmbed()
                .setTitle(json.word)
                .setDescription(newstr[0] + '...')
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumbs_down, true)
                .setTimestamp(new Date())
                .setFooter(`Written by ${json.author}`);

            message.channel.send(def);
            }else{
            const def = new Discord.MessageEmbed()
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumbs_down, true)
                .setTimestamp()
                .setFooter(`Written by ${json.author}`);

            message.channel.send(def);
            }
        })
}
}