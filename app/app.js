const app = angular.module("guides", ["ngRoute"])

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
  .when("/", {
    controller: "booksBooks",
    templateUrl: "bookish.html"
  })
  .otherwise ({
    redirectTo: "/"
  })
})
