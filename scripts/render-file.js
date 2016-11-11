(function () {
  'use strict';

  var module = angular.module('app');

  module.directive('renderFile', Directive);

  Directive.$inject = ['$http'];

  function Directive($http) {
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, element, attributes, controller) {
        $http
          .get(resolvePath(attributes.renderFile))
          .success(function (data) {
            element.text(data);
          })
          .error(function () {
            element.text('Unable to find file');
          });
      }
    };
  }

})();
