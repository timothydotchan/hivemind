thinkRecursionApp.factory('postRepository', function($http, $q) {

    var get= function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: '/api/post'}).
               success(function(data, status, headers, config) {
                    deferred.resolve(data);
               }).
               error(function(data, status, headers, config) {
                   deferred.reject(status);
               });

            return deferred.promise;
           deferred.resolve(posts);
    }

    return {
        get:get
    };
});
