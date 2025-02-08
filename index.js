
const apiKey = "761f48357e1c2249f497ffdfb1b903d6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather-box").style.display = "none";
            } else {
                var data = await response.json();
        
                // Log the entire weather data
                console.log("API Response:", data);
        
                // Log specific weather details
                console.log("Weather Main:", data.weather[0].main);
                console.log("Weather Description:", data.weather[0].description);
        
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "images/cloud.png";
                    weatherIcon.style.width = "145px";
                    weatherIcon.style.marginTop = "20px";
                } else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "images/clear.png";
                    weatherIcon.style.width = "145px";
                    weatherIcon.style.marginTop = "20px";
                } else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "images/rain.png";
                    weatherIcon.style.width = "145px";
                    weatherIcon.style.marginTop = "20px";
                } else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "images/drizzle.png";
                    weatherIcon.style.width = "145px";
                    weatherIcon.style.marginTop = "20px";
                } else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "images/mist.png";
                    weatherIcon.style.width = "145px";
                    weatherIcon.style.marginTop = "20px";
                } else if (data.weather[0].main.includes("Snow") || data.weather[0].description.includes("snow")) {
                    weatherIcon.src = "images/snow.png";
                    weatherIcon.style.width = "145px";
                    weatherIcon.style.marginTop = "20px";
                }
        
                document.querySelector(".weather-box").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
        }
        searchBtn.addEventListener("click", ()=>{ /*Will give the city information*/
            checkWeather(searchBox.value);
        })