angular.module('pirates', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/pirates.html'
      })
      // .when('/404', {
      //   template: '<div class="error text-center"><img class="error" src="http://www.cruiseindubai.com/wp-content/uploads/2014/03/404-bg_2x.gif" style="height:400px"></div>'
      // })
      // .otherwise({
      //   redirectTo: '/404'
      // })
});
