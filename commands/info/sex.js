module.exports = {
    name: "sex",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        let member = message.author
        message.reply(`ok ${member}, come to the room with me ;)`)
    }
}