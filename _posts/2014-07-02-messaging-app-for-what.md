---
layout: post
title: Free Messaging App Startup Ideas 
description: Get Yo Y-Combinator Application Form out
---

"It's a messaging app where you communicate using only <span id=
"comm"></span>!"

Apply to Y-Combinator <a target="_blank" href="http://www.ycombinator.com/apply/"> here</a>.

Not working out? <a href="#" id="pivot">Pivot!</a>

<script type="text/javascript">
  var ideas = ["crowd-sourced smoke signals", "Sign Language GIFs", "condescending silence", "Wilhelm screams", "James Altucher quotes", "skywriting", "chemtrails", "Out of Office Messages", "funny 404 pages", "dog noises that almost sound like words", "Clipart from before 2000", "those glasses from Mission Impossible", "Nick Cage sound bites", "smart fridge to smart fridge real time fridge magnet rearrangement"];
  var index = Math.floor((Math.random() * ideas.length));
  $(document).ready(function() {
    $("#comm").html(ideas[index]);
    $('#pivot').on('click', function() {
      index = Math.floor((Math.random() * ideas.length));
      $("#comm").html(ideas[index]);
    })
  })

</script> 