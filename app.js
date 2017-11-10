// Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

// Listener Event: Message Received
bot.on('message', message => {

// Variables
  var sender = message.author; // The person who sent the message
  var msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
  var prefix = '>' // The text before commands, you can set this to what ever you want
  

  // Ping / Pong
  if (message.content.startsWith(prefix + "ping")) {
            const embed = new Discord.RichEmbed()
                .setColor('0x1CE866')
                .setDescription(`:ping_pong: Pong! \`\n${Math.round(bot.ping)}ms\`\ `)
            message.channel.send({ embed })};
  
 }); 

// Bot Launched
bot.on('ready', () => {
    console.log('Okay...') //

    bot.user.setStatus('Online')


});

// User joining.
bot.on('guildMemberAdd', member => {

    console.log('User ' + member.user.username + ' has joined the server!')
    console.log(member)

    var role = member.guild.roles.find('name', 'Platinum');
    member.addRole(role)

    const embed = new Discord.RichEmbed()
              .setDescription(`:beginner: **Bienvenido** ${member.user}!!`)
              .setColor('RANDOM')

    member.guild.channels.get('376560588144508929').send({embed});


});

// User Leaving
bot.on('guildMemberRemove', member => {

  const embed = new Discord.RichEmbed()
            .setDescription(`${member.user} *dejó el server*`)


  member.guild.channels.get('376560588144508929').send({embed});

});

 if (message.content.startsWith(prefix + "info")) {
        let info = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!info) return message.channel.sendMessage("You did not specify a user Mention");
      let member = message.mentions.members.first();
      let mention = message.mentions.users.first();
      let embed = new Discord.RichEmbed()
        .setDescription(`This is the info about **@${mention.username}#${mention.discriminator}**`)
        .setColor('RANDOM')
        .setThumbnail(`${member.user.avatarURL}`)
        .addField("**Username : **", `${mention.username}`, true)
        .addField("**User Discriminator :**", `#${mention.discriminator}`, true)
        .addField("**User ID :**", `${member.id}`, true)
        .addField("**Playing :**", `${member.user.presence.game === null ? "No Game" : member.user.presence.game.name}`, true) 
        .addField("**NickName :**", `${member.nickname}`, true)
        .addField("**Roles :**", `${member.roles.map(r => r.name).join(" -> ")}`)
        .addField("**Joined Guild :**", `${message.guild.joinedAt}`)
        .addField("**Joined Discord :**", `${member.user.createdAt}`)
        .setFooter(`User that triggered command -> ${message.author.username}#${mention.discriminator}`)
      message.channel.send({ embed: embed});
        console.log(`${message.author.username} has used the UserInfo command`)
      return;
      
}

});

bot.login(process.env.BOT_TOKEN);
