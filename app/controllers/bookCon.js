app.controller("booksBooks", function($scope, $http, guideFactory) {
  console.log("I'm here")
  guideFactory.getGuide()
  .then(function(val) {
    $scope.cutter = val
  })

})
