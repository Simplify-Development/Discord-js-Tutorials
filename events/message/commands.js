const Discord = require('discord.js');

module.exports = async (prefix, client, message, commandsFiles) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

    client.commands = new Discord.Collection();
    for (const file of commandsFiles) {
        const command = require(`../../commands/${file}`);
        client.commands.set(command.name, command);
    };

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const commands = ["ping"];
    commands.forEach(cmd => {
        if (command === cmd) {
            client.commands.get(cmd).execute(client, message, args);
        }
    })
}