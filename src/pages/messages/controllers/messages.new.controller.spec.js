'use strict';

describe('MessagesNewController', () => {

  var controller,
      msgStoreMock;

  beforeEach(angular.mock.module(require('./messages.new.controller').name));
  beforeEach(inject(($controller) => {
    msgStoreMock = require('commons/msg-store/msg-store.service.mock');
    spyOn(msgStoreMock, 'add');
    controller = $controller('MessagesNewController', { msgStore: msgStoreMock });
  }));

  it('sets text', () => {
    expect(controller.text).toBeDefined();
    expect(controller.text).toEqual('');
  });

  it('sets _msgStore', () => {
    expect(controller._msgStore).toBeDefined();
    expect(controller._msgStore).toEqual(msgStoreMock);
  });

  it('has create() method', () => {
    expect(controller.create).toBeDefined();
    expect(controller.create).toEqual(jasmine.any(Function));
  });

  describe('create()', () => {

    it('calls msgStore.add', () => {
      expect(msgStoreMock.add).not.toHaveBeenCalled();
      controller.create();
      expect(msgStoreMock.add).toHaveBeenCalled();
    });

    it('sets text to empty string', () => {
      controller.text = 'FooBar';
      controller.create();
      expect(controller.text).toEqual('');
    });

  })

});