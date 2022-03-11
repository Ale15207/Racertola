module.exports = {
    name: "kick",
    category: "info",
    permissions: ["KICK_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const member = message.mentions.members.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`${memberTarget} has been kicked`)
        }
        else{
            message.reply("I wasn't able to kick that member")
        }
    }
}