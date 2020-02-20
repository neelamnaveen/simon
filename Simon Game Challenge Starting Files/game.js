var gamePattern=[];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern=[];var audio
function nextSequence(){
  var randomNumber= Math.floor(4* Math.random());
  var randomChosenColour=buttonColours[[randomNumber]];
  gamePattern.push(randomChosenColour);

  audio=new Audio("sounds/"+randomChosenColour+".mp3");
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);audio.play();
  console.log(userClickedPattern);

}

$(".btn" ).click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  nextSequence();
});


function playSound(name){

  audio.play();
}
