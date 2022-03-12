module.exports = {
    name: "everyone",
    category: "nuke",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send("@everyone")
        }
}