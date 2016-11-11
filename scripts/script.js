(function () {
  'use strict';

  var module = angular.module('app', []);

  window.resolvePath = (function () {
    var root = window.location.pathname;

    return function (path) {
      var resolve = root + path;
      return resolve.replace('//', '/');
    };

  })();

})();
