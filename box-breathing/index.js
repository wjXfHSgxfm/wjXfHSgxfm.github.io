let intervalInputEl = document.getElementById('interval-input');
let interval = 5;
let intervalRythm =  `${interval*4}000`;
let transitionDuration = `${interval}s`;
let timerIsRunning = false; 

let boxTopInnerEl = document.querySelector('.box-top-inner');
let boxRightInnerEl = document.querySelector('.box-right-inner');
let boxBottomInnerEl = document.querySelector('.box-bottom-inner');
let boxLeftInnerEl = document.querySelector('.box-left-inner');

let playEl = document.querySelector('.box-play');
let stopEl = document.querySelector('.box-stop');

let roundEl = document.querySelector('.box-round-number');
let roundNum = 0;

let timerCounterId;
let timerTopBar;
let timerRightBar;
let timerBottomBar;
let timerLeftBar;

let counterNum = interval;
let counterEl = document.querySelector('.box-counter');

intervalInputEl.addEventListener('input', (ev)=>{
  interval = Math.abs(ev.target.value) ;
  ev.target.value = Math.abs(ev.target.value);
  counterNum = interval;
  counterEl.innerText = counterNum;
  console.log(interval);
  intervalRythm =  `${interval*4}000`;
  transitionDuration = `${interval}s`;
  setIntervalTransition();
})

playEl.addEventListener('click', ()=>{
  startSession();
});

stopEl.addEventListener('click', ()=>{

/*
  boxTopInnerEl.style.transitionDuration  = "0s"; 
  boxRightInnerEl.style.transitionDuration  = "0s"; 
  boxBottomInnerEl.style.transitionDuration  = "0s"; 
  boxLeftInnerEl.style.transitionDuration  = "0s"; 
  stopSession();

  setTimeout(() => {
    setIntervalTransition();
  }, "50") */

 window.location.reload();
});

function stopSession () {
  timerIsRunning = false; 
  boxTopInnerEl.style.width = "0%";
  boxRightInnerEl.style.width = "0%";
  boxBottomInnerEl.style.width = "0%";
  boxLeftInnerEl.style.width = "0%";
  clearInterval(timerCounterId);
  clearTimeout(timerTopBar);
  clearTimeout(timerRightBar);
  clearTimeout(timerBottomBar);
  clearTimeout(timerLeftBar);
  counterNum = interval;
  counterEl.innerText = counterNum;
}

function startSession(){
  setIntervalTransition();

  timerReset = setTimeout(function tick() {
    console.log('reset');
    resetBars();
    roundCounter();
    timerResetId = setTimeout(tick, intervalRythm);
  }, 0);

  timerTopBar = setTimeout(function tick() {
    setIntervalTransition();
    fillTopBar();
    setIntervalTransition();
    console.log('top');
    timerTopId = setTimeout(tick, intervalRythm);
  }, 15);

  timerRightBar = setTimeout(function tick() {
    setIntervalTransition();
    fillRightBar();
    console.log('right');
    timerRightId = setTimeout(tick, intervalRythm);
  }, `${interval}000`);

  timerBottomBar = setTimeout(function tick() {
    setIntervalTransition();
    fillBottomBar();
    console.log('bottom');
    timerBottomId = setTimeout(tick, intervalRythm);
  }, `${interval*2}000`);

  timerLeftBar = setTimeout(function tick() {
    setIntervalTransition();
    fillLeftBar();
    console.log('left');
    timerLeftId = setTimeout(tick, intervalRythm);
  }, `${interval*3}000`);

  timerCounterId = setInterval(() => {
    if(counterNum > 1) {
      counterNum -= 1;
      counterEl.innerText = counterNum;
    } else {
      counterNum = interval;
      counterEl.innerText = counterNum;
    }
  }, 1000);



}

function resetBars() {
  console.log('fire reset');
  boxTopInnerEl.style.width = "0%";
  boxRightInnerEl.style.height = "0%";
  boxBottomInnerEl.style.width = "0%";
  boxLeftInnerEl.style.height = "0%";
  boxTopInnerEl.style.transitionDuration  = "0s"; 
  boxRightInnerEl.style.transitionDuration  = "0s"; 
  boxBottomInnerEl.style.transitionDuration  = "0s"; 
  boxLeftInnerEl.style.transitionDuration  = "0s"; 

}

function fillTopBar () {
  boxTopInnerEl.style.width = "100%";
}
function fillRightBar () {
  boxRightInnerEl.style.height = "100%";
}
function fillBottomBar () {
  boxBottomInnerEl.style.width = "100%";
}
function fillLeftBar () {
  boxLeftInnerEl.style.height = "100%";
}

function setIntervalTransition () {
  boxTopInnerEl.style.transitionDuration  = transitionDuration; 
  boxRightInnerEl.style.transitionDuration  = transitionDuration; 
  boxBottomInnerEl.style.transitionDuration  = transitionDuration; 
  boxLeftInnerEl.style.transitionDuration  = transitionDuration; 
}

function roundCounter() {
  roundNum += 1; 
  roundEl.innerText = roundNum;
}