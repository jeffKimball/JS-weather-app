
const zipCode = document.getElementById("zip-code")
const weather = document.querySelector(".weather") 
const temp = document.querySelector(".temp")
const city = document.querySelector(".city")
const highTemp = document.querySelector(".high")
const lowTemp = document.querySelector(".low")
const submitBtn = document.querySelector(".submit-btn")
const positiveBar = document.getElementById('positive-bar')
const testBtn = document.getElementById('test-btn')
let mainTemp 
let width = 1

//API GET on click event
submitBtn.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode.value + ",us&units=imperial&APPID=27eed51a41c8bb64fac757fd19284f57")
    .then(res => res.json())
    .then(data => {

       mainTemp = data.main.temp
        //Place API data in designated HTML elements
        // weather.innerText = data.weather[0].description
        temp.innerText = Math.floor(data.main.temp) + "°"
        // city.innerText = data.name
        // highTemp.innerText = Math.floor(data.main.temp_max) + "°"
        // lowTemp.innerText = Math.floor(data.main.temp_min) + "°"
        
        if(mainTemp > 0){
          setInterval(function(){setTemp(mainTemp)}, 20)
        }
        
    })
    
})






//Functions
//---------------

function setTemp(mainTemp) {
  if (width >= mainTemp) {
    clearInterval()
    
  } else {
    width++
    positiveBar.style.width = width + "%"
  }
}

//Event listeners
//---------------
// testBtn.addEventListener('click', () =>{  
//   if (currentDegrees === 0) {
//     currentDegrees = 1    
//     setInterval(setTemp, 20)    
//   }
// })



//let currentDegrees = 0;
