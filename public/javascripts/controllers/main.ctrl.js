angular.module('pirates')
.controller('PiratesController', ['$scope', 'PiratesService', '$log', function ($scope,PiratesService, $log) {

PiratesService.all().then(function ( pirates){
    $scope.pirates = pirates.data;
  })


}])
