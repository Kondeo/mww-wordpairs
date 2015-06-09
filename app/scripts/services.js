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


//Quickly and painlessly gets cookies for controllers
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}
