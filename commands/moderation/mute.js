module.exports = {
    name: "mute",
    category: "moderation",
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const target = message.mentions.members.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name ==='muted');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${target} has been muted`);
        } else{
            message.channel.send("Can't find that member");
        }
    }
}