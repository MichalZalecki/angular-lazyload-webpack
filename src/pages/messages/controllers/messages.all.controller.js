'use strict';

class MessagesAllController {
  constructor(msgStore) {
    this.msgs = msgStore.all();
  }
}

export default angular
  .module('messages.all.controller', [
    require('commons/msg-store').name,
  ])
  .controller('MessagesAllController', MessagesAllController);
