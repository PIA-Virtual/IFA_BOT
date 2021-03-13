'use strict';
const announceController = message => {
  const mess = message.content;
  message.channel.send(mess);
};

module.exports = announceController;
