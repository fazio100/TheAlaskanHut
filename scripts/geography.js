const apiKey1 = "732efc12b766f27f059f3c4b18d6c47a";
const apiKey2 = "e7c69f82fb6c1f1bd9fd03ae9c657e9f";


const btn = document.querySelector(".ok");




async function getData(city){
    const url = `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey1}&units=metric
    `;
    
    const response = await fetch(url);
    
    
    if (!response.ok){
        throw new Error(`Response status: ${response.status}`)
    }

    return await response.json();
}


const temp = document.getElementById("temp");
const hum = document.getElementById("hum");
const pres = document.getElementById("pres");
const windSpeed = document.getElementById("windspeed");
const emoji = document.getElementById("weather-emoji");


btn.addEventListener("click", async event => {

    const searchBar = document.querySelector(".search-bar input")
    
    let data;

    try{
        data = await getData(searchBar.value);
    }
    catch{
        window.alert("La città " + searchBar.value + " non esiste o non apprtiene agli USA.")
    }

    const main = data["main"];

    let meteo = {
        temperature: main["temp"],
        humidity: main["humidity"],
        pressure: (main["pressure"] * 100 / 101325).toFixed(3),
        weather: data["weather"][0]["description"] ,
        windSpeed: (data["wind"]["speed"] * 3.6).toFixed(2),
    }

    temp.textContent = meteo.temperature + " °C";
    hum.textContent = meteo.humidity + "%";
    pres.textContent = meteo.pressure + " atm";
    windSpeed.textContent = meteo.windSpeed + " km/h";


    let id = data["weather"][0]["id"]

    emoji.textContent = getEmoji(id);

    console.log(data);
    // console.log(searchBar.value);
    // console.log(meteo);
})



function getEmoji(id){

    if (id >= 200 && id <= 232){
        return '🌧️';
    }
    if (id >= 300 && id <= 321){
        return '🌦️';
    }
    if (id >= 500 && id <= 531){
        return '🌧️';
    }
    if (id >= 600 && id <= 622){
        return '❄️';
    }
    if (id >= 700 && id <= 781){
        return '🌫️';
    }
    if (id >= 800 && id <= 804){
        return '☀️';
    }
    return ':/';
}



function showDescriptions(){
    const map = document.querySelector(".map");

    const descriptions = map.getElementsByClassName("description");
    const pins = map.getElementsByClassName("pin");


    for (let i = 0; i < descriptions.length; i++){
        let pin = pins[i];
        let desc = descriptions[i];


        if (pin.id == desc.id.split("-")[0]){
            console.log(pin.style.left)
            desc.style.left = pin.style.left;
            console.log(desc.style.left)

        }
    }
}

// showDescriptions();