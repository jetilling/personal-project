var videoList = ["./videos/Falling-Leaf.mp4", "./videos/Happy-Street.mp4", "./videos/In-And-Out.mp4", "./videos/The-DJ.mp4"];
videoList.sort(function(a, b) {return 0.5 - Math.random()});

$(document).ready(function(){

// console.log(videoList[0]);

$(".intro-video").append("<video controls loop class='background-vid' src=" + videoList[0] + " autoplay poster='posterimage.jpg'></video>");
// $(".intro-video").append("<video loop class='background-vid' src='./videos/In-And-Out.mp4' autoplay poster='posterimage.jpg'></video>");
// $("p").append("<div>test</div>");
})
