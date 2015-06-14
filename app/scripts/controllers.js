angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $ionicPlatform, $timeout, $location, $window, Book) {
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

  //Alert popup we shall use instead of alerts
  $scope.showAlert = function(aTitle, aText) {
   var alertPopup = $ionicPopup.alert({
     title: aTitle,
     template: aText
   });
   alertPopup.then(function(res) {
     //Do nothing here
   });
 };

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

    $scope.loginFinish = Book.login($scope.loginData, function() {
        //Determine response from server
        if (!$scope.loginFinish.result) {
            $scope.showAlert("Alert!", "Sorry, that isn't the correct username and password.");
        } else {
            //Store the token from the server for future use
            localStorage.setItem("session_token", $scope.loginFinish.result.session_token);
            $scope.closeLogin();
            //Reload the page
            $window.location.reload(true);
        }
    });
  };

  // Perform the find page
  $scope.goToPageNum = function() {
    //Go to the desired url
    $scope.temp = 'app/page/' + $scope.page.number;
    location.path($scope.temp);

    //Now close the modal
    $scope.gotomodal.hide();
  };

  // go to the listing
  $scope.listing = function() {
    //Go to the desired url
    $location.path('app/listing');
  };

  //Function to check if we are logged in
  $scope.loggedIn = function()
  {
    //attempt to grab our cookie
    var cookie = localStorage.getItem("session_token");
    if(cookie != "")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  // at the bottom of your controller
  //Check if we are logged in, if not, force the login popup
    $scope.init = function () {
        if(!$scope.loggedIn() && $location.path() != "/app/register")
        {
            $scope.modal.show();
        }
    };

    //Load function on page load
    $ionicPlatform.ready(function(){
        //timeout for a second then check if we are logged in
        $timeout( function()
        {
            $scope.init();
        }, 1000);
    });

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
    { title: 'Chapter 25: One Word/Two Words', page: 341, id: 29, indented: 0 }
  ];
})

.controller('ListingCtrl', function($scope) {
  $scope.indexes = [
    { title: 'A', page: 347, id: 1},
    { title: 'B', page: 351, id: 2},
    { title: 'C', page: 355, id: 3},
    { title: 'D', page: 361, id: 4},
    { title: 'E', page: 364, id: 5},
    { title: 'F', page: 367, id: 6},
    { title: 'G', page: 370, id: 7},
    { title: 'H', page: 372, id: 8},
    { title: 'I', page: 374, id: 9},
    { title: 'J', page: 376, id: 10},
    { title: 'K', page: 377, id: 11},
    { title: 'L', page: 378, id: 12},
    { title: 'M', page: 380, id: 13},
    { title: 'N', page: 383, id: 14},
    { title: 'O', page: 384, id: 15},
    { title: 'P', page: 385, id: 16},
    { title: 'Q', page: 390, id: 17},
    { title: 'R', page: 391, id: 18},
    { title: 'S', page: 394, id: 19},
    { title: 'T', page: 399, id: 20},
    { title: 'U', page: 402, id: 21},
    { title: 'V', page: 403, id: 22},
    { title: 'W', page: 404, id: 23},
    { title: 'Y, Z', page: 406, id: 24}
  ];
})

.controller('RegisterCtrl', function($scope, $location, Book) {
    // Form data for the register controller
    $scope.registerData = {};

    // Perform the login action when the user submits the login form
    $scope.doRegister = function() {

        //Check for empty fields
        if($scope.registerData.email == null ||
        $scopeData.username == null ||
        $scope.registerData.password == null ||
        $scope.registerData.confirmPassword == null)
        {
            $scope.showAlert("Alert!", "Please complete all fields!");
        }
        //Check for non matching passwords
        else if($scope.registerData.password != $scope.registerData.confirmPassword)
        {
            $scope.showAlert("Alert!", "The passwords do not match!");
        }
        //Check email
        else if($scope.registerData.email.indexOf("@") == -1)
        {
            $scope.showAlert("Alert!", "Please enter a valid E-mail Adress!");
        }
        //Send to backend
        else
        {

            $scope.registerFinish = Book.register($scope.registerData, function() {
                //Determine response from server
                if ($scope.registerFinish.error) {
                    if($scope.registerFinish.error.errorid == '22')
                    {
                        $scope.showAlert("Alert!", "Sorry, that username already exists.");
                    }
                    else if($scope.registerFinish.error.errorid == '23')
                    {
                        $scope.showAlert("Alert!", "Sorry, you have not purchased the software.");
                    }
                }
                else
                {
                    //Store the token from the server for future use
                    localStorage.setItem("session_token", $scope.registerFinish.result.session_token);
                    $location.path("#/");
                }
            });
        }
    }

})

.controller('PageCtrl', function($scope, $stateParams, Book, $location, $http, $sce, $state, $ionicHistory) {
    $scope.pagenum = $stateParams.page;
    var cookie = localStorage.getItem("session_token");
    $http.get('http://dev.kondeo.com/mwwwordpairs/backend/users.php/page/' + $stateParams.page + "/" + cookie).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        //Check for any errors
        if(data.error)
        {
            if(data.error.errorid == '12')
            {
                $scope.showAlert("Alert!", "Session token is no longer valid, please login!");
                $scope.login();
            }
        }
        else
        {
            //Then display the page
            $scope.pagecontents = data;
            $scope.trustedHtml = $sce.trustAsHtml($scope.pagecontents);
        }
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    $scope.goToNext = function(){
        $scope.temp = parseInt($stateParams.page) + 1;
        $scope.temp = 'app/page/' + $scope.temp;

        $location.path($scope.temp);
    }
    $scope.goToPrev = function(){
        $ionicHistory.goBack();
    }
});
