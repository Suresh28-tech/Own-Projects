const APIkey = "cb159ae49e50f6a37b04af95caac62f3";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


const weathericon = document.querySelector(".weather-icon")

async function checkWeather(){
    const searchbox = document.querySelector(".search input")
    const city = searchbox.value
    const response = await fetch(APIurl + `&q=${city}` + `&appid=${APIkey}` );
    var data = await response.json();


document.querySelector(".city").innerHTML = data.name 
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + " %"
document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) +" km/h"

if (data.weather[0].main == "Clouds"){
    weathericon.src="/images/cloudy-windy.png"
}
else if (data.weather[0].main == "Clear"){
    weathericon.src="/images/sun.png"
}
else if (data.weather[0].main == "Rain"){
    weathericon.src="/images/rain.png"
}
else if (data.weather[0].main == "Drizzle"){
    weathericon.src="/images/Drizzle.png"
}
else if (data.weather[0].main == "Mist"){
    weathericon.src="/images/snow.png"
}
else if (data.weather[0].main == "Haze"){
    weathericon.src="/images/cloudy.png"
}

}
