'use strict';

// https://discordapp.com/api/oauth2/authorize?client_id=318229413479186432&scope=bot&permissions=00311240

const Discord = require('discord.js');
const client = new Discord.Client();
var karaoke = require('./karaoke');
var counter = require('./counter');
var fs = require('fs');
var auth = JSON.parse(fs.readFileSync('./auth.json', 'utf8'));

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if(message.author.bot) return; // Do not talk to bots

  if(message.content === 'ping') {
    message.reply('pong');
    return;
  }

  if(message.content === '!countsames') {
    counter.countSames(message);
    return;
  }

  // Always count words
  counter.count(message);

  var response = karaoke.singBack(message);
  if(response) {
    message.channel.send(response);
    return;
  }

  if(message.content.match(/twice/i)) {
    var links = [
      'https://www.youtube.com/watch?v=ePpPVE-GGJw',
      'https://www.youtube.com/watch?v=c7rCyll5AeY',
      'https://www.youtube.com/watch?v=0rtV5esQT6I',
      'https://www.youtube.com/watch?v=8A2t_tAjMz8',
      'https://www.youtube.com/watch?v=VQtonf1fv_s'
    ]
    var msg = 'Did someone say TWICE? ' + links[Math.floor(Math.random()*links.length)];
    message.channel.send(msg)
  }
});

client.login(auth['discord']);
