//----------------------Now Weather Card----------------------------------
const apiKey = "7e51facee7aa2c7eb83af3b197287c4f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchTxt = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity  + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"; 

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/clear.png";
    }else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/clouds.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/mist.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "assets/snow.png";
    }else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "assets/wind.png";
    }
} 

searchBtn.addEventListener("click", () => {
    checkWeather(searchTxt.value);
});


//------------Weather Forcast Card---------------------
const apiKeyWFC = "71a0fdcfa637f2e17fbea115e93854e9";
const apiUrlWFC = "http://api.openweathermap.org/data/2.5/forecast?q=negombo&units=metric";

async function checkWeatherForCast(){
    const res = await fetch(apiUrlWFC + `&appid=${apiKeyWFC}`);
    var data = await res.json();
    console.log(data);

    //---------------Converting unix time to normal format---------
    const date = data.list[7].dt;
    const unixTimestamp = date;
    const milliseconds = date * 1000; // 1575909015000
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleDateString(); //2019-12-9 10:30:15

    const weatherFCIcon = document.querySelector(".w-img1");
    console.log(weatherFCIcon);

    document.querySelector(".temp-card1").innerHTML = Math.round(data.list[7].main.temp)  + "°c";
    document.querySelector(".date-card1").innerHTML = humanDateFormat;
    document.querySelector(".humidity-card1").innerHTML = data.list[7].main.humidity  + "%";
    document.querySelector(".wind-card1").innerHTML = data.list[7].wind.speed + "km/h";

    if(data.list[7].weather[0].main == "Clear"){
        weatherFCIcon.src = "assets/clear.png";
    }else if(data.list[7].weather[0].main == "Clouds"){
        weatherFCIcon.src = "assets/clouds.png";
    }else if(data.list[7].weather[0].main == "Drizzle"){
        weatherFCIcon.src = "assets/drizzle.png";
    }else if(data.list[7].weather[0].main == "Mist"){
        weatherFCIcon.src = "assets/mist.png";
    }else if(data.list[7].weather[0].main == "Rain"){
        weatherFCIcon.src = "assets/rain.png";
    }else if(data.list[7].weather[0].main == "Snow"){
        weatherFCIcon.src = "assets/snow.png";
    }else if(data.list[7].weather[0].main == "Wind"){
        weatherFCIcon.src = "assets/wind.png";
    }


}

checkWeatherForCast();