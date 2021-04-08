module.exports = async (prefix, client, message) => {
    // Imports
    const commandFile = require('./message/commands');

    // Running our files
    commandFile(prefix, client, message);
}