angular.module('storySwap').controller('storiesCtrl', function($scope, service, $timeout, $state){
  $scope.test = "Stories Page!"


  var followingArr = []
  var stories = []
  function Story(display_name, story, users_id, like_count, id){
    this.display_name = display_name,
    this.story = story,
    this.users_id = users_id,
    this.like_count = like_count,
    this.id = id
  }




  $scope.storyPageStories = false;
  $scope.likeBtn = true;
  $scope.followBtn = true


//get current use Id
  var currentUserId;
   service.getUserId()
     .then(function(res) {
        if (res) currentUserId = res;
          $scope.user = currentUserId
          // if ($scope.user === $scope.story.users_id) $scope.followBtn = false;
        })

  // service.getLastStory()
  //   .then(function(res){
  //     function getRandomInt(min, max) {
  //       return Math.floor(Math.random() * (max - min + 1)) + min;
  //     }
  //     ids = [];
  //     for (var i = 0; i < 40; i++){
  //     ids.push(getRandomInt(1, res[0].id))
  //     }
  //     for(var i = 0; i < ids.length; i++){
  //       console.log(ids[i]);
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
                     {"source":27,"target":26,"value":1},
                     {"source":28,"target":11,"value":8},
                     {"source":28,"target":27,"value":1},
                     {"source":29,"target":23,"value":1},
                     {"source":29,"target":27,"value":1},
                     {"source":29,"target":11,"value":2},
                     {"source":30,"target":23,"value":1},
                     {"source":31,"target":30,"value":2},
                     {"source":31,"target":11,"value":3},
                     {"source":31,"target":23,"value":2},
                     {"source":31,"target":27,"value":1},
                     {"source":32,"target":11,"value":1},
                     {"source":33,"target":11,"value":2},
                     {"source":33,"target":27,"value":1},
                     {"source":34,"target":11,"value":3},
                     {"source":34,"target":29,"value":2},
                     {"source":35,"target":11,"value":3},
                     {"source":35,"target":34,"value":3},
                     {"source":35,"target":29,"value":2},
                     {"source":36,"target":34,"value":2},
                     {"source":36,"target":35,"value":2},
                     {"source":36,"target":11,"value":2},
                     {"source":36,"target":29,"value":1},
                     {"source":37,"target":34,"value":2},
                     {"source":37,"target":35,"value":2},
                     {"source":37,"target":36,"value":2},
                     {"source":37,"target":11,"value":2},
                     {"source":37,"target":29,"value":1},
                     {"source":38,"target":34,"value":2},
                     {"source":38,"target":35,"value":2},
                     {"source":38,"target":36,"value":2},
                     {"source":38,"target":37,"value":2},
                     {"source":38,"target":11,"value":2},
                     {"source":38,"target":29,"value":1},
                     {"source":39,"target":25,"value":1},
                     {"source":40,"target":25,"value":1}
                 ]
               }

               // stories.push(item.category)
             })
     })


      $scope.stories = stories
      // console.log(stories);



      $scope.addOne = function(likeCount, id){
        console.log(likeCount, id);
        service.addToLikeCount(likeCount, id)
          .then(function(res){
            if(res){
              $scope.story.forEach(function(item){
                if(item.id === id){
                  item.like_count++
                  $scope.likeBtn = false
                }
              })
            }
          })
      }

      $scope.saveStory = function(id, user){
        console.log(id, user);
        service.saveStory(id, user)
      }


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
                      return '<h3>' + e.display_name + '</h3>'
                            //  '<p>' + 'Category' + ' ' + e.Category + '</p>'
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
                            background: '#1E1E20',
                            confirmButtonText: 'View More',
                            confirmButtonColor: '#DE5F55',
                            confirmButtonClass: 'btn-success',
                            showCancelButton: true,
                            cancelButtonText: 'Done',
                            cancelButtonColor: '#DE5F55',
                            cancelButtonClass: 'btn-done',
                            animation: false,
                            customClass: 'animated pulse userStory'
                          }).then(
                               function(isConfirm){
                                 if(isConfirm){
                                   $scope.storyPageStories = true;
                                   var story = new Story(e.display_name, e.story, e.users_id, e.like_count, e.id)
                                   var selectedStories = [];
                                   selectedStories.push(story)
                                   $scope.story = selectedStories
                                  //  console.log($scope.story);
                                  if($scope.user === e.users_id) $scope.followBtn = false;
                                   $state.go('dashboard.stories.following');
                                   $state.go('dashboard.stories');
                                   d3.selectAll('.nvtooltip').each(function(){
                                       this.style.setProperty('display', 'block', 'important');
                                   });
                                 }
                                 else {
                                   d3.selectAll('.nvtooltip').each(function(){
                                       this.style.setProperty('display', 'block', 'important');
                                   });
                                 }
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
                    // console.log(followingArr);
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
      if (users_id !== user){
        service.followUser(users_id, user)
        .then(function(res){
          if(res){
            followingArr.push({display_name: display_name, id: users_id})
          }
        })
      }
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
