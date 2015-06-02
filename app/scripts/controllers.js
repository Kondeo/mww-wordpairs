angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, Book) {
  // Form data for the login modal
  $scope.loginData = {};

  //Form data for the go to page
  $scope.page = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    backdropClickToClose: false,
    id: 1,
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Create the go to page modal that we will use later
  $ionicModal.fromTemplateUrl('templates/gotopage.html', {
    id: 2,
    scope: $scope
  }).then(function(modal) {
    $scope.gotomodal = modal;
  });

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Open the login modal
  $scope.goToPage = function() {
    $scope.gotomodal.show();
  };

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Triggered in the go to modal to close it
 $scope.closeGoTo = function() {
   $scope.gotomodal.hide();
 };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $scope.loginFinish = Book.login($scope.loginData, function() {
        //Determine response from server
        if (!$scope.loginfinish.result) {
            alert("Sorry, that isn't the correct username and password.");
        } else {
            //Store the token from the server for future use
            document.cookie = "session_token=" + $scope.loginfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
            $scope.closeLogin();
        }
    });
  };

  // Perform the find page
  $scope.goToPageNum = function() {
    //Go to the desired url
    $scope.temp = '/#/app/page/' + $scope.page.number;
    location.replace($scope.temp);

    //Now close the modal
    $scope.gotomodal.hide();
  };

  // go to the listing
  $scope.listing = function() {
    //Go to the desired url
    location.replace('/#/app/listing/');

    //Now close the modal
    $scope.gotomodal.hide();
  };

})

.controller('IndexCtrl', function($scope) {
  $scope.indexes = [
    { title: 'Chapter 1: The Letter A', page: 1, id: 1, indented: 0},
    { title: 'A, The Article? A, Part of the Word', page: 9, id: 2, indented: 1 },
    { title: 'Affect/Effect', page: 15, id: 3, indented: 1 },
    { title: 'Chapter 2: The Letter B', page: 24, id: 4, indented: 0 },
    { title: 'Chapter 3: The Letter C', page: 51, id: 5, indented: 0 },
    { title: 'Cite/Sight/Site/Incite/Insight/In Sight	', page: 94, id: 6, indented: 1 },
    { title: 'Chapter 4: The Letter D', page: 96, id: 7, indented: 0 },
    { title: 'Chapter 5: The Letter E', page: 112, id: 8, indented: 0 },
    { title: 'Chapter 6: The Letter F', page: 123, id: 9, indented: 0 },
    { title: 'Chapter 7: The Letter G', page: 142, id: 10, indented: 0 },
    { title: 'Chapter 8: The Letter H', page: 157, id: 11, indented: 0 },
    { title: 'Chapter 9: The Letter I', page: 170, id: 12, indented: 0 },
    { title: 'Chapter 10: The Letter J', page: 179, id: 13, indented: 0 },
    { title: 'Chapter 11: The Letter K', page: 181, id: 14, indented: 0 },
    { title: 'Chapter 12: The Letter L', page: 185, id: 15, indented: 0 },
    { title: 'Chapter 13: The Letter M', page: 197, id: 16, indented: 0 },
    { title: 'Chapter 14: The Letter N', page: 214, id: 17, indented: 0 },
    { title: 'Chapter 15: The Letter O', page: 216, id: 18, indented: 0 },
    { title: 'Chapter 16: The Letter P', page: 220, id: 19, indented: 0 },
    { title: 'Chapter 17: The Letter Q', page: 250, id: 20, indented: 0 },
    { title: 'Chapter 18: The Letter R', page: 252, id: 21, indented: 0 },
    { title: 'The Prefix RE-', page: 272, id: 22, indented: 1 },
    { title: 'Chapter 19: The Letter S', page: 275, id: 23, indented: 0 },
    { title: 'Chapter 20: The Letter T', page: 303, id: 24, indented: 0 },
    { title: 'Chapter 21: The Letter U', page: 321, id: 25, indented: 0 },
    { title: 'Chapter 22: The Letter V', page: 324, id: 26, indented: 0 },
    { title: 'Chapter 23: The Letter W', page: 329, id: 27, indented: 0 },
    { title: 'Chapter 24: The Letter Y', page: 340, id: 28, indented: 0 },
    { title: 'Chapter 25: One Word/Two Words', page: 341, id: 29, indented: 0 },
    { title: 'Alphabetical Listing of Words', page: 347, id: 30, indented: 0 }
  ];
})

.controller('PageCtrl', function($scope, $stateParams, Book, $http, $sce, $state, $ionicHistory) {
    $scope.pagenum = $stateParams.page;
    $http.get('http://a56dbb95.ngrok.io/webtest/users.php/page/' + $stateParams.page).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.pagecontents = data;
        $scope.trustedHtml = $sce.trustAsHtml($scope.pagecontents);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    $scope.goToNext = function(){
        $scope.temp = parseInt($stateParams.page) + 1;
        $scope.temp = '/#/app/page/' + $scope.temp;
        location.replace($scope.temp);
    }
    $scope.goToPrev = function(){
        $ionicHistory.goBack();
    }
});
