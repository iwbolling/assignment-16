// TIMER

// create EventListener on button
// push inputted text to .task-text
// start 25-minute timer
  // start 1 second interval
  // for each second
    // if seconds on clock = 00 make it 59
    // else make seconds on clock -1

// VARIABLES
var inputGivenTask = document.querySelector(".input-section input");
var buttonTaskStart = document.querySelector(".input-section .push-to-timer");
var h3TaskText = document.querySelector(".task-box .task-text");
var h1Countdown =  document.querySelector(".countdown");
var divInputSection = document.querySelector(".input-section")

// GLOBAL FUNCTIONS
function taskStart(){
  h3TaskText.style.color = "#000000";
  h3TaskText.textContent = inputGivenTask.value;
  divInputSection.className = "special-hidden";
  var cdArray = [25,":",00];
  var finalString = "";
  var cdInterval = setInterval(function(){
    if (cdArray[2] === 0 && cdArray[0] !== 0) {
      cdArray[0] -= 1;
      cdArray[2] = 59;
    } else if (cdArray[2] !== 0 && cdArray[2] >= 1){
      cdArray[2] -= 1;
    };
    if (cdArray[0] === 0 && cdArray[2] === 0) {
      finalString = "Pomodoro Complete";
      h1Countdown.className = "special-h1";
      h3TaskText.className = "special-hidden";
      divInputSection.className = "input-section";
      clearInterval(cdInterval);
    } else if (cdArray[2] < 10) {
      finalString = cdArray[0] + cdArray[1] + "0" + cdArray[2];
    } else {
      finalString = cdArray.join("");
    };
    h1Countdown.textContent = finalString;
  }, 1);
};

inputGivenTask.addEventListener("keydown", function(event){
  if (event.keyCode === 13) {
    taskStart();
  }
})
buttonTaskStart.addEventListener("click",function(){
  taskStart();
})
