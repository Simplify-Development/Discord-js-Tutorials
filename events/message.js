module.exports = async (prefix, client, message, commandsFiles) => {
    const events = ["commands", "filter"];
    events.forEach(event => {
        require(`./message/${event}`)(prefix, client, message, commandsFiles);
    });
}