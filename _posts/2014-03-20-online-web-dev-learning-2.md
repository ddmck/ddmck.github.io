---
layout: post
title: My Experience Learning Web Development Online - Part Two
description: Using JumpStartLabs, The Ruby on Rails Tutorial by Michael Hartl and more to learn how to build web apps with Ruby on Rails.
---

After [learning the basic syntax of various programming languages and a little bit of Computer Science](http://www.donaldmckendrick.com/2014/01/15/online-web-dev-learning/)
it took me a little while to pluck the courage attempt to build a web app. Most of my hesitation came from having no experience persisting information in any apps before, my apps simply performed a task and then died. 

I had more experience with Python due to using it in my Ph.D. but none of the frameworks based on it seemed as appealing as Ruby on Rails. Finding out where to get started wasn’t clear at first. After browsing more than just /aww on Reddit, I took a look at the [Rails sub-reddit](http://www.reddit.com/r/rails) where I found some of the  best tutorials to learn Rails.

## The things I loved

### [Blogger by JumpStartLabs](http://tutorials.jumpstartlab.com/projects/blogger.html)

Build yourself a blog in a day with features like adding users, uploading images and allowing comments on articles. Great for learning the overall structure of a Rails app and how to store user information in a database. The example app allows you to explore the relationships between the data you store (Articles belong to Users, Users have many Articles). Building a flexible user interface to display the data you provide from the database (rather than preparing static pages for each blog post) is an excellent introduction to the versatility of Rails.

### [Rails Girls App Tutorial](http://guides.railsgirls.com/app/)

At a similar level of difficulty to the Blogger tutorial. I didn’t even realise that it was a tutorial aimed at women when I attempted it, after staring at variables and strings for so long I sometimes forget words are more than letters stuck together, it’s just a solid introduction to building a Rails app. There’s some great content that helps you extend the functionality of the core app when you are done and looking for a new challenge.

### [University of Texas on Rails by Richard Schneeman](http://www.schneems.com/ut-rails/)

This tutorial isn’t as focused on building full apps until later on where you build a Reddit clone. It take a slower paced approach and breaks Rails down into it’s components, explained in screen-casts before you experiment with small snippets of code. Early use of Github for source control (and homework submission if you’re attending the University of Texas). The lesson on using Rails in conjunction with Javascript to create a dynamic chart that updates every time you submit new data without having to reload the page really stood out as learning point for me (otherwise known as a “fuck-yeah” moment.)

### [The Ruby on Rails Tutorial by Michael Hartl](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book)

By the end of this tutorial you will have a built yourself a Twitter clone. You’ll be  introduced to Test-Driven-Developent as you build your own authentication system. Deals with the logistics of adding new features (on feature branches with git) and launching an app with services like Heroku. Great development environment set up and advanced tips. I found it daunting the first time I attempted it, but after completing the some of the tutorials listed above I could follow along with the concepts as the tutorial introduced them. 

## The things I didn’t love

### [Rails for Zombies](http://railsforzombies.org/)

Really high production values but the structure of the course never really clicked for me. While it’s normally recommended as an introduction to rails I found it much more useful as a tool for recapping what I had learned in other tutorials. The humour helps go through content you have already covered elsewhere without it seeming like a chore! 

### [Codelearn Ruby on Rails Tutorial](http://www.codelearn.org/ruby-on-rails-tutorial)

While I based [Feline Productive](http://www.felineproductive.com/) on some of the code from this tutorial I really think at this point you should really be developing on your local machine rather than in the browser. If you want to try out rails without going through all the set up it may be worth a shot.

## Wrap up

After all of this I spent some time modifying the functionality of the apps I had built in the tutorials (to make a heavily censored twitter clone etc) or swapping out ERB for Haml. This gave me enough courage to start working on my own apps without needing full directions on how to build it. Thanks to the rails sub-reddit I learned that getting a job in the industry despite being self taught wasn’t unheard of, and then spent a tonne of time attempting to learn the answers to common interview questions, which at least highlighted gaps in my knowledge since the “interviews” I had were much less formal.

Next time: The “career-hack” bit.

