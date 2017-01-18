const app = angular.module("guides", ["ngRoute"])

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
  .when("/", {
    controller: "booksBooks",
    templateUrl: "bookish.html"
  })
})

app.controller("booksBooks", function($scope, $http) {
  console.log("I'm here")

  $http.get(`data/guides.json`)
  .then(function(guidesForTravel) {
    console.log(guidesForTravel)
    $scope.cutter = guidesForTravel.data.guides
    // $scope.name = guidesForTravel.data.guides[t].title
    // $scope.price = guidesForTravel.data.guides[t].price
    // $scope.type = guidesForTravel.data.guides[t].type

  })
})
