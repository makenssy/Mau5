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
  if (msg === prefix + 'PING') {
      message.channel.send(`:ping_pong: Pong! \`\n${Math.round(client.ping)}ms\`\ `)
      
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

bot.login(process.env.BOT_TOKEN);
