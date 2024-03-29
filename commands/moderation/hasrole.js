module.exports = {
    name: "hasrole",
    category: "moderation",
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const targetUser = message.mentions.users.first()
        if (!targetUser) {
            message.reply("Please spacify who to remove the role")
            return
        }

        args.shift()

        const roleName = args.join(' ')
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })
        if (!role) {
            message.reply(`There is no role named as ${roleName}`)
            return
        }

        const member = guild.members.cache.get(targetUser.id)

        if (member.roles.cache.get(role.id)) {
            message.reply(`That user has the "${roleName}" role`)
        } else {
            message.reply(`That user does not have the "${roleName}" role`)
        }
    },
}