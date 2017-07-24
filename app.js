var app = angular.module('Mywork', []);
app.controller('TestCtrl',function($scope, $http ) {
     $http.get('test.json').success(function(response) {
        $scope.myTestJson = response;
       // console.log(JSON.stringify(response));

      $scope.add = function (){
        alert("add is called");
        //$scope.myTestJson.push($scope.jsonNames);
        $scope.myTestJson.push($scope.myTestJson, jsonNames);
      };
       $scope.delete = function (index){
        $scope.myTestJson.splice(index,1);
        alert("JSON Name is deleted");
      }
     $scope.saveUpdate = function (index) {
            $scope.myTestJson[index] = $scope.dynamiceditedModel;
            $scope.edited = -1;
        };
        //$scope.dynamiceditedModel=$scope.myTestJson;
    });
  });
