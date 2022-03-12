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

            if(!mainRole){
                message.reply("There is no mainrole in this server, make a role for normal users that MUST be named 'member'")
            }
            if(!muteRole){
                message.reply("There is no muterole in this server, make a role for muted users that MUST be named 'muted' and make sure it can't do anything except for viewing channels and their message history")
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${target} has been muted`);
        } else{
            message.channel.send("Can't find that member");
        }
    }
}