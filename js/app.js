var app = angular.module('Quotes', []);
app.controller('QuotesCtrl', function($scope, $http) {
  $scope.author;
  $scope.category;
  $scope.quote;
  $scope.img;
  $scope.getQoute = function(){
    $http({
        method: 'GET',
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
        headers: {'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V'}
     })
    .then(function(res){
      //console.log(res.data)
      $scope.category = res.data.category
      $scope.quote = res.data.quote
      $scope.author = res.data.author
      $scope.img = 'http://lorempixel.com/400/200'
    }, function(err){
      console.log(err)
    })      
    $scope.img = ''
  }
});