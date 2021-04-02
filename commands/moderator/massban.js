module.exports = {
    name: "massban",
    usage: "massban [ids] [reason (optional)]",
    description: "ban multiple users at once",
    category: "moderator",
    run: async (client, message, args) => {
    const banned = [];
const notBannable = [];
const notBanned = [];

// because we are comma-separating the ids, we need to join the array into a string and split them using ","
// as the delimiter (divider in layman's terms)
let ids = args.join(' ').split(', ');
let reason;

// this logic is so we can parse the reason from the args
// to check for a reason, see if the last index (as an array) has more than one element
if (ids[ids.length - 1].split(' ').length > 1) {
  reason = ids
    // get the last index where the reason starts and return the first index of the sub array
    .slice(ids.length - 1)[0]
    // split the string so we have all arg(s) of the sub array (which represents the reason)
    .split(' ')
    // slice the sub array removing the last id
    .slice(1)
    // join the new sub array creating the string that is the reason
    .join(' ');

  // we need to replace the ids array with a new parsed array excluding the reason
  ids = ids
    // the next few lines joins the full array into a string to remove the reason directly
    .join(' ')
    .replace(reason, '')
    // we convert the string back into an array
    .split(' ')
    // since we directly removed the reason from the original string
    // we have to remove the empty string we put in its place
    // to do this, we filter out non-thruthy values in the array
    // EXAMPLE W/O FILTER: [ '123', '456', '789', '' ]
    // EXAMPLE W/ FILTER: [ '123', '456', '789' ]
    .filter(Boolean)
}

for (const id of ids) {
  try {
    // we are fetching the guild member here to check if they can even be banned or not
    const member = await message.guild.members.fetch(id);
    console.log(member.id)
    if (member && !member.bannable) notBannable.push(id);
    
    // if a valid reason was given, attach it the audit log message
    member.ban({ days: 7});
    banned.push(id);
  } catch (e) {
    // if for any reason the user cannot be banned (ex. invalid user ID)
    notBanned.push(id);
  }
}

let  msg = '';
if (banned.length > 0) msg += `Banned **${banned.length}** user(s): \`${banned.join(', ')}\`\n`;
if (notBannable.length > 0) msg += `Could not ban **${notBannable.length}** user(s) as I don't have permissions: \`${notBannable.join(', ')}\`\n`;
if (notBanned.length > 0) msg += `Could not find **${notBanned.length}** user(s): \`${notBanned.join(', ')}\``;

message.channel.send(msg || 'No users banned.');
    }
}