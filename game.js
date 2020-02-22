var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level=0;

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(userChosenColour);
  if (userClickedPattern.length == gamePattern.length) {
    checkAnswer();
  }

});


function nextSequence() {
  var randomNumber = Math.floor(4 * Math.random());
  var randomChosenColour = buttonColours[[randomNumber]];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  $("#" + name).addClass("pressed");
  setTimeout(function() {
    $("#" + name).removeClass('pressed');
  }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', event => {
    gamePattern = [];
    userClickedPattern = [];
    $("h1").text("Level " + level);
    nextSequence();
  });
});

function checkAnswer(currentLevel) {
  for (let step = 0; step <=gamePattern.length ; step++) {

    if (userClickedPattern[step] == gamePattern[step]) {
      console.log("checking level" + step);
      if (step == gamePattern.length) {
        userClickedPattern = [];
        console.log("Next Level");
        level++;$("h1").text("Level " + level);
        setTimeout(function() {
          nextSequence();
        }, 1000);
      }
    } else {
      gamePattern.length= 0;
      userClickedPattern.length= 0;
      $("h1").text("Press A Key to Start");
      level = 0;
    }
  }
}
