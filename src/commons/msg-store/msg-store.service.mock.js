'use strict';

class MsgStoreServiceMock {
  constructor() {
    this._messages = [];
  }
  add() {}
  all() {}
}

export default new MsgStoreServiceMock;