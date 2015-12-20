aleph.controller('ListsDeleteCtrl', ['$scope', '$location', '$http', '$modalInstance', 'list',
                                     'Flash', 'QueryContext',
  function($scope, $location, $http, $modalInstance, list, Flash, QueryContext) {
  $scope.list = list;
  
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

  $scope.delete = function() {
    var res = $http.delete($scope.list.api_url);
    res.then(function(data) {
        QueryContext.reset();
        $location.path('/lists');
        $modalInstance.dismiss('ok');
    });
  };

}]);