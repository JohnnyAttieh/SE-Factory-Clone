const changeableBackground = document.getElementById('changeable-background');

const colors = [ 'rgba(40, 238, 167, 0.93)','rgba(152, 100, 218, 0.93)', 'rgba(251, 80, 142, 0.93)']; 
let currentIndex = 0;

function changeColor() {
    if (currentIndex === colors.length-1) {
        currentIndex = 0;
    }
    else{
        currentIndex++
    }

    
    changeableBackground.style.backgroundColor = colors[currentIndex]
   
}


setInterval(changeColor, 5460);


let sentences = [
    "SOFTWARE ENGINEER?_",
    "DATA ENGINEER?_",
    "UI/UX DESIGNER?_"
  ];


  function animateText(text) {
    let textContainer = document.getElementById('animatedText');
    let index = 0;

    let intervalId = setInterval(function () {
      textContainer.innerText = text.slice(0, index + 1);

      if (index === text.length - 1) {
        clearInterval(intervalId); 
        setTimeout(function () {
          disappearText(text); 
        }, 1000);
      }

      index++;
    }, 100);
  }

  
  function disappearText(text) {
    let textContainer = document.getElementById('animatedText');
    let index = text.length;

    let intervalId = setInterval(function () {
      textContainer.innerText = text.slice(0, index - 1); 

      if (index === 2) {
        clearInterval(intervalId); 
        setTimeout(function () {
          
          let nextIndex = (sentences.indexOf(text) + 1) % sentences.length;
          let nextSentence = sentences[nextIndex];
          
          animateText(nextSentence); 
        }, 1000);
      }

      index--;
    }, 100);
  }

  animateText("SOFTWARE ENGINEER?_", 500);

  
const heroPage = document.getElementById('hero-page')
const menu = document.getElementById('menu')
let newDiv = document.createElement('div');
let count = 0
menu.addEventListener('click',() =>{
    if(count===0){
    newDiv.classList.add('add-menu')
    console.log(newDiv)
    heroPage.appendChild(newDiv)
    console.log(heroPage)
    count++
    }
    else{
        newDiv.classList.remove('add-menu')
        count = 0
    }
   
})