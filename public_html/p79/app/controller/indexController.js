angular.module('P79').controller('indexController',
        [
          '$scope',
          'DataBaseService',
          '$localStorage',
          '$sessionStorage',
          function ($scope, DataBase, localStorage, sessionStorage) {

            localStorage.nombre = "Julian";
            sessionStorage.apellido = 'Lasso';
            localStorage.dataBase = [
              {
                nombre: 'Julian',
                apellido: 'Lasso'
              }
            ];

            $scope.datos = localStorage.dataBase;
            localStorage.dataBase.push({nombre: 'Alejandro', apellido: 'Gomez'});
            delete localStorage.nombre;


            $scope.showInfo = false;
            $scope.flag = 0;
            $scope.data = {};
            $scope.process = function () {
              $scope.Inventory = JSON.parse(localStorage.getItem('Inventory'));
              if ($scope.Inventory === null) {
                $scope.flag = 1;
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
                  localStorage.setItem('Inventory', JSON.stringify($scope.Inventory));
                });
              } else {
                $scope.Inventory.forEach(function (element) {
                  if (element.phone === $scope.data.phone) {
                    $scope.flag = 1;
                    alert("The telephone number is already registered");
                  } else if (element.email === $scope.data.email) {
                    $scope.flag = 1;
                    alert("The email is already registered");
                  } else {
                    $scope.flag = 0;
                  }
                });
              }
              if ($scope.flag === 0) {
                $scope.Inventory.push($scope.data);
                localStorage.setItem('Inventory', JSON.stringify($scope.Inventory));
                $("#Name").empty();
                $("#Lastname").empty();
                $("#Phone").empty();
                $("#Address").empty();
                $("#Email").empty();
                print();
              }
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
            $scope.reset = function () {
              $scope.showInfo = false;
            };
          }
        ]);