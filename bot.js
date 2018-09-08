const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "chat")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('**:rose: __Welcome To S7Q CLAN__:rose: **')
.setThumbnail(member.avatarURL)
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
