const childProcess = require('child_process');
module.exports = {
  name: "exec",
  category: "owner",
  description: "Executes a process command",
  usage: "exec <cmd>",
  run: async (client, message, args) => {
  if (message.author.id !== "466778567905116170") return message.channel.send('You scrub, what made you think you\'d be able to do that??');
    childProcess.exec(args.join(' '), {},
        (err, stdout, stderr) => {
          console.log(stdout)
            if (err) return message.channel.send('```' + err.message + '```');
            message.channel.send('```' + stdout + '```');
        });
}
}
