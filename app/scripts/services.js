angular.module('starter.services', ['ngResource'])
  .factory('User', ['$resource', function($resource) {

    return $resource( 'http://localhost/webtest/' + 'users.php/login',
        { Id: '@Id' }, {

          login: {
              method: 'POST',
              params: {},
              isArray: false
          }

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
