angular
  .module('app')
  .controller('MainController', MainController);
  
function MainController($scope) {
  $scope.name = 'Dakota';
  $scope.email = 'test@test.com';
  $scope.phone = '111-111-1111';
}