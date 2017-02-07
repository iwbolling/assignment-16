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

function handleStartEvent(evt){
  var eventTriggersTimer = false
  if(evt.type === 'click') eventTriggersTimer = true
  if(evt.type === 'keydown' && evt.keyCode ===13)  eventTriggersTimer = true;

  if(eventTriggersTimer){
    h1Countdown.className = "countdown";
    h3TaskText.style.color = "#000000";
    h3TaskText.textContent = inputGivenTask.value;
    divInputSection.className = "special-hidden";
    taskStart();
  }
}

function taskStart(){
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
  }, 1000);
};

inputGivenTask.addEventListener("keydown", handleStartEvent )
buttonTaskStart.addEventListener("click", handleStartEvent )
