const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'shows all the commands of the bot',
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

            const helpEmbed = new MessageEmbed()
            .setColor('#4ef575')
            .setTitle('Commands')
            .setDescription('Shows all the commands coded for this bot')
            .setAuthor({ name: 'Alessatax#9472', iconURL: 'https://i.imgur.com/UWP0z7T.png', url: 'https://discordapp.com/users/743178570842767501/'})
            .addFields(
                {name: 'Prefix', value: 'a!'},
                {name: 'Info commands', value: 'avatar, dm, youtube'},
                {name: 'Moderation commands', value: 'hasrole, giverole, removerole, purge, mute, unmute, kick, ban,'},
                {name: 'More help', value: 'use a!help and follow it with a command to have more info about that command'}
            )
            .setImage('https://i.imgur.com/UWP0z7T.png')

            message.channel.send({ embeds: [helpEmbed] });
    },
};