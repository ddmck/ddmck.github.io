---
layout: post
title: Javascript Theme Changer for Hyde
description: Using jQuery and a couple of lines of Javascript to add a theme changer for Hyde and Jekyll!
---

While taking a break from writing the follow up to [my experience learning web development](http://www.donaldmckendrick.com/2014/01/15/online-web-dev-learning/) I decided to build a little colour changer in Javascript for those not so fond of the red theme I chose for this site. Also now I get to try out code highlighting with Pygments. 

To add a theme changer to [Hyde](http://andhyde.com/) first make sure you have jQuery in the head of the default.html layout:

{% highlight html %}
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
{% endhighlight %}

Including all of jQuery might be a bit much for just one simple feature so I guess I will have to add more features like search later to make the most of it.

Then at the bottom of the sidebar.html in the _includes folder add the following: 

{% highlight html %}
<script type="text/javascript">
  var themes = ["theme-base-08", 
                "theme-base-09", 
                "theme-base-0a", 
                "theme-base-0b", 
                "theme-base-0c", 
                "theme-base-0d", 
                "theme-base-0e", 
                "theme-base-0f"
                ];

  $('#color-changer').click(function() {
    var index = Math.floor(Math.random() * themes.length);
    $("body").attr('class', themes[index]);
    return false;
  });
</script>
{% endhighlight %}

Now finally add a button to trigger the colour changer (I put mine below the list in the sidebar): 
{% highlight html %}
<a href="#" id="color-changer">Change color?</a>
{% endhighlight %}

And that's it. It would be nice to add some minimal button styles at some point to make it seem more like and action button than a navigation link. That can be my next "nothing better to do on a saturday night" activity.

