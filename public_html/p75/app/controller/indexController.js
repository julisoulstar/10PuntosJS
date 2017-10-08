angular.module('P75').controller('indexController',
        [
          '$scope',
          'DataBaseService',
          function ($scope, DataBase) {
            $scope.showInfo = false;
            $scope.data = {};
            $scope.message = '';
            $scope.process = function () {
              $scope.message = 'You are a person of ' +
                      $scope.data.age + '  years of age, whose biological gender is ' +
                      ($scope.data.gender === 'M' ? 'Male' : 'Female') + '  and your marital status is ' +
                      $scope.data.state;
              $scope.showInfo = true;
            };
            $scope.reset = function () {
              $scope.data = {};
              $scope.showInfo = false;
              $scope.message = '';
            };
          }
        ]);