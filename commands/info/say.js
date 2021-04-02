
module.exports = {
	name: 'say',
	category: 'info',
	aliases: ["echo", "repeat"],
	description: 'bot says what you say',
	usage: 'say <message>',
	run: (client, message, args) => {
		// makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    

    const sayMessage = args.slice(0).join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
	}

}	