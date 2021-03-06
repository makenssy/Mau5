// Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

// Listener Event: Message Received
bot.on('message', message => {

// Variables
  var sender = message.author; // The person who sent the message
  var msg = message.content.toUpperCase(); // Takes the message, and makes it all uppercase
  var cont = message.content.slice(prefix.length).split(" ");
  var args = cont.slice(1);
  var prefix = '>' // The text before commands, you can set this to what ever you want
  

  // Ping / Pong
  if (message.content.startsWith(prefix + "ping")) {
            const embed = new Discord.RichEmbed()
                .setColor('0x1CE866')
                .setDescription(`:ping_pong: Pong! \`\n${Math.round(bot.ping)}ms\`\ `)
            message.channel.send({ embed })};
  
    // PURGE

   if (msg.startsWith(prefix + 'PURGE')) {
     async function purge() {
        message.delete();

        if (!message.member.roles.find("name", "bot-cmd")) {
             message.channel.send('You need the \'bot-cmd\' role to use this command.');
            return;
        }  

        if (isNaN(args[0])) {
           message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>');

           return;

       }       

        const fetched =await message.channel.fetchMessages({limit: args[0]});
        console.log(fetched.size + ' messages found, deleting...');

        // Deleting the messages 
        message.channel.bulkDelete(fetched)
             .catch(error => message.channel.send(`Error: ${error}`));

    }

    purge();



  }   
  
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
