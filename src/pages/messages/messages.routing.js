'use strict';

function messagesRouting($stateProvider) {
  $stateProvider
    .state('messages', {
      url: '/messages',
      template: require('./views/messages.html'),
      controller: 'MessagesController as vm',
      resolve: {
        loadMessagesController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./controllers/messages.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            })
          });
        }
      }
    }).state('messages.all', {
      url: '/all',
      template: require('./views/messages.all.html'),
      controller: 'MessagesAllController as vm',
      resolve: {
        loadMessagesAllController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./controllers/messages.all.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            })
          });
        }
      }
    }).state('messages.new', {
      url: '/new',
      templateProvider: ($q) => {
        return $q((resolve) => {
          require.ensure([], () => resolve(require('./views/messages.new.html')));
        });
      },
      controller: 'MessagesNewController as vm',
      resolve: {
        loadMessagesNewController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              // load only controller module
              let module = require('./controllers/messages.new.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            })
          });
        }
      }
    });
}

export default angular
  .module('messages.routing', [])
  .config(messagesRouting);
