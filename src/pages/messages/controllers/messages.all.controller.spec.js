'use strict';

describe('MessagesAllController', () => {

  var controller,
      msgStoreMock;

  beforeEach(angular.mock.module(require('./messages.all.controller').name));
  beforeEach(inject(($controller) => {
    msgStoreMock = require('commons/msg-store/msg-store.service.mock');
    spyOn(msgStoreMock, 'all').and.returnValue(['foo', 8]);
    controller = $controller('MessagesAllController', { msgStore: msgStoreMock });
  }));

  it('saves msgStore.all() in msgs', () => {
    expect(msgStoreMock.all).toHaveBeenCalled();
    expect(controller.msgs).toEqual(['foo', 8]);
  });

});
