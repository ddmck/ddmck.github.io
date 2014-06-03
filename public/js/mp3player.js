var track1 = new buzz.sound("/public/sounds/ninja.mp3");

$("#play").click(function(){
  track1.play();
});

$("#pause").click(function(){
  track1.pause();
});

$("#stop").click(function(){
  track1.stop();
});

$("#volUp").click(function(){
  track1.increaseVolume(10);
});

$("#volDown").click(function(){
  track1.decreaseVolume(10);
});