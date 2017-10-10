angular.module('P79').controller('indexController',
        [
          '$scope',
          'DataBaseService',
          function ($scope, DataBase) {
            $scope.showInfo = false;
            $scope.data = {};
            $scope.process = function () {
              $scope.Inventory = JSON.parse(localStorage.getItem('Inventory'));
              if ($scope.Inventory === null) {
                $scope.Inventory = [
                  $scope.data
                ];
                $scope.showInfo = true;
                $scope.Inventory.forEach(function (element) {
                  $("#Name").append(element.name + "<br>");
                  $("#Lastname").append(element.lastname + "<br>");
                  $("#Phone").append(element.phone + "<br>");
                  $("#Address").append(element.address + "<br>");
                  $("#Email").append(element.email + "<br>");
                });
              } else {
                $scope.Inventory.forEach(function (element) {
                  if (element.phone === $scope.data.phone) {
                    alert("telefono repetido");
                  } else if (element.email === $scope.data.email) {
                    alert("eamil repetido");
                  }
                });
                $scope.Inventory.push($scope.data);
                localStorage.setItem('Inventory', JSON.stringify($scope.Inventory));
                $("#Name").empty();
                $("#Lastname").empty();
                $("#Phone").empty();
                $("#Address").empty();
                $("#Email").empty();
                print();
              }
              localStorage.setItem('Inventory', JSON.stringify($scope.Inventory));
            };
            function print() {
              $scope.showInfo = true;
              $scope.Inventory = JSON.parse(localStorage.getItem('Inventory'));
              $scope.Inventory.forEach(function (element) {
                $("#Name").append(element.name + "<br>");
                $("#Lastname").append(element.lastname + "<br>");
                $("#Phone").append(element.phone + "<br>");
                $("#Address").append(element.address + "<br>");
                $("#Email").append(element.email + "<br>");
              });
            }
            function push() {
            }
            $scope.reset = function () {
              $("#Name").empty();
              $("#Lastname").empty();
              $("#Phone").empty();
              $("#Address").empty();
              $("#Email").empty();
              $scope.data = {};
              $scope.showInfo = false;
            };
          }
        ]);