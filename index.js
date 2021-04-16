const { token, prefix } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

client.on('ready', () => {
    console.log("Bot is online!");
    client.user.setActivity("YouTube", { type: "WATCHING" });
});

const commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
client.on('message', message => {
    const messageFile = require('./events/message');
    messageFile(prefix, client, message, commandsFiles);
})

client.login(token);