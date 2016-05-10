angular.module('pirates')
.controller('PiratesController', ['$scope', 'PiratesService', '$log', function ($scope,PiratesService, $log) {
$scope.formData = {};

PiratesService.all().then(function (pirates){
    $scope.pirates = pirates.data;
  })

$scope.formSubmit = function () {
  var newPirate = angular.copy($scope.formData);
  $scope.formData = {};

  PiratesService.addPirate(newPirate).then(function(newPirate){
    $scope.addToPirates(newPirate.data[0]);
  })
}

$scope.addToPirates = function (newPirate){
  $scope.pirates.push(newPirate);
}

}])
