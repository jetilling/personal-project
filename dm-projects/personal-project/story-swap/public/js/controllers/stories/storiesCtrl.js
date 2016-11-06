angular.module('storySwap').controller('storiesCtrl', function($scope, service, $timeout, $state){
  $scope.test = "Stories Page!"


  var followingArr = []
  var stories = []

//get current use Id
  var currentUserId;
   service.getUserId()
     .then(function(res) {
        if (res) currentUserId = res;
          $scope.user = currentUserId
        })


//get stories
   service.getStories()
        .then(function(res){
          if(res) var result = res;
          result.forEach(function(item){
            var node = {}
            node.display_name = item.display_name
            node.category = item.category
            node.id = item.id
            node.like_count = item.like_count
            node.story = item.story
            node.users_id = item.users_id
            stories.push(node)
            $scope.data = {
              "nodes": stories,
              "links":[
                  {"source":1,"target":0,"value":1},
                  {"source":2,"target":0,"value":8},
                  {"source":3,"target":0,"value":10},
                  {"source":3,"target":2,"value":6},
                  {"source":4,"target":0,"value":1},
                  {"source":5,"target":0,"value":1},
                  {"source":6,"target":0,"value":1},
                  {"source":7,"target":0,"value":1},
                  {"source":8,"target":0,"value":2},
                  {"source":9,"target":0,"value":1},
                  {"source":11,"target":10,"value":1},
                  {"source":11,"target":3,"value":3},
                  {"source":11,"target":2,"value":3},
                  {"source":11,"target":0,"value":5},
                  {"source":12,"target":11,"value":1},
                  {"source":13,"target":11,"value":1},
                  {"source":14,"target":11,"value":1},
                  {"source":15,"target":11,"value":1},
                  {"source":17,"target":16,"value":4},
                  {"source":18,"target":16,"value":4},
                  {"source":18,"target":17,"value":4},
                  {"source":19,"target":16,"value":4},
                  {"source":19,"target":17,"value":4},
                  {"source":19,"target":18,"value":4},
                  {"source":20,"target":16,"value":3},
                  {"source":20,"target":17,"value":3},
                  {"source":20,"target":18,"value":3},
                  {"source":20,"target":19,"value":4},
                  {"source":21,"target":16,"value":3},
                  {"source":21,"target":17,"value":3},
                  {"source":21,"target":18,"value":3},
                  {"source":21,"target":19,"value":3},
                  {"source":21,"target":20,"value":5},
                  {"source":22,"target":16,"value":3},
                  {"source":22,"target":17,"value":3},
                  {"source":22,"target":18,"value":3},
                  {"source":22,"target":19,"value":3},
                  {"source":22,"target":20,"value":4},
                  {"source":22,"target":21,"value":4},
                  {"source":23,"target":16,"value":3},
                  {"source":23,"target":17,"value":3},
                  {"source":23,"target":18,"value":3},
                  {"source":23,"target":19,"value":3},
                  {"source":23,"target":20,"value":4},
                  {"source":23,"target":21,"value":4},
                  {"source":23,"target":22,"value":4},
                  {"source":23,"target":12,"value":2},
                  {"source":23,"target":11,"value":9},
                  {"source":24,"target":23,"value":2},
                  {"source":24,"target":11,"value":7},
                  {"source":25,"target":24,"value":13},
                  {"source":25,"target":23,"value":1},
                  {"source":25,"target":11,"value":12},
                  {"source":26,"target":24,"value":4},
                  {"source":26,"target":11,"value":31},
                  {"source":26,"target":16,"value":1},
                  {"source":26,"target":25,"value":1},
                  {"source":27,"target":11,"value":17},
                  {"source":27,"target":23,"value":5},
                  {"source":27,"target":25,"value":5},
                  {"source":27,"target":24,"value":1},
                  {"source":27,"target":26,"value":1}
                  // {"source":28,"target":11,"value":8},
                  // {"source":28,"target":27,"value":1},
                  // {"source":29,"target":23,"value":1},
                  // {"source":29,"target":27,"value":1},
                  // {"source":29,"target":11,"value":2},
                  // {"source":30,"target":23,"value":1},
                  // {"source":31,"target":30,"value":2},
                  // {"source":31,"target":11,"value":3},
                  // {"source":31,"target":23,"value":2},
                  // {"source":31,"target":27,"value":1},
                  // {"source":32,"target":11,"value":1},
                  // {"source":33,"target":11,"value":2},
                  // {"source":33,"target":27,"value":1},
                  // {"source":34,"target":11,"value":3},
                  // {"source":34,"target":29,"value":2},
                  // {"source":35,"target":11,"value":3},
                  // {"source":35,"target":34,"value":3},
                  // {"source":35,"target":29,"value":2},
                  // {"source":36,"target":34,"value":2},
                  // {"source":36,"target":35,"value":2},
                  // {"source":36,"target":11,"value":2},
                  // {"source":36,"target":29,"value":1},
                  // {"source":37,"target":34,"value":2},
                  // {"source":37,"target":35,"value":2},
                  // {"source":37,"target":36,"value":2},
                  // {"source":37,"target":11,"value":2},
                  // {"source":37,"target":29,"value":1},
                  // {"source":38,"target":34,"value":2},
                  // {"source":38,"target":35,"value":2},
                  // {"source":38,"target":36,"value":2},
                  // {"source":38,"target":37,"value":2},
                  // {"source":38,"target":11,"value":2},
                  // {"source":38,"target":29,"value":1},
                  // {"source":39,"target":25,"value":1},
                  // {"source":40,"target":25,"value":1},
                  // {"source":41,"target":24,"value":2},
                  // {"source":41,"target":25,"value":3},
                  // {"source":42,"target":41,"value":2},
                  // {"source":42,"target":25,"value":2},
                  // {"source":42,"target":24,"value":1},
                  // {"source":43,"target":11,"value":3},
                  // {"source":43,"target":26,"value":1},
                  // {"source":43,"target":27,"value":1},
                  // {"source":44,"target":28,"value":3},
                  // {"source":44,"target":11,"value":1},
                  // {"source":45,"target":28,"value":2},
                  // {"source":47,"target":46,"value":1},
                  // {"source":48,"target":47,"value":2},
                  // {"source":48,"target":25,"value":1},
                  // {"source":48,"target":27,"value":1},
                  // {"source":48,"target":11,"value":1},
                  // {"source":49,"target":26,"value":3},
                  // {"source":49,"target":11,"value":2},
                  // {"source":50,"target":49,"value":1},
                  // {"source":50,"target":24,"value":1},
                  // {"source":51,"target":49,"value":9},
                  // {"source":51,"target":26,"value":2},
                  // {"source":51,"target":11,"value":2},
                  // {"source":52,"target":51,"value":1},
                  // {"source":52,"target":39,"value":1},
                  // {"source":53,"target":51,"value":1},
                  // {"source":54,"target":51,"value":2},
                  // {"source":54,"target":49,"value":1},
                  // {"source":54,"target":26,"value":1},
                  // {"source":55,"target":51,"value":6},
                  // {"source":55,"target":49,"value":12},
                  // {"source":55,"target":39,"value":1},
                  // {"source":55,"target":54,"value":1},
                  // {"source":55,"target":26,"value":21},
                  // {"source":55,"target":11,"value":19},
                  // {"source":55,"target":16,"value":1},
                  // {"source":55,"target":25,"value":2},
                  // {"source":55,"target":41,"value":5},
                  // {"source":55,"target":48,"value":4},
                  // {"source":56,"target":49,"value":1},
                  // {"source":56,"target":55,"value":1},
                  // {"source":57,"target":55,"value":1},
                  // {"source":57,"target":41,"value":1},
                  // {"source":57,"target":48,"value":1},
                  // {"source":58,"target":55,"value":7},
                  // {"source":58,"target":48,"value":7},
                  // {"source":58,"target":27,"value":6},
                  // {"source":58,"target":57,"value":1},
                  // {"source":58,"target":11,"value":4},
                  // {"source":59,"target":58,"value":15},
                  // {"source":59,"target":55,"value":5},
                  // {"source":59,"target":48,"value":6},
                  // {"source":59,"target":57,"value":2},
                  // {"source":60,"target":48,"value":1},
                  // {"source":60,"target":58,"value":4},
                  // {"source":60,"target":59,"value":2},
                  // {"source":61,"target":48,"value":2},
                  // {"source":61,"target":58,"value":6},
                  // {"source":61,"target":60,"value":2},
                  // {"source":61,"target":59,"value":5},
                  // {"source":61,"target":57,"value":1},
                  // {"source":61,"target":55,"value":1},
                  // {"source":62,"target":55,"value":9},
                  // {"source":62,"target":58,"value":17},
                  // {"source":62,"target":59,"value":13},
                  // {"source":62,"target":48,"value":7},
                  // {"source":62,"target":57,"value":2},
                  // {"source":62,"target":41,"value":1},
                  // {"source":62,"target":61,"value":6},
                  // {"source":62,"target":60,"value":3},
                  // {"source":63,"target":59,"value":5},
                  // {"source":63,"target":48,"value":5},
                  // {"source":63,"target":62,"value":6},
                  // {"source":63,"target":57,"value":2},
                  // {"source":63,"target":58,"value":4},
                  // {"source":63,"target":61,"value":3},
                  // {"source":63,"target":60,"value":2},
                  // {"source":63,"target":55,"value":1},
                  // {"source":64,"target":55,"value":5},
                  // {"source":64,"target":62,"value":12},
                  // {"source":64,"target":48,"value":5},
                  // {"source":64,"target":63,"value":4},
                  // {"source":64,"target":58,"value":10},
                  // {"source":64,"target":61,"value":6},
                  // {"source":64,"target":60,"value":2},
                  // {"source":64,"target":59,"value":9},
                  // {"source":64,"target":57,"value":1},
                  // {"source":64,"target":11,"value":1},
                  // {"source":65,"target":63,"value":5},
                  // {"source":65,"target":64,"value":7},
                  // {"source":65,"target":48,"value":3},
                  // {"source":65,"target":62,"value":5},
                  // {"source":65,"target":58,"value":5},
                  // {"source":65,"target":61,"value":5},
                  // {"source":65,"target":60,"value":2},
                  // {"source":65,"target":59,"value":5},
                  // {"source":65,"target":57,"value":1},
                  // {"source":65,"target":55,"value":2},
                  // {"source":66,"target":64,"value":3},
                  // {"source":66,"target":58,"value":3},
                  // {"source":66,"target":59,"value":1},
                  // {"source":66,"target":62,"value":2},
                  // {"source":66,"target":65,"value":2},
                  // {"source":66,"target":48,"value":1},
                  // {"source":66,"target":63,"value":1},
                  // {"source":66,"target":61,"value":1},
                  // {"source":66,"target":60,"value":1},
                  // {"source":67,"target":57,"value":3},
                  // {"source":68,"target":25,"value":5},
                  // {"source":68,"target":11,"value":1},
                  // {"source":68,"target":24,"value":1},
                  // {"source":68,"target":27,"value":1},
                  // {"source":68,"target":48,"value":1},
                  // {"source":68,"target":41,"value":1},
                  // {"source":69,"target":25,"value":6},
                  // {"source":69,"target":68,"value":6},
                  // {"source":69,"target":11,"value":1},
                  // {"source":69,"target":24,"value":1},
                  // {"source":69,"target":27,"value":2},
                  // {"source":69,"target":48,"value":1},
                  // {"source":69,"target":41,"value":1},
                  // {"source":70,"target":25,"value":4},
                  // {"source":70,"target":69,"value":4},
                  // {"source":70,"target":68,"value":4},
                  // {"source":70,"target":11,"value":1},
                  // {"source":70,"target":24,"value":1},
                  // {"source":70,"target":27,"value":1},
                  // {"source":70,"target":41,"value":1},
                  // {"source":70,"target":58,"value":1},
                  // {"source":71,"target":27,"value":1},
                  // {"source":71,"target":69,"value":2},
                  // {"source":71,"target":68,"value":2},
                  // {"source":71,"target":70,"value":2},
                  // {"source":71,"target":11,"value":1},
                  // {"source":71,"target":48,"value":1},
                  // {"source":71,"target":41,"value":1},
                  // {"source":71,"target":25,"value":1},
                  // {"source":72,"target":26,"value":2},
                  // {"source":72,"target":27,"value":1},
                  // {"source":72,"target":11,"value":1},
                  // {"source":73,"target":48,"value":2},
                  // {"source":74,"target":48,"value":2},
                  // {"source":74,"target":73,"value":3},
                  // {"source":75,"target":69,"value":3},
                  // {"source":75,"target":68,"value":3},
                  // {"source":75,"target":25,"value":3},
                  // {"source":75,"target":48,"value":1},
                  // {"source":75,"target":41,"value":1},
                  // {"source":75,"target":70,"value":1},
                  // {"source":75,"target":71,"value":1},
                  // {"source":76,"target":64,"value":1},
                  // {"source":76,"target":65,"value":1},
                  // {"source":76,"target":66,"value":1},
                  // {"source":76,"target":63,"value":1},
                  // {"source":76,"target":62,"value":1},
                  // {"source":76,"target":48,"value":1},
                  // {"source":76,"target":58,"value":1}
              ]
            }
            // stories.push(item.category)
          })
        })
      $scope.stories = stories
      console.log(stories);


      //graph
          var color = d3.scale.category20()
          $scope.options = {
              chart: {
                  type: 'forceDirectedGraph',
                  height: (function(){ return nv.utils.windowSize().height })(),
                  width: (function(){ return nv.utils.windowSize().width })(),
                  margin:{top: 0, right: 0, bottom: 0, left: 0},
                  color: function(evt){
                    evt.color = "#C93742"
                    return evt.color
                  },
                  tooltip: {
                    enabled: true,
                    useInteractiveGuideline: false,
                    interactive: true,
                    contentGenerator: function (e) { //return html content
                      return '<h3>' + e.display_name + '</h3>' +
                             '<p>' + 'Category' + ' ' + e.Category + '</p>'
                  }
                },
                  nodeExtras: function(node) {
                      node && node
                        .append("text")
                        .attr("dx", 8)
                        .attr("dy", ".35em")
                        .text(function(e) { return e.name })
                        .style('font-size', '10px')
                        node.on("dblclick", function(e){
                          d3.selectAll('.nvtooltip').each(function(){
                            console.log('hold');
                              this.style.setProperty('display', 'none', 'important');
                          });
                          swal({
                            title: e.display_name,
                            text: e.story,
                            animation: false,
                            customClass: 'animated pulse'
                          }).then(
                               function(){
                                 d3.selectAll('.nvtooltip').each(function(){
                                     this.style.setProperty('display', 'block', 'important');
                                 });
                               }
                             )

                        })
                        node.on("mousedown", function(evt){
                            d3.selectAll('.nvtooltip').each(function(){
                                this.style.setProperty('display', 'none', 'important');
                            });
                        })
                        node.on('mouseup', function(){
                          d3.selectAll('.nvtooltip').each(function(){
                              this.style.setProperty('display', 'block', 'important');
                          });
                        })

            }

          },


      };








//get users you're following
    service.getUserId()
      .then(function(res) {
        if (res) {
          service.getFollowing(res)
            .then(function(response){
              var result = response.data[0].follows;
              result.forEach(function(item){
                service.getFollowingUser(item)
                  .then(function(response){
                      var result = response.data
                    result.forEach(function(item){
                      followingArr.push(item)
                    })
                    // followingArr.push(response.data[0]);
                    // $scope.following = followingArr;
                    console.log(followingArr);
                  })
                })
              })
          }
          else console.log('idk');
    });

    $scope.following = followingArr


//see stories from the user you're following
    $scope.viewStories = function(id, user){
      service.viewFollower(id, user)
      .then(function(res){
        if(res) $state.go('dashboard.following')
      })
    }

//follow User
    $scope.followUser = function(users_id, user, display_name){
      service.followUser(users_id, user)
      .then(function(res){
        if(res){
          followingArr.push({display_name: display_name, id: users_id})
        }
      })
    }

//unfollow User
    $scope.unfollowUser = function(id, user){
      service.unfollowUser(id, user)
      .then(function(res){
        if (res){
          var index = -1;
            // Find the element in the array
            for (var i = 0; i < followingArr.length; i++) {
                if (followingArr[i].id === id) {
                    index = i;
                    break;
                }
            }
            // Remove the element
            if (index !== -1) {
                followingArr.splice(index,1);
            }
        }
      })
    }


//save Story
    $scope.saveStory = function(id, user){
      service.saveStory(id, user)
    }


})
