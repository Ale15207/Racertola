module.exports = {
    name: "giverole",
    category: "moderation",
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const targetUser = message.mentions.users.first()
        if (!targetUser) {
            message.reply("Please specify who will get the role")
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
        member.roles.add(role)

        message.reply(`That user now has the "${roleName}" role`)
    }
}