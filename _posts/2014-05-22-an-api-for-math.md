---
layout: post
title: An API for Math(s)
description: Build math questions anywhere you can place HTML, CSS and JS without worrying about the logic
---
I couldn't find an open source project that I wanted to contribute to so I started my own! I decided that providing and API for Math questions might help Education technology creators prototype rapidly across many platforms. Math concepts are quite familiar to most programmers so hopefully there isn't too much of a barrier to entry for those wanting to contribute. You can find the repository for the API [here](https://github.com/ddmck/MathApi).

I'm also working on having a centralized user database so that users can work on their math skills and track their progress across the sites using the API. Something like [Parse](https://www.parse.com) but with a document based DB structure.

Heres a little example of using the API to build a subtraction quiz: 

<form id="question" style="line-height: 50px; font-size: 40px;">
  <input id="score" type="hidden" value="0">
  <label id="labelNum1"></label>
  <input id="num1" type="hidden">
  -
  <label id="labelNum2"></label>
  <input id="num2" type="hidden">
  =
  <input id="answer" type="text" style="height: 50px;width: 100px; padding: 0px 10px 0 10px; line-height: 50px;font-size: 30px;margin: 0px;border-radius: 5px;">
  <input type="submit" style="height: 50px;border: 0px;padding: 0px 10px 0 10px;background-color: #ac4142;line-height: 50px;font-size: 30px;margin: 0px;position: relative;top: -2px;color: #fff;font-family: 'PT Sans', Helvetica, Arial, sans-serif;border-radius: 5px;">
  Score: <span id="showScore">0</span>
</form>
<br>
The JS code to generate the never ending quiz that gets harder the higher your score gets:

{% highlight js %}
$(document).ready(function() {
  var num1, num2;
  var getQuestion = function(number) {
    $.post("http://mathapi.herokuapp.com/subtraction.json",
      { max: 10 + number }, 
      function(data, status){
        num1 = data.num1;
        num2 = data.num2;
        $('#num1').val(num1);
        $('#num2').val(num2);
        $('#answer').val("");
        $('#labelNum1').html(num1);
        $('#labelNum2').html(num2);
      }
    );
  }

  getQuestion(0);

  $("#question").on('submit', function(ev){
    ev.preventDefault();
    $.post("http://mathapi.herokuapp.com/subtractionchecker.json", 
      { num1: $('#num1').val(),
        num2: $('#num2').val(),
        answer: $('#answer').val()
      }, function(data, status) {
        if (data.correct === true) {
          score = parseInt($('#score').val());
          $('#score').val(score + 1);
          $('#showScore').html(score + 1);
          getQuestion(score);
        } else {
          $('#answer').val("");
        }
      }
    );
  });
});
{% endhighlight %}

On the API side (a simple Sinatra app that responds with JSON):

{% highlight ruby %}
def subtractionGenerator(opts = {})
  num1 = rand(opts[:max].to_i)
  num2 = rand(num1)
  { :num1 => num1, :num2 => num2 }.to_json
end

def subtractionChecker(opts = {})
  if opts[:num1].to_i - opts[:num2].to_i == opts[:answer].to_i
    returnCorrect
  else
    returnIncorrect
  end
end

def returnCorrect
  { :correct => true }.to_json
end

def returnIncorrect
  { :correct => false }.to_json
end
{% endhighlight %}

<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    var num1, num2;
    var getQuestion = function(number) {
      $.post("http://mathapi.herokuapp.com/subtraction.json", { max: 10 + number}, function(data, status){
        num1 = data.num1;
        num2 = data.num2;
        $('#num1').val(num1);
        $('#num2').val(num2);
        $('#answer').val("");
        $('#labelNum1').html(num1);
        $('#labelNum2').html(num2);
      });
    }

    getQuestion(0);

    $("#question").on('submit', function(ev){
      ev.preventDefault();
      $.post("http://mathapi.herokuapp.com/subtractionchecker.json", {
        num1: $('#num1').val(),
        num2: $('#num2').val(),
        answer: $('#answer').val()
      }, function(data, status) {
        if (data.correct === true) {
          score = parseInt($('#score').val());
          $('#score').val(score + 1);
          $('#showScore').html(score + 1);
          getQuestion(score);
        } else {
          $('#answer').val("");
        }
      });
    });
    
  });
</script>