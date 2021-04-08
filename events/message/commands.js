module.exports = async (prefix, client, message) => {
    if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.channel.send("🏓 Pong!");
        message.react("🏓");
    }
}