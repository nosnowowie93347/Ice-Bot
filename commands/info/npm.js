const npmsearch = require("libnpmsearch")
const { Client, Message, MessageEmbed } = require("discord.js");
const moment = require("moment-timezone");

module.exports = {
        name: 'npm',
        description: "searches npm",
        usage: "npm <package name>",
        category: "info",
        run: async(client, message, args) => {
        if (!args.length) {
            return message.channel.send("Please give me package name!");
        }
        let toSearch = args.join(" ");
        npmsearch(toSearch, {
            limit: 1
        }).then(async result => {
            if (!result.length) {
                return message.channel.send("Sorry I can't find any node package you want");
            }
            let res = result[0];
            let keywords = Object.keys(res).includes("keywords") ? (res["keywords"]).map(keyword => `\`${keyword}\``) : ["No Data"];
            let maintainers = (res["maintainers"]).map(maintainer => `\`${maintainer["username"]}\``);
            let links = Object.keys(res["links"]).map(key => `**${key}：**${res["links"][key]}`);
            let publishDate = moment(res["date"]).tz("America/Los_Angeles");
            await message.channel.send(
                new MessageEmbed()
                    .setColor("#C80B06")
                    .setTitle(res["name"])
                    .setDescription(res["description"])
                    .setThumbnail("https://i.imgur.com/ErKf5Y0.png")
                    .addField("Version", `\`${res["version"]}\``, true)
                    .addField("Published date", `${publishDate.format("YYYY-MM-DD HH:mm")} \`${publishDate.fromNow()}\``)
                    .addField("Keywords", keywords.join(", "), false)
                    .addField("Author", `\`${res["author"]["name"]}\``, true)
                    .addField("Maintainers", maintainers.join(", "), true)
                    .addField("Links", links.join("\n"), false)
            );
        });
    }
}