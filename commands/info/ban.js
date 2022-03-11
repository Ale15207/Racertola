module.exports = {
    name: "ban",
    category: "info",
    permissions: ["BAN_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const member = message.mentions.members.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send(`${memberTarget} has been banned`)
        }
        else{
            message.reply("I wasn't able to ban that member")
        }
    }
}