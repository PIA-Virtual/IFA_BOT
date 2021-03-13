'use strict';
const announceController = async message => {
  const mess = message.content.slice(10);
  message.client.channels.get('592761872835411988').send(mess);
};

module.exports = announceController;
