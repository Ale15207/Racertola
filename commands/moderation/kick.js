module.exports = {
    name: "kick",
    category: "moderation",
    permissions: ["KICK_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const member = message.mentions.members.first();
        args.shift()

        const reason = args.join(' ')
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            member.send(`You have been kicked from ${message.guild.name} for ${reason}`)
            setTimeout(() => member.kick(reason), 2000);
            message.channel.send(`${memberTarget} has been kicked for ${reason}`)
        }
        else{
            message.reply("I wasn't able to kick that member")
        }
    }
}