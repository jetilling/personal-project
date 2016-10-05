angular.module('storySwap').controller('signUpCtrl', function($scope, service, $timeout, $state, $location, $auth){

  $scope.getRandomWords = service.getRandomWords()
    .then(function(response){
      $scope.randomWords = response.data
    })

var name;
  $scope.select = function(randomWord){
    name = randomWord
    console.log(name);
    $scope.displayName = name
    $scope.newName = true;
    return name
  }


  $scope.signup = function(email, password, select) {
    console.log("name sent:", name);
    $auth.signup({
      email: email,
      password: password,
      display_name: name
    }).then(function (response) {
      console.log("signUpCtrl:", response);
      $state.go('dashboard');
    }).catch(function (response) {
      console.log("signUpCtrl Error:", response);
      // window.alert('Error: Register failed');
    });
  };

//   $scope.newName = false;
//   $scope.taken = false;
//   $scope.invalidEmail = false;
//   $scope.enterPassword = false;
//   $scope.form = true;
//   $scope.startHere = false;
//   $scope.startBtn = false;
//
//
  // $scope.getRandomWords = service.getRandomWords()
  //   .then(function(response){
  //     $scope.randomWords = response.data
  //   })
//
//
//   var emails = []
//
//   $scope.getEmails = function(){
//    service.getEmail()
//     .then(function(response){
//       var result = response.data
//       result.forEach(function(item){
//         emails.push(item.email)
//       })
//       console.log(emails);
//     })
//   }
//
//
//
//   $scope.emailCheck = function(email){
//     $scope.taken = false
//     emails.forEach(function(item){
//       if(item === email){
//         // console.log("exists");
//         $scope.taken = true
//         return false
//       }
//     })
//     return true
//   }
//
//
//   $scope.validateEmail = function(email){
//     // console.log(email)
//       $scope.invalidEmail = false;
//     if (email === undefined){
//       $scope.invalidEmail = true;
//       return false
//     } else if(email.indexOf('@') <= -1) {
//       // console.log(email);
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
//     // console.log(password);
//     if(!password){
//         $scope.enterPassword = true;
//         return false
//     }
//     $scope.enterPassword = false;
//     return true
//   }
//
  // var name = false
  // $scope.select = function(randomWord){
  //   name = randomWord
  //   console.log(name);
  //   $scope.displayName = name
  //   $scope.newName = true;
  // }
// // console.log(name);
//
//
//   $scope.create = function(emailCheck, validateEmail, checkPassword, email, password){
//     // console.log(emailCheck(), validateEmail(email), checkPassword(password), email, password, name)
//     if (emailCheck() === true && validateEmail(email) === true && checkPassword(password) === true && name !== false){
//       var email = $scope.email,
//           password = $scope.password,
//           displayName = name;
//         service.createUser(email, password, displayName)
//         $timeout(function () {
//           service.loginLocal({
//             email: email,
//             password: password
//           })
//           .then(function(res) {
//             if(res) $state.go('dashboard')
//           })
//         }, 10);
//         console.log('creating');
//       // $scope.form = false;
//       // $scope.startHere = true;
//       // $scope.startBtn = true;
//     }
//
//   }



})
