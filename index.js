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
    if (message.author.bot) return
    if (message.content == "fuck you"){
        message.reply("no fuck you")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "sus"){
        message.reply("amongos")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Fuck you"){
        message.reply("no fuck you")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "italian"){
        message.reply("pizza pasta mandolino mamma mia")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Italian"){
        message.reply("pizza pasta mandolino mamma mia")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Keep your voice down!"){
        message.reply("no")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "cya"){
        message.reply("goodbye")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Cya"){
        message.reply("goodbye")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "no"){
        message.reply("yes")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "thank you"){
        message.reply("np")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "thanks"){
        message.reply("np")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "thx"){
        message.reply("np")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "thank u"){
        message.reply("np")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Thank you"){
        message.reply("np")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "noob"){
        message.reply("no one asked")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Noob"){
        message.reply("no one asked")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "nOOb"){
        message.reply("no one asked")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "n00b"){
        message.reply("no one asked")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "wait"){
        setTimeout(() => message.reply(`waiting by a bit now`), 2000);
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Wait"){
        setTimeout(() => message.reply(`waiting by a bit now`), 2000);
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "gtg"){
        message.reply("go we dont care")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "brb"){
        message.reply("hurry")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Brb"){
        message.reply("hurry")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Gtg"){
        message.reply("go we dont care")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "hi"){
        message.reply("hello")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Hi"){
        message.reply("hello")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "ez"){
        message.reply("stfu")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Ez"){
        message.reply("stfu")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "lmao"){
        message.reply("you aint even laughing")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Lmao"){
        message.reply("you aint even laughing")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "i am"){
        message.reply("you are not.")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "My dog stepped on a bee"){
        message.reply("My dad has to pee")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "my dog stepped on a bee"){
        message.reply("my dad has to pee")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "and?"){
        message.reply("your mom")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "And?"){
        message.reply("your mom")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "AND?"){
        message.reply("your mom")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "LMAO"){
        message.reply("you aint even laughing")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "lmfao"){
        message.reply("you aint even laughing")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "LMFAO"){
        message.reply("you aint even laughing")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "back"){
        message.reply("welcome back")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Back"){
        message.reply("welcome back")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "shut up"){
        message.reply("get him dad")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "stfu"){
        message.reply("get him dad")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "SHUT UP"){
        message.reply("get him dad")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "STFU"){
        message.reply("get him dad")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "sex"){
        message.reply("Ok bud chill out for a second we don't talk about this because  this is a gaming server not some sort of hub for you to stink, get the fuck out")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Sex"){
        message.reply("Ok bud chill out for a second we don't talk about this because  this is a gaming server not some sort of hub for you to stink, get the fuck out")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "nub"){
        if (message.author.bot) return
        message.reply("no one asked")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "i did"){
        message.reply("you didnt.")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "i didnt ask"){
        message.reply("neither did i")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "didnt ask"){
        message.reply("neither did i")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "cap"){
        message.reply("no cap")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "idiot"){
        message.reply("your mom")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Cap"){
        message.reply("no cap")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "looking for who asked"){
        message.reply("but you're blind...")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "lol"){
        message.reply("bet you didnt even smile")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "ok"){
        message.reply("ok..?")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "LoL"){
        message.reply("bet you didnt even smile")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "LOL"){
        message.reply("bet you didnt even smile")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "no u"){
        message.reply("no u")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "no you"){
        message.reply("no u")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "NO"){
        message.reply("yes")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "nO"){
        message.reply("yes")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "No"){
        message.reply("yes")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "SUS"){
        message.reply("amongos")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "sUs"){
        message.reply("amongos")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "SuS"){
        message.reply("amongos")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "hold up"){
        message.reply("let me be honest i saw her put percs in my chronic")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Hold up"){
        message.reply("let me be honest i saw her put percs in my chronic")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "savage"){
        message.reply("ikr")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Savage"){
        message.reply("ikr")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "bruh"){
        message.reply(".-.")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Bruh"){
        message.reply(".-.")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "rip"){
        message.reply("rip")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "Rip"){
        message.reply("rip")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "r.i.p."){
        message.reply("rip")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "R.i.p."){
        message.reply("rip")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "RIP"){
        message.reply("rip")
    }
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content == "BRUH"){
        message.reply(".-.")
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