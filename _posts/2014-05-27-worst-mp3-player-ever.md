---
layout: post
title: The worst MP3 player in the world
description: I built the worst MP3 player in the world using Buzz.js and Github pages
---

<style>
</style>

<div class="btn-group">
  <button type="button" id="play" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-play"></span></button>
  <button type="button" id="pause" class="btn btn-warning btn-lg"><span class="glyphicon glyphicon-pause"></span></button>
  <button type="button" id="stop" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-stop"></span></button>
  <button type="button" id="volDown" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-volume-down"></span></button>
  <button type="button" id="volUp" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-volume-up"></span></button>
</div>

<br>

With the help of [Buzz.js](http://buzz.jaysalvat.com/) and some jQuery I have built possibly the worst mp3 player in the world. It has the same amount of functionality as you would expect from a Happy Meal mp3 player.

{% highlight js %}
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
{% endhighlight %}

Song is Against the Ninja by Dragon Sound. It can be heard in the greatest bad movie of all time.

<iframe width="560" height="315" src="//www.youtube.com/embed/VpZu69OB2KM" frameborder="0" allowfullscreen></iframe>
<script type="text/javascript" src="/public/js/buzz.js"></script>
<script type="text/javascript" src="/public/js/mp3player.js"></script>
