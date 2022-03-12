module.exports = {
    name: "purge",
    category: "moderation",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) =>{

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Admin only")

        if (message.member.permissions.has("ADMINISTRATOR")) 
        {
            if (!args[0]) return message.reply("Enter number of messages you want to delete");
            if (isNaN(args[0])) return message.reply("Enter a real number");

            if (args[0] > 100) return message.reply("You can't delete more than 100 messages");
            if (args[0] < 1) return message.reply("You can't delet less than 0 messages DUMBO");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
                setTimeout(() => message.channel.send(`Purged ${args} message/messages`), 2000);
            })
        } else {
            message.channel.send("You don't have perms for this");
        }
    }
}