'use strict';

describe('msgStore', () => {

  beforeEach(angular.mock.module(require('./msg-store.service').name));

  it('stores messages in _messages', inject((msgStore) => {
    expect(msgStore._messages).toEqual(jasmine.any(Array));
  }));

  it('returns all messages through all()', inject((msgStore) => {
    msgStore._messages.push({ text: 'FooBar', date: new Date });
    expect(msgStore._messages).toEqual(msgStore.all());
  }));

  it('has one default message with date', inject((msgStore) => {
    expect(msgStore._messages.length).toEqual(1);
    expect(msgStore._messages[0].text).toEqual('Hello, World!');
    expect(msgStore._messages[0].date).toEqual(jasmine.any(Date));
  }));

  it('allows to add new messages', inject((msgStore) => {
    msgStore.add("Hello, FooBar!");
    expect(msgStore._messages.length).toEqual(2);
    expect(msgStore._messages[msgStore._messages.length-1].text)
      .toEqual('Hello, FooBar!');
    expect(msgStore._messages[msgStore._messages.length-1].date)
      .toEqual(jasmine.any(Date));
  }));

});