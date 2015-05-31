angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('IndexCtrl', function($scope) {
  $scope.indexes = [
    { title: 'Example index 1', page: '5', id: 1 },
    { title: 'This is a linked index', page: 9, id: 2 },
    { title: 'Another linked index', page: 15, id: 3 },
    { title: 'More', page: 22, id: 4 },
    { title: 'And more', page: 25, id: 5 },
    { title: 'And last', page: 34, id: 6 }
  ];
})

.controller('PageCtrl', function($scope, $stateParams, Book) {
  //No longer using this method
    //$scope.pagecontents = Book.get({Id:$stateParams.page});

    //Our page number, gets from stateparams
    $scope.pagenumber = $stateParams.page;

    /*
    //Function to set the size of our frame on page load
    $scope.$on('$viewContentLoaded', function() {
      //set our iframe height to it's content on load
      //First get our iframe element
      var page = document.getElementById('pageFrame');
      //Our varialbes for our dimensions
      var newHeight;
      var newWidth;

      //set our dimensions to our page content
      newHeight = page.contentWindow.document.body.scrollHeight;
      newWidth = page.contentWindow.document.body.scrollWidth;

      page.height= 5000 + "px";
      page.width= (newWidth) + "px";

      });

      Method to dynamically set iframe height
      */
});
