angular.module('starter.services', ['ngResource'])
  .factory('Book', ['$resource', function($resource) {

    return $resource( 'http://dev.kondeo.com/mwwwordpairs/backend/' + 'users.php/:Id',
        { Id: '@Id' }, {
            register: {
                method: 'POST',
                params: { Id: 'register' },
                isArray: false
            },

            login: {
                method: 'POST',
                params: { Id: 'login' },
                isArray: false
            }

        } );

}]);
