const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Sends the avatar image of the user tagged.',
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

            const user = message.mentions.users.first() || message.author;

            const exampleEmbed = new MessageEmbed()
            .setColor('#4ef575')
            .setTitle(user.username)
            .setImage(user.avatarURL());

            message.channel.send({ embeds: [exampleEmbed] });
    },
};