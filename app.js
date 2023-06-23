//736c476042cdc4910a8f4bc66a291137
//https://api.openweathermap.org/data/2.5/weather?q=city&appid=736c476042cdc4910a8f4bc66a291137
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherapi={
    key:"736c476042cdc4910a8f4bc66a291137",
    baseurl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});
function getWeatherReport(cityname) {
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+cityname+`&appid=736c476042cdc4910a8f4bc66a291137&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather) {
    console.log(weather);

    let cityname = document.getElementById('city');
    cityname.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('max-min');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if (weatherType.textContent == 'Clear') {
        
        document.body.style.backgroundImage = "url(clear.jpg)";
        
    } else if (weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url(cloudy.jpg)";
        
    } else if (weatherType.textContent == 'Smoke') {

        document.body.style.backgroundImage = "url(smoke.jpg)";
        
    } else if (weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url(haze.jpg)";
        
    } else if (weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url(rain.jpg)";
        
    } else if (weatherType.textContent == 'Mist') {
        
        document.body.style.backgroundImage = "url(mist.jpg)";

    } else if (weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url(snow.jpg)";
        
    } else if (weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url(thunder.jpg)";
        
    }

    // Date manage
    function dateManage(dateArg) {

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let year = dateArg.getFullYear();
        let month = months[dateArg.getMonth()];
        let date = dateArg.getDate();
        let day = days[dateArg.getDay()];

        return `${date} ${month} (${day}), ${year}`;
    }
} 