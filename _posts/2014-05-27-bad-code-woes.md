---
layout: post
title: I Wrote Some Terrible Code
description: I got excited about building MathApi and forgot all the good ruby technique I had learned.
---

Last week I pushed up the [Math API](http://donaldmckendrick.com/2014/05/22/an-api-for-math/) I had been thinking of for a while but only worked on briefly. The code was quite concise but rather disconnected. The question generator had no knowledge of the solution checker for example. Original code below.

{% highlight ruby %}
def additionGenerator(opts = {})
  total = rand(opts[:max].to_i)
  num1 = rand(total)
  num2 = total - num1
  { :num1 => num1, :num2 => num2 }.to_json
end

def additionChecker(opts = {})
  if params[:num1].to_i + params[:num2].to_i == params[:answer].to_i
    returnCorrect
  else
    returnIncorrect
  end
end

post '/addition.json' do
  additionGenerator(params)
end

post '/additionchecker.json' do
  additionChecker(params)
end
{% endhighlight %}
 
To fix this I created a class for an addition question that generated the question and contained internal logic for checking for the solution.

{% highlight ruby %}
class Addition
  attr_accessor :num1, :num2, :answer

  def initialize(opts = {})
    total = set_total(opts[:max])
    self.num1 = opts[:num1] || rand(total)
    self.num2 = opts[:num2] || total - self.num1
    self.answer = opts[:answer]
  end

  def correct?
    self.num1.to_i + self.num2.to_i == self.answer.to_i
  end

  def set_total(value = 10)
    rand(value.to_i - 1) + 1
  end

  def to_h
    { num1: self.num1, num2: self.num2, answer: self.answer }
  end

  def to_json
    self.to_h.to_json
  end
end

post '/addition.json' do
  Addition.new(params).to_json
end

post '/additionchecker.json' do
  {correct: Addition.new(params).correct?}.to_json
end
{% endhighlight %}

This increases the lines of code but feels much more connected. Because there is no backend I do have to recreate the object when checking if the submitted solution is correct which feels a little unnatural at first. Being able to call .correct? on all of the question objects seems like a nice way of checking solutions compared to passing some params to a isolated function. 

It seems like overkill at the moment but will hopefully lead to better design choices in the future as the app grows and should make it easier to build a ruby library/gem from the code.