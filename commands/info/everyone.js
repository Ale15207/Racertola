module.exports = {
    name: "everyone",
    category: "info",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send("@everyone")
        }
}