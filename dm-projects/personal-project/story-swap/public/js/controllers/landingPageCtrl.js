angular.module('storySwap').controller('landingPageCtrl', function($scope, service){
  $scope.test = "Welcome to Story Swap!"

  $scope.form = false;
  $scope.taken = false;
  $scope.mustBeNumber = false;
  $scope.startButton = true;

  $scope.begin = function(){
    $scope.form = true
    $scope.startButton = false
  }

  $scope.getRandomWords = function(){
    service.getRandomWords()
    .then(function(response){
      $scope.randomWords = response.data
    })
  }

  var emails = []


  $scope.getEmails = function(){
   service.getEmail()
    .then(function(response){
      var result = response.data
      result.forEach(function(item){
        emails.push(item.email)
      })
      console.log(emails);
    })
  }



  $scope.emailCheck = function(email){
    $scope.taken = false
    emails.forEach(function(item){
      if(item === email){
        $scope.taken = true
        return false
      }
    })
    return true
  }

  var displayNameArr = [false];

  $scope.select = function(randomWord){
    displayNameArr.push(randomWord)
    console.log(displayNameArr);
    if (displayNameArr.length > 1) {
      displayNameArr[0] = randomWord
      displayNameArr.pop()
      console.log(displayNameArr)
    }
  }


  $scope.create = function(emailCheck, email, password){
    console.log(displayNameArr[0])
    if (emailCheck, displayNameArr[0]){
      var email = $scope.email,
          password = $scope.password,
          displayName = displayNameArr.slice(0).toString();
        service.createUser(email, password, displayName)
        console.log('creating');
      }
  }
})
