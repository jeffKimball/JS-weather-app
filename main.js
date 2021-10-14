
const zipCode = document.getElementById("zip-code")
const weather = document.querySelector(".weather") 
const tempDisplay = document.querySelector(".temp")
const city = document.querySelector(".city")
const highTemp = document.querySelector(".high")
const lowTemp = document.querySelector(".low")
const submitBtn = document.querySelector(".submit-btn")
const positiveBar = document.getElementById('positive-bar')

  
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

  
  if(mainTemp > 0 && mainTemp >= (width - 1)){
    setInterval(function(){setTemp(mainTemp)}, 25)
  }
  
}


function setTemp(mainTemp) {
  if (width > mainTemp) {
    clearInterval()
    
  } else {
    width++
    positiveBar.style.width = width + "%"
    console.log(width)
  }
}







