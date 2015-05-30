angular.module('starter.services', ['ngResource'])
  .factory('User', ['$resource', function($resource) {

    return $resource( 'http://localhost/webtest/' + 'users.php/:Id',
        { Id: '@Id' }, {

        } );

}]);

angular.module('starter.services', ['ngResource'])
  .factory('Book', ['$resource', function($resource) {

    return $resource( 'http://localhost/webtest/' + 'users.php/page/:Id',
        { Id: '@Id' }, {
            get: {
                method: 'GET',
                params: { Id: '@Id' },
                isArray: false
            }

        } );

}]);
