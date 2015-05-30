angular.module('starter')
  .factory('User', ['$resource', function($resource, config) {

    return $resource( apiEndpoint + 'user/:Id',
        { Id: '@Id' }, {

        } );

}]);

angular.module('starter')
  .factory('Book', ['$resource', function($resource, config) {

    return $resource( apiEndpoint + 'users.php/page/:Id',
        { Id: '@Id' }, {
            get: {
                method: 'GET',
                params: { Id: '@pagenum' },
                isArray: false
            }

        } );

}]);
