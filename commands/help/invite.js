module.exports = {
    name: "invite",
    category: "help",
    permissions: [""],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("https://discord.com/api/oauth2/authorize?client_id=951171242080215060&permissions=8&scope=applications.commands%20bot")
    }
}