'use strict';
const chartsController = async message => {
  const mess = message.content.slice(8);
  message.channel.send(`https://chartfox.org/${mess}`);
};

module.exports = chartsController;
