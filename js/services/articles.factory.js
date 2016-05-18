angular.module('test').factory('articlesFact', ['$http', '$q', function ($http, $q) {
    var deferred = $q.defer();

    return {
        getData : function () {
            return $http.get('data/database.json').then(
                function (response) {
                    deferred.resolve(response.data);

                    return deferred.promise;
                }
            );
        },
    }
}]);