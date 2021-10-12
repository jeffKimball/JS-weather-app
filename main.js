const currentBar = document.getElementById('current-bar')
const testBtn = document.getElementById('test-btn')

let currentDegrees = 0;
let width = 1

//Event listeners
//---------------
testBtn.addEventListener('click', () =>{  
  if (currentDegrees === 0) {
    currentDegrees = 1    
    setInterval(currentTemp, 20)    
  }
})


//Functions
//---------------

function currentTemp() {
  if (width >= 80) {
    clearInterval()
    
  } else {
    width++
    currentBar.style.width = width + "%"
  }
}

