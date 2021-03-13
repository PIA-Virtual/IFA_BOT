'use strict';
const announceController = message => {
  const mess = message.content.substring(10);
  message.client.channels.get('326859705714475009').send({
    mess,
})
};

module.exports = announceController;
