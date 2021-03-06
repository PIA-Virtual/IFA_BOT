'use string';
const Discord = require('discord.js');
const { ping, purge, weather, metar, music, report, kick, ban, warn, icao, vatsim, prefix, announce, charts, active} = require('./controllers');
const getCommand = require('./helpers/get-command');
const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;
bot.on('message', message => {
  switch (getCommand(message)) {
    case 'PING':
      ping(message);
      break;
    case 'PURGE':
      purge(message);
      break;
    case 'WEATHER':
      weather(message);
      break;
    case 'METAR':
      metar(message);
      break;
    case 'MUSIC':
      music(message);
      break;
    case 'REPORT':
      report(message);
      break;
    case 'KICK':
      kick(message);
      break;
    case 'BAN':
      ban(message);
      break;
    case 'WARN':
      warn(message);
      break;
    case 'ICAO':
      icao(message);
      break;
    case 'VATSIM':
      vatsim(message);
      break;
    case 'PREFIX':
      prefix(message);
      break;
    case 'ANNOUNCE':
      announce(message);
      break;
    case 'CHARTS':
      charts(message);
      break;
    case 'ACTIVE':
      active(message);
      break;
    default:
      break;
  }
});
bot.on('ready', () => {
  bot.user.setActivity("Karachi Control", { type: 'Listening' });
  console.log('Bot started.');
});
bot.on('guildMemberAdd', member => {
  let memberRole = member.guild.roles.find(role => role.id == '394546186759045120');
  const channel = member.guild.channels.find(ch => ch.name === 'test-bot-channel');
  if (!channel) return;
  channel.send(`Hey ${member}, welcome to PIA Virtual :tada::hugging: !`);
  member.addRole(memberRole);
  member.addRole(unverifiedRole);
  member.send(`Welcome to PIA Virtual. Something should go here`);
});
//im pretty much done here
bot.login(token);