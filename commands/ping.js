const Discord = require("discord.js");

module.exports = {
    name: "ping",
    /** 
     * @param {Discord.Client} client
     * @param {Discord.Message} message
     * @param {String[]} args
    */
    async execute(client, message, args) {
        message.channel.send("🏓 Pong!");
        message.react("🏓");
    }
}