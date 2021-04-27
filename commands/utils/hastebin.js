const hastebin = require('hastebin-gen');

module.exports = {
	name: 'hastebin',
	description: "post to hastebin",
	category: 'utils',
	run: (client, message, args) => {

     let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        if (!args[0]) { return message.channel.send("What do you want to post in Hastebin?") }

        hastebin(haste, { url: "https://paste.mod.gg" }).then(r => {

            message.channel.send("`Posted to Hastebin at this URL:`  " + r);

        }).catch(console.error);

        message.delete();

}        
}