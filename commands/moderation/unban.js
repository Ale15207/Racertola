module.exports = {
    name: "unban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {
        if (!args[0]) return message.reply("Specify a user to unban");
        {
            const user = await message.channel.guild.members.unban(args[0]);
            return message.reply(`${user.tag} has been unbanned`);
        }
    }
}