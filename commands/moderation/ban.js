module.exports = {
    name: "ban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const member = message.mentions.members.first();
        args.shift()

        const reason = args.join(' ')
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            member.send(`You have been banned from ${message.guild.name} for ${reason}`)
            setTimeout(() => message.guild.bans.create(member, {reason}), 2000);
            message.channel.send(`${memberTarget} has been banned for ${reason}`)
        }
        else{
            message.reply("I wasn't able to ban that member")
        }
    }
}