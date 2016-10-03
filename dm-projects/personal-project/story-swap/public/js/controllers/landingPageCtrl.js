angular.module('storySwap').controller('landingPageCtrl', function($scope, service){
  $scope.test = "Welcome to Story Swap!"

  $scope.form = false;
  // $scope.taken = false;
  // $scope.invalidEmail = false;
  // $scope.enterPassword = false;
  // $scope.displayName = false;
  $scope.start = false;
  $scope.startButton = true;
  $scope.logIn = true;


  $scope.begin = function(){
    $scope.form = true
    $scope.startButton = false
    $scope.logIn = false
  }

//   $scope.getRandomWords = function(){
//     service.getRandomWords()
//     .then(function(response){
//       $scope.randomWords = response.data
//     })
//   }
//
//   var emails = []
//
  // $scope.getEmails = function(){
  //  service.getEmail()
  //   .then(function(response){
  //     var result = response.data
  //     result.forEach(function(item){
  //       emails.push(item.email)
  //     })
  //     console.log(emails);
  //   })
  // }
//
//
//
//   $scope.emailCheck = function(email){
//     $scope.taken = false
//     emails.forEach(function(item){
//       if(item === email){
//         $scope.taken = true
//         return false
//       }
//     })
//     return true
//   }
//
//
//   $scope.validateEmail = function(email){
//     console.log(email)
//       $scope.invalidEmail = false;
//     if (email === undefined){
//       $scope.invalidEmail = true;
//       return false
//     } else if(email.indexOf('@') <= -1) {
//       console.log(email);
//       $scope.invalidEmail = true;
//       return false
//     } else if (email.indexOf('.') <= -1){
//       $scope.invalidEmail = true;
//       return false
//     }
//     return true
//   }
//
//   $scope.checkPassword = function(password){
//     console.log(password);
//     if(!password){
//         $scope.enterPassword = true;
//         return false
//     }
//     $scope.enterPassword = false;
//     return true
//   }
//
//   var name = false
//   $scope.select = function(randomWord){
//     name = randomWord
//     console.log(name);
//   }
// console.log(name);
//
//
//   // $scope.checkDisplayName = function(){
//   //   if (name === true){
//   //     $scope.displayName = false;
//   //     return true
//   //   }
//   //   $scope.displayName = true;
//   //   return false
//   // }
//
//
//   $scope.create = function(emailCheck, validateEmail, checkPassword, email, password){
//     console.log(emailCheck(), email, password, name)
//     if (emailCheck === true && validateEmail === true && checkPassword === true && name !== false){
//       var email = $scope.email,
//           password = $scope.password,
//           displayName = name;
//         service.createUser(email, password, displayName)
//         console.log('creating');
//       $scope.form = false;
//       $scope.start = true;
//     }
//
//   }
})
