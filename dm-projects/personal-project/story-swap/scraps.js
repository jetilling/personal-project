
//validate yearBorn is a number
var validate = true
var year = $scope.year
$scope.validate = function(year){
  if(event.keyCode === 9){
    year = ''
  }
  $scope.mustBeNumber = false;
  validate = true
  var newYear = year.split('')
  newYear.forEach(function(item){
    if(!parseInt(item) && year !== ''){
       $scope.mustBeNumber = true
       validate = false
    }
 })
 return parseInt(year)
}

<input type="input" name="name" value="" maxlength="4" placeholder="Year born" ng-model='year' ng-keyup="validate(year)"><h1 ng-show='mustBeNumber'>Must be a year</h1>
