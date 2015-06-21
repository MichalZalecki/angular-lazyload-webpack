'use strict';

let appModule = require('../app');

angular.bootstrap(document, [appModule.name], { strictDi: true });
