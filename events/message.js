module.exports = async (prefix, client, message, commandsFiles) => {
    const events = ["commands"];
    events.forEach(event => {
        require(`./message/${event}`)(prefix, client, message, commandsFiles);
    });
}