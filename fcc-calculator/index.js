let result = 0; 
let clear = document.getElementById('clear');
let numbersEl = document.querySelectorAll('.numbers'); 
let inputNumber = "";
let currentNumber = parseInt(inputNumber);
let savedNumber = 0;  

let displayEl = document.getElementById('display');
let equalsEl = document.getElementById('equals');

// Clear Resutl
function clearResult() {
  result = 0; 
  inputNumber = "";
  currentNumber = 0;
  savedNumber = 0; 
  displayEl.innerText = currentNumber;
}
clear.addEventListener('click', ()=>{
  clearResult();
})





for (let i = 0; i < numbersEl.length; i++){
  numbersEl[i].addEventListener('click', (e)=>{
    let clickedNumber = numbersEl[i].innerText;

    if (inputNumber === "00") {
      inputNumber = "0";
      displayEl.innerText = "";
      displayEl.innerText = inputNumber; 
    } else {
      inputNumber = inputNumber + clickedNumber; 
      displayEl.innerText = "";
      displayEl.innerText = inputNumber; 
    }

  });
}

equalsEl.addEventListener('click', (e) => {

}); 


function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}