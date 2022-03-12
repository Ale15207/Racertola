module.exports = {
    name: "unmute",
    category: "moderation",
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const target = message.mentions.members.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'amogus');
            let muteRole = message.guild.roles.cache.find(role => role.name ==='muted');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`${target} has been unmuted`);
        } else{
            message.channel.send("Can't find that member");
        }
    }
}