
const zipCode = document.getElementById("zip-code")
const weather = document.querySelector(".weather") 
const tempDisplay = document.querySelector(".temp")
const city = document.querySelector(".city")
const highTemp = document.querySelector(".high")
const lowTemp = document.querySelector(".low")
const submitBtn = document.querySelector(".submit-btn")
const positiveBar = document.getElementById('positive-bar')

let incFunc
let decFunc

let width = 0

//Click event for API GET method
submitBtn.addEventListener('click', function(){
  fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode.value + ",us&units=imperial&APPID=27eed51a41c8bb64fac757fd19284f57")
    .then(res => res.json())
    .then(data => assignWeatherData(data))
})

//Parse API data to display on page
function assignWeatherData(data){
  
  let mainTemp = data.main.temp  
  
  //Place API data in designated HTML elements
  tempDisplay.innerText = Math.floor(data.main.temp) + "°"
  highTemp.innerText = Math.floor(data.main.temp_max) + "°"
  lowTemp.innerText = Math.floor(data.main.temp_min) + "°"
  weather.innerText = data.weather[0].description
  city.innerText = data.name

  adjustThermometer(mainTemp)
  
}

function adjustThermometer(mainTemp){
  

  if(mainTemp > 99){
    document.querySelector('.current-temp h1').innerText = "Temp > 100"+ "°"
    width = 0
    positiveBar.style.width = width + "%"
  } else if(mainTemp < 1){
    document.querySelector('.current-temp h1').innerText = "Temp < 0"+ "°"
    width = 0
    positiveBar.style.width = width + "%"
  }else if(mainTemp > 0 && mainTemp > width){    
    incFunc = setInterval(function(){setTemp(mainTemp)}, 25)
  }else{
    decFunc = setInterval(function(){decrementThermometer(mainTemp)}, 25)
  }

}


function setTemp(mainTemp) {
  if (width > mainTemp) {
    clearInterval(incFunc)
    console.log("incFunc cleared")
  } else {
    width++
    positiveBar.style.width = width + "%"    
  }
}


function decrementThermometer(mainTemp){
  if (width < mainTemp) {
        clearInterval(decFunc)
        console.log("decFunc cleared")
      } else {
        width--
        positiveBar.style.width = width + "%"
    }
}



























