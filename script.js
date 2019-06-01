var vid = document.getElementById('vid');
console.log(vid);

document.getElementById('play-button').addEventListener("click", function(e){
  this.style.display = 'none';
  vid.play();
}, false);