const frames= document.querySelectorAll("#slider .card");
let currentIndex = 0;


function reset() {
  for(let i = 0; i<frames.length; i++) {
  frames[i].classList.remove("active");  
  }
}

function initializeSlider() {
  reset();
  frames[currentIndex].classList.add("active");
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0){
    currentIndex = frames.length-1;
  }
  
  frames[currentIndex].classList.add("active");
}

function slideRight() {
  reset();
  currentIndex++;
  
  if (currentIndex >= frames.length) {
    currentIndex = 0;
  }
   
   frames[currentIndex].classList.add("active");
}

initializeSlider();
document.querySelector("#prev").addEventListener('click',function() {
  slideLeft();
}) 

document.querySelector("#next").addEventListener('click',function() {
  slideRight();
}) 

