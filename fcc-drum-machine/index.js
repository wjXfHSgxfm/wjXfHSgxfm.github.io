
let drumPadsAr = document.querySelectorAll('.drum-pad');
let displayEl = document.getElementById('display');


// Keydown logic
window.addEventListener('keydown', (e) =>{
 
  const eventKey = e.code;
  
  for (let i = 0; i < drumPadsAr.length; i++){
    
    let audioName = drumPadsAr[i].id; 
    let audioKey = drumPadsAr[i].children[0].id;
    let audioKeyComposed = `Key${audioKey}`

    drumPadsAr[i].classList.remove('active');

   if(eventKey === audioKeyComposed){
      const audioEl = drumPadsAr[i].children[0];
      e.preventDefault;
      audioEl.currentTime = 0;
      audioEl.play()
      displayEl.innerText = audioName;

      // Add active styling
      
      drumPadsAr[i].classList.add('active');

   }

  }

});

window.addEventListener('keyup', (e) =>{
  for (let i = 0; i < drumPadsAr.length; i++){
    drumPadsAr[i].classList.remove('active');
  }
});
 



// Click logic
for (let i = 0; i < drumPadsAr.length; i++){

  let audioKey = drumPadsAr[i].children[0].id;
  console.log(audioKey);
  let audioName = drumPadsAr[i].id;

  drumPadsAr[i].addEventListener('click', (e)=>{
    const audioEl = drumPadsAr[i].children[0];
    e.preventDefault;
    audioEl.currentTime = 0;
    audioEl.play()
    displayEl.innerText = audioName;
  })
}
