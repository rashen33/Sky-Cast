//----------------------Now Weather Card----------------------------------
const apiKey = "7e51facee7aa2c7eb83af3b197287c4f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchTxt = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

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
    checkWeatherForCast(searchTxt.value);
});


//------------Weather Forcast Card---------------------
const apiKeyWFC = "71a0fdcfa637f2e17fbea115e93854e9";
const apiUrlWFC = "http://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";

async function checkWeatherForCast(city){
    const res = await fetch(apiUrlWFC + city + `&appid=${apiKeyWFC}`);
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

    //--------------card2-------------------------------
    const date1 = data.list[15].dt;
    const unixTimestamp1 = date1;
    const milliseconds1 = date1 * 1000; // 1575909015000
    const dateObject1 = new Date(milliseconds1);
    const humanDateFormat1 = dateObject1.toLocaleDateString(); // 2019-12-9 10:30:15

    const weatherFCIcon1 = document.querySelector(".w-img2");

    document.querySelector(".temp-card2").innerHTML = Math.round(data.list[15].main.temp) + "°c";
    document.querySelector(".date-card2").innerHTML = humanDateFormat1;
    document.querySelector(".humidity-card2").innerHTML = data.list[15].main.humidity + "%";
    document.querySelector(".wind-card2").innerHTML = data.list[15].wind.speed + "km/h";

    if (data.list[15].weather[0].main == "Clear") {
        weatherFCIcon1.src = "assets/clear.png";
    } else if (data.list[15].weather[0].main == "Clouds") {
        weatherFCIcon1.src = "assets/clouds.png";
    } else if (data.list[15].weather[0].main == "Drizzle") {
        weatherFCIcon1.src = "assets/drizzle.png";
    } else if (data.list[15].weather[0].main == "Mist") {
        weatherFCIcon1.src = "assets/mist.png";
    } else if (data.list[15].weather[0].main == "Rain") {
        weatherFCIcon1.src = "assets/rain.png";
    } else if (data.list[15].weather[0].main == "Snow") {
        weatherFCIcon1.src = "assets/snow.png";
    } else if (data.list[15].weather[0].main == "Wind") {
        weatherFCIcon1.src = "assets/wind.png";
    }

        //--------------card3-------------------------------
        const date3 = data.list[22].dt;
        const unixTimestamp3 = date3;
        const milliseconds3 = date3 * 1000; // 1575909015000
        const dateObject3 = new Date(milliseconds3);
        const humanDateFormat3 = dateObject3.toLocaleDateString(); // 2019-12-9 10:30:15
    
        const weatherFCIcon3 = document.querySelector(".w-img3");
    
        document.querySelector(".temp-card3").innerHTML = Math.round(data.list[22].main.temp) + "°c";
        document.querySelector(".date-card3").innerHTML = humanDateFormat3;
        document.querySelector(".humidity-card3").innerHTML = data.list[22].main.humidity + "%";
        document.querySelector(".wind-card3").innerHTML = data.list[22].wind.speed + "km/h";
    
        if (data.list[22].weather[0].main == "Clear") {
            weatherFCIcon3.src = "assets/clear.png";
        } else if (data.list[22].weather[0].main == "Clouds") {
            weatherFCIcon3.src = "assets/clouds.png";
        } else if (data.list[22].weather[0].main == "Drizzle") {
            weatherFCIcon3.src = "assets/drizzle.png";
        } else if (data.list[22].weather[0].main == "Mist") {
            weatherFCIcon3.src = "assets/mist.png";
        } else if (data.list[22].weather[0].main == "Rain") {
            weatherFCIcon3.src = "assets/rain.png";
        } else if (data.list[22].weather[0].main == "Snow") {
            weatherFCIcon3.src = "assets/snow.png";
        } else if (data.list[22].weather[0].main == "Wind") {
            weatherFCIcon3.src = "assets/wind.png";
        }

        //--------------card4-------------------------------
        const date4 = data.list[29].dt;
        const unixTimestamp4 = date4;
        const milliseconds4 = date4 * 1000; // 1575909015000
        const dateObject4 = new Date(milliseconds4);
        const humanDateFormat4 = dateObject4.toLocaleDateString(); // 2019-12-9 10:30:15
    
        const weatherFCIcon4 = document.querySelector(".w-img4");
    
        document.querySelector(".temp-card4").innerHTML = Math.round(data.list[29].main.temp) + "°c";
        document.querySelector(".date-card4").innerHTML = humanDateFormat4;
        document.querySelector(".humidity-card4").innerHTML = data.list[29].main.humidity + "%";
        document.querySelector(".wind-card4").innerHTML = data.list[29].wind.speed + "km/h";
    
        if (data.list[29].weather[0].main == "Clear") {
            weatherFCIcon4.src = "assets/clear.png";
        } else if (data.list[29].weather[0].main == "Clouds") {
            weatherFCIcon4.src = "assets/clouds.png";
        } else if (data.list[29].weather[0].main == "Drizzle") {
            weatherFCIcon4.src = "assets/drizzle.png";
        } else if (data.list[29].weather[0].main == "Mist") {
            weatherFCIcon4.src = "assets/mist.png";
        } else if (data.list[29].weather[0].main == "Rain") {
            weatherFCIcon4.src = "assets/rain.png";
        } else if (data.list[29].weather[0].main == "Snow") {
            weatherFCIcon4.src = "assets/snow.png";
        } else if (data.list[29].weather[0].main == "Wind") {
            weatherFCIcon4.src = "assets/wind.png";
        }

        //--------------card5-------------------------------
        const date5 = data.list[36].dt;
        const unixTimestamp5 = date5;
        const milliseconds5= date5* 1000; // 1575909015000
        const dateObject5 = new Date(milliseconds5);
        const humanDateFormat5 = dateObject5.toLocaleDateString(); // 2019-12-9 10:30:15
    
        const weatherFCIcon5 = document.querySelector(".w-img5");
    
        document.querySelector(".temp-card5").innerHTML = Math.round(data.list[36].main.temp) + "°c";
        document.querySelector(".date-card5").innerHTML = humanDateFormat5;
        document.querySelector(".humidity-card5").innerHTML = data.list[36].main.humidity + "%";
        document.querySelector(".wind-card5").innerHTML = data.list[36].wind.speed + "km/h";
    
        if (data.list[36].weather[0].main == "Clear") {
            weatherFCIcon5.src = "assets/clear.png";
        } else if (data.list[36].weather[0].main == "Clouds") {
            weatherFCIcon5.src = "assets/clouds.png";
        } else if (data.list[36].weather[0].main == "Drizzle") {
            weatherFCIcon5.src = "assets/drizzle.png";
        } else if (data.list[36].weather[0].main == "Mist") {
            weatherFCIcon5.src = "assets/mist.png";
        } else if (data.list[36].weather[0].main == "Rain") {
            weatherFCIcon5.src = "assets/rain.png";
        } else if (data.list[36].weather[0].main == "Snow") {
            weatherFCIcon5.src = "assets/snow.png";
        } else if (data.list[36].weather[0].main == "Wind") {
            weatherFCIcon5.src = "assets/wind.png";
        }
}

