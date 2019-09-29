'use strict';
const pingController = require('./ping');
const metarController = require('./metar');
const purgeController = require('./purge');
const weatherController = require('./weather');
const musicController = require('./music/index.js');
const reportController = require('./report');
const kickController = require('./kick');
const banController = require('./ban');
const warnController = require('./warn');

module.exports = {
  ping: pingController,
  metar: metarController,
  purge: purgeController,
  weather: weatherController,
  music: musicController,
  report: reportController,
  kick: kickController,
  ban: banController,
  warn: warnController,
};
