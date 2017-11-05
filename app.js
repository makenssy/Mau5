var Discord = require('discord.js');
var bot = new Discord.Client();

// Listener Event: Message Received
bot.on('message', message => {

// Variables
  var sender = message.author; 
  var msg = message.content.toUpperCase(); 
  var prefix = '>' 

  // Ping / Pong
  if (msg === prefix + 'PING') {
      message.channel.send('Pong!')
  }

});

// Bot Launched
bot.on('ready', () => {
    console.log('Okay...')

    bot.user.setStatus('Online')

});

client.login(process.env.BOT_TOKEN);
