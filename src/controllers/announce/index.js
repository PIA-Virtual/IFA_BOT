'use strict';
const announceController = message => {
  const mess = message;
  message.channel.send(mess);
};

module.exports = announceController;
