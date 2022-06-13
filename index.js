const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_TYPING"
    ]
})

client.on("messageCreate", (message) => {
    if (message.content == "fuck you"){
        message.reply("no fuck you")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "sus"){
        message.reply("amongos")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Fuck you"){
        message.reply("no fuck you")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "italian"){
        message.reply("pizza pasta mandolino mamma mia")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Keep your voice down!"){
        message.reply("no")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "no"){
        message.reply("yes")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "lol"){
        message.reply("bet you didnt even smile")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "cya"){
        message.reply("cya")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "ok"){
        message.reply("ok..?")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "LoL"){
        message.reply("bet you didnt even smile")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "LOL"){
        message.reply("bet you didnt even smile")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "no u"){
        message.reply("no u")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "no you"){
        message.reply("no u")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "NO"){
        message.reply("yes")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "nO"){
        message.reply("yes")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "No"){
        message.reply("yes")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "SUS"){
        message.reply("amongos")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "sUs"){
        message.reply("amongos")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "SuS"){
        message.reply("amongos")
    }
})

client.on("ready", () => {
    client.user.setPresence({
        activities: [{ name: "a!help",type: "PLAYING"}],
        status: "dnd",
    });
})

let bot = {
    client,
    prefix: "a!",
    owners: ["743178570842767501", "943489191193489418", "769164137380315166"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands.js")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.login(process.env.TOKEN)