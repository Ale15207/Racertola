module.exports = {
    name: "dm",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        mentiondm = message.mentions.users.first();
        if(mentiondm){
            mentionMessage = message.content.slice(27)
            mentiondm.send(mentionMessage)
        }  
    }
}