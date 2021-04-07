const { token, prefix } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Bot is online!");
    client.user.setActivity("YouTube", { type: "WATCHING" });
})

client.login(token);