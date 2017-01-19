app.factory("guideFactory", function($http) {
  console.log("ho")

  return{
    getGuide : function() {
      return $http.get(`data/guides.json`)
        .then(function(guidesForTravel) {
          console.log(guidesForTravel)
          return guidesForTravel.data.guides
          // $scope.cutter = guidesForTravel.data.guides
          // $scope.name = guidesForTravel.data.guides[t].title
          // $scope.price = guidesForTravel.data.guides[t].price
          // $scope.type = guidesForTravel.data.guides[t].type

        })
    }
  }
})
