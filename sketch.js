let videos = [];
let currentVideoIndex = 0;

function setup() {
  // initialize the video elements
  for (let i = 1; i <= 10; i++) {
    let video = select(`#video${i}`);
    videos.push(video);
  }

  shuffleVideos();
}

function shuffleVideos() {
  //randomly shuffle the array
  videos = shuffle(videos);

  // play the first video
  playNextVideo();
}

function playNextVideo() {
  // hide the current video
  if (videos[currentVideoIndex]) {
    videos[currentVideoIndex].style('display', 'none');
  }

  // show and play the next video
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  videos[currentVideoIndex].style('display', 'block');
  videos[currentVideoIndex].elt.play();

  // set a timeout to play the next video after the current one ends
  setTimeout(playNextVideo, videos[currentVideoIndex].elt.duration * 1000);
}
