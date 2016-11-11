(function () {
  'use strict';

  var module = angular.module('app');
  module.controller('DemoController', Controller);

  Controller.$inject = ['$scope'];

  function Controller($scope) {

    $scope.mySnake = new Snake("Sammy the Python");

    $scope.tests = [{
      label: 'Test Snake for "name" property using hasOwnProperty. This is defined in the Animal object inherited by Snake',
      expected: true,
      result: $scope.mySnake.hasOwnProperty('name')
    },
    {
      label: 'Test Snake for "move" property using hasOwnProperty. This is defined in the Animal object inherited by Snake and overridden',
      result: $scope.mySnake.hasOwnProperty('move')
    }];
  }

})();
