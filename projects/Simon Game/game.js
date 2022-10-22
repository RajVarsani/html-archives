//store the GamePattern choice after each click
var gamePattern=[]

//Total 4 color in the game   
var buttonColours=["red", "blue", "green", "yellow"]

//store the userClicked Pattern after each click
var userClickedPattern=[]

var started=false

var level=0

$(document).keypress(function () {
  // alert("Welcome")
  if(!started){
    $("#level-title").text("Level"+level)
    nextSequence()
    started=true
  }
})
//store the choice in usertclicked Array and animate 
$(".btn").click(function () {
    userChosenColor=$(this).attr("id")
    userClickedPattern.push(userChosenColor)
    // console.log(userClickedPattern)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnshwer(userClickedPattern.length-1)

})

//Genrate Random Number and animate
const nextSequence=()=>{
    userClickedPattern=[]
    level++
    $("#level-title").text("Level " + level);
    randomNumber=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour)
}

//PlaySound aaccording to their choice 
const playSound=(name)=>{
  var audio=new Audio("sounds/"+name+".mp3")
  audio.play();
}


const animatePress=(userChosenColor)=>{
  $("#"+userChosenColor).addClass("pressed")

  setTimeout(function () {
    $("#"+userChosenColor).removeClass("pressed")
  },100)
}

const checkAnshwer=(currentLevel)=>{
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
    console.log("Successs")
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function () {
        nextSequence()
      },1000)
    }
  }else{
    console.log("Wrong")
    playSound("wrong")

    $("body").addClass("game-over")
    setTimeout(function () {
      $("body").removeClass("game-over");

    },200)

    $('#level-title').text("Game Over,Press any key to Restart")

    startOver()
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}