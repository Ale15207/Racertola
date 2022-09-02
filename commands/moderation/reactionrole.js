module.exports = {
    name: 'reactionrole',
    category: 'moderation',
    permissions: ["ADMINISTRATOR"],
    devOnly: false,
    run: async ({message, args, Discord, client}) => {
        const channel = '965232100427038730';

        const Boyrole = message.guild.roles.cache.find(role => role.name === "♂️Male");
        const Girlrole = message.guild.roles.cache.find(role => role.name === "♀️Female");
        const Leosign = message.guild.roles.cache.find(role => role.name === "♌Leo");
        const Virgosign = message.guild.roles.cache.find(role => role.name === "♍Virgo");
        const Scorpiosign = message.guild.roles.cache.find(role => role.name === "♏Scorpio");
        const Piscessign = message.guild.roles.cache.find(role => role.name === "♓Pisces");
        const Taurussign = message.guild.roles.cache.find(role => role.name === "♉Taurus");
        const Ariessign = message.guild.roles.cache.find(role => role.name === "♈Aries");
        const Cancersign = message.guild.roles.cache.find(role => role.name === "♋Cancer");
        const Geminisign = message.guild.roles.cache.find(role => role.name === "♊Gemini");
        const Capricornsign = message.guild.roles.cache.find(role => role.name === "♑Capricorn");
        const Librasign = message.guild.roles.cache.find(role => role.name === "♎Libra");
        const Saggittariussign = message.guild.roles.cache.find(role => role.name === "♐Sagittarius");
        const Aquariussign = message.guild.roles.cache.find(role => role.name === "♒Aquarius");
        const Dmsopen =  message.guild.roles.cache.find(role => role.name === "💬Dms open");
        const Dmsclosed = message.guild.roles.cache.find(role => role.name === "🚫Dms close");

        const boyemoji = '♂️';
        const girlemoji = '♀️';
        const leoemoji = '♌';
        const virgoemoji = '♍';
        const scorpioemoji = '♏';
        const piscesemoji = '♓';
        const taurusemoji = '♉';
        const ariesemoji = '♈';
        const canceremoji = '♋';
        const geminiemoji = '♊';
        const capricornemoji = '♑';
        const libraemoji = '♎';
        const saggittariusemoji = '♐';
        const aquariusemoji = '♒';
        const dmsopenemoji = '💬';
        const dmsclosedemoji = '🚫';

        let embed = new Discord.MessageEmbed()
            .setColor('#4ef575')
            .setTitle('Choose the roles you want to have to help the server know more about you!')
            .setDescription('Choosing an emoji will add its corrisponding role to you')
                + `${boyemoji} to indicate you're a male`;
                + `${girlemoji} to indicate you're a female`;
                + `The zodiac roles for each zodiac`;
                + `${dmsopenemoji} to indicate that your dms are open`;
                + `${dmsclosedemoji} to indicate that your dms are closed`;

        let messageEmbed = await channel.send(embed);
        messageEmbed.react(boyemoji);
        messageEmbed.react(girlemoji);
        messageEmbed.react(leoemoji);
        messageEmbed.react(virgoemoji);
        messageEmbed.react(scorpioemoji);
        messageEmbed.react(piscesemoji);
        messageEmbed.react(taurusemoji);
        messageEmbed.react(ariesemoji);
        messageEmbed.react(canceremoji);
        messageEmbed.react(geminiemoji);
        messageEmbed.react(capricornemoji);
        messageEmbed.react(libraemoji);
        messageEmbed.react(saggittariusemoji);
        messageEmbed.react(aquariusemoji);
    }

}