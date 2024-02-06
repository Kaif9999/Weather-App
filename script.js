document.getElementById("getWeather").addEventListener("click", function () {
   const city = document.getElementById("cityInput").value;
   const API_Key = "8a9b69df074573946b17f2e42c754ca7";
   const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
   const request_url = `${BASE_URL}?appid=${API_Key}&q=${city}`;

   fetch(request_url)
       .then((response) => response.json())
       .then((data) => {
           if (data.cod === 200) {
               const weather = data.weather[0].description;
               const temperature = (data.main.temp - 273.15).toFixed(2);

               // Update weather icon based on the weather description
            const weatherIconElement = document.querySelector(".weather-icon i");
            if (weather.includes("sunny")) {
                  weatherIconElement.className = "fas fa-sun";
          } 
            else if (weather.includes("rain")) {
                  weatherIconElement.className = "fas fa-cloud-showers-heavy";
          }
            else if (weather.includes("cloud")) {
                  weatherIconElement.className = "fas fa-cloud";
         }  else {
                  // Use a default icon for unknown weather conditions
                  weatherIconElement.className = "fas fa-question";
              }
              

               // Update other weather information
               document.querySelector(".weather-description").textContent = `Weather: ${weather}`;
               document.querySelector(".temperature").textContent = `Temperature: ${temperature}°C`;

               // Hide the error container if there's no error
               document.querySelector(".error-container").style.display = "none";
           } else {
               // Show the error container and sad face icon
               document.querySelector(".error").textContent = `City not found`;
               document.querySelector(".fa-frown").style.display = "block";
           }
       })
       .catch((error) => {
           console.error("Error:", error);
       });
});

