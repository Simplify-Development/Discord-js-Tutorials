module.exports = async (prefix, client, message) => {
    const words = ["word1", "word2"];

    let foundInText = false;
    for (let i in words) {
        if (message.content.toLowerCase().includes(words[i])) foundInText = true
    }
    
    if (foundInText) {
        message.reply("Please don't use that word here :D")
        await message.delete()
    }
}