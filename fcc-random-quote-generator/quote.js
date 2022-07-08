// Quote Functionaltiy
let quote = []; 
let buttonEl = document.getElementById('new-quote');
let contentEl = document.getElementById('text');
let authorEl = document.getElementById('author');

function fetchQuote() {
  
  quote = [];

  fetch('https://api.quotable.io/random')
  .then(data => {
  return data.json();
  })
  .then(post => {
      let postObject = {}
      postObject.content = post.content;
      postObject.author = post.author;
      quote.push(postObject);
  }) .then(() => {
    insertQuote();
});;

}

function insertQuote(){
  contentEl.innerText = "";
  contentEl.innerText = quote[0].content;

  authorEl.innerText = "";
  authorEl.innerText = quote[0].author;
}

// Add 

// RandomColor Functionality  
  function setRandomColor() {
    const colorScheme = ['#fb8500', '#ffb703', '#023047', '#219ebc', '#8ecae6']
    let el = document.querySelector('body');
    let randomNum = Math.floor(Math.random() * colorScheme.length);
    // el.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    el.style.backgroundColor = colorScheme[randomNum];
  }
  setRandomColor();

  // Execute function ones DOM is ready
  document.addEventListener("DOMContentLoaded", function(event) {
    fetchQuote();
  });

  buttonEl.addEventListener('click', () => {
    fetchQuote();
  })