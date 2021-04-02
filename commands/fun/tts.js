const googleTTS = require('google-tts-api')
const Discord = require('discord.js')

module.exports = {
    aliases: ['tts'],
    description: 'provides the google tts recording',
    category: 'fun',
    name: 'tts',
    run: async (client, message, args) => {
        let ttsusage = args.slice(0).join(" ");
        if (ttsusage.length > 200)
          return message.channel.send(
            "HEY!!! thats too big please make text smaller then 200 characters"
          );
        if (!ttsusage)
          return message.channel.send("you need text to make speech!!");
        googleTTS(ttsusage, "en-gb", 1)
          .then(function (url) {
            const attachtts = new Discord.MessageAttachment(url).setName(
              "tts.mp3"
            );
            message.channel.send(attachtts);
          })
          .catch(function (err) {
            console.error(err.stack);
          });
    }
  };