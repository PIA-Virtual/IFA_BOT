'use strict';
const Discord = require('discord.js');
const { getDataForICAO } = require('../../services/metar');

const activeController = async message => {
  var icao = message.content.split(' ')[1];
  console.log(icao);
  try {
    const { data } = await getDataForICAO(icao);

    if (data.error) { message.channel.send(`Error: ${data.error}`); return; }

    const {
      info
    } = data;

    message.channel.startTyping(true);
    message.channel.send(`${info.icao.toUpperCase()} : ${info.runways[0].ident1}, ${info.runways[0].ident2}, ${info.runways[1].ident1}, ${info.runways[1].ident2}`);
    message.channel.stopTyping(true);

  } catch (error) {
    if (error.response.data.error) {
      message.channel.send("Please enter an ICAO code");
    }
  }
};

module.exports = activeController;