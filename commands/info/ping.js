module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const member = message.mentions.members.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            message.channel.send(`${memberTarget}`)
        }
    }
}