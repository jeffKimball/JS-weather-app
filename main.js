const zipCode = document.getElementById("zip-code")
const weather = document.querySelector(".weather") 
const tempDisplay = document.querySelector(".temp")
const city = document.querySelector(".city")
const highTemp = document.querySelector(".high")
const lowTemp = document.querySelector(".low")
const submitBtn = document.querySelector(".submit-btn")
const positiveBar = document.getElementById('positive-bar')

// variables for setInterval functions
let incFunc
let decFunc

// variable for thermometer animation
let width = 0

//Click event for API GET method
submitBtn.addEventListener('click', function(){
  fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode.value + ",us&units=imperial&APPID=27eed51a41c8bb64fac757fd19284f57")
    .then(res => res.json())
    .then(data => assignWeatherData(data))
})

//Parse API data to display on page
function assignWeatherData(data){
  
  // get current temp 
  let mainTemp = data.main.temp 
  
  
  //Place API data in designated HTML elements
  tempDisplay.innerText = Math.floor(data.main.temp) + "°"
  highTemp.innerText = Math.floor(data.main.temp_max) + "°"
  lowTemp.innerText = Math.floor(data.main.temp_min) + "°"
  weather.innerText = data.weather[0].description
  city.innerText = data.name

  adjustThermometer(mainTemp)
  
}

// takes current temperature and animates the thermometer 
// alerts for temperatures outside of range [1..99]
function adjustThermometer(mainTemp){
  

  if(mainTemp > 99) // display message for out of range temp > 100
  {
    document.querySelector('.current-temp h1').innerText = "Temp > 100"+ "°"
    positiveBar.style.width = 0 
    document.querySelector('#myProgress').style.backgroundColor = 'rgba(255, 48, 33, 0.5)'
  } 
  else if(mainTemp < 1) // display message for out of range temp < 0
  {
    document.querySelector('.current-temp h1').innerText = "Temp < 0"+ "°"
    positiveBar.style.width = 0
    document.querySelector('#myProgress').style.backgroundColor = 'rgba(63, 110, 252)'
  }
  else if(mainTemp > 0 && mainTemp > width) // increment thermometer
  {    
    incFunc = setInterval(function(){incrementThermometer(mainTemp)}, 25)
  }
  else  // decrement thermometer
  {
    decFunc = setInterval(function(){decrementThermometer(mainTemp)}, 25)
  }

}

// call from setInterval increments thermometer
function incrementThermometer(mainTemp) {
  if (width > mainTemp) {
    clearInterval(incFunc)    
  } else {
    width++
    positiveBar.style.width = width + "%"    
  }
}

// call from setInterval decrements thermometer
function decrementThermometer(mainTemp){
  if (width < mainTemp) {
        clearInterval(decFunc)
      } else {
        width--
        positiveBar.style.width = width + "%"
    }
}




























