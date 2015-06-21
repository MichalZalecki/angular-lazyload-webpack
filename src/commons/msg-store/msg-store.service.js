'use strict';

class MsgStoreService {
  constructor() {
    this._messages = [
      { text: "Hello, World!", date: new Date }
    ];
  }
  add(text) {
    this._messages.push({ text: text, date: new Date });
  }
  all() {
    return this._messages
  }
}

export default angular
  .module('msg-store.service', [])
  .service('msgStore', MsgStoreService);