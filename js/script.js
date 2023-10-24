const apiKey = "b848e9c88e90c978aa07722cdfa0e422";



const cityInput = document.querySelector("#city-input");
const searcBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")
const weatherContainer = document.querySelector("#weather-data")



// Funções
const getWeatherData = async(city) => {
    
    const apiWeatherURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

        const res = await fetch(apiWeatherURL)
        const data = await res.json()

        return data;

};

const showWeathearData = async (city) => {
    try {
    const data= await getWeatherData(city);
    if (data.cod === "404" || data.cod === "400") {
        
        alert ("Cidade ou país não encontrado.");
    
    }

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
    weatherContainer.classList.remove("hide");
    }
 catch (error) {
    
   
}
};


// Eventos
searcBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    
    showWeathearData(city);
    
});

cityInput.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        const city = e.target.value;
        showWeathearData(city);
    }
}
)
