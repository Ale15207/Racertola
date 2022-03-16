const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'shows all the commands of the bot',
    category: "help",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
            let member= message.author

            const helpEmbed = new MessageEmbed()
            .setColor('#4ef575')
            .setTitle('Commands')
            .setDescription('Shows all the commands coded for this bot')
            .setAuthor({ name: 'Alessatax#9472', iconURL: 'https://i.imgur.com/UWP0z7T.png', url: 'https://discordapp.com/users/743178570842767501/'})
            .addFields(
                {name: 'Prefix', value: 'a!'},
                {name: 'Fun commands', value: 'avatar, dm, youtube'},
                {name: 'Moderation commands', value: 'hasrole, giverole, removerole, purge, mute, unmute, kick, ban'},
                {name: 'Invite command', value: 'upon usage, the bot will send the link to invite it'},
                {name: 'More help', value: 'use a!help and follow it with a section name(fun or moderation) for more info about that section'}
            )
            .setImage('https://i.imgur.com/UWP0z7T.png')
            .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic:true})}`})
            .setTimestamp()

            if(!args[0]) return message.reply({ embeds: [helpEmbed] });

            const infoEmbed = new MessageEmbed()
            .setColor('#4ef575')
            .setTitle('Fun commands')
            .addFields(
                { name: 'avatar', value: 'use "a!avatar @user" to see the pfp of that user',},
                { name: 'dm', value: 'use "a!dm @user (text here)" to send that user a text through this bot(do not abuse, it is punishable)',},
                { name: 'youtube', value: 'use a!youtube and the bot will provide you with a youtube video made by me :>',}
            )
            .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic:true})}`})
            .setTimestamp()
            
            if(args[0] === "fun") return message.reply({ embeds: [funEmbed]})

            const moderationEmbed = new MessageEmbed()
            .setColor('#4ef575')
            .setTitle('Moderation commands')
            .addFields(
                { name: 'hasrole', value: 'follow this with "@user (role to check here, must be text: not role ID not role ping)" to see if that user has a determinate role',},
                { name: 'giverole', value: 'follow this with "@user (role to give here, must be text: not role ID not role ping)" to give a role to a user',},
                { name: 'removerole', value: 'follow this with "@user (role to remove here, must be text: not role ID not role ping)" to remove a role from a user',},
                { name: 'purge', value: 'follow this with the number of messages you want to delete',},
                { name: 'mute', value: 'follow this with "@user" to mute that user',},
                { name: 'unmute', value: 'follow this with "@user" to unmute that user',},
                { name: 'kick', value: 'follow this with "@user (reason of kick here)" to kick a user',},
                { name: 'ban', value: 'follow this with "@user (reaosn of ban here)" to ban a user',},
            )
            .setFooter({ text: `${member.username}`, iconURL: `${member.avatarURL({dynamic:true})}`})
            .setTimestamp()

            if(args[0] === 'moderation') return message.reply({ embeds: [moderationEmbed]})
    },
};