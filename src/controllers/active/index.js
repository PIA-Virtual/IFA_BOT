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

  let numRunways = info.runways.length;
  let runways = info.runways.map(returnRunways);
  let arrayRun = [];
  function returnRunways(length){
    var i;
    for (i = 1; i < info.runways.length; i++) { 
      arrayRun.push(`${info.runways[i].ident1}`);
      arrayRun.push(`${info.runways[i].ident2}`)
      return arrayRun;
}
  }

    message.channel.startTyping(true);
    message.channel.send(arrayRun.toString());
    message.channel.stopTyping(true);

  } catch (error) {
    if (error.response.data.error) {
      message.channel.send("Please enter an ICAO code");
    }
  }
};

module.exports = activeController;