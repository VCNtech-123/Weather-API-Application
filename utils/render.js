
import { fetchUrl } from './fetch.js';

export const weatherSection = document.querySelector('.weather_section');

const generateDiv = async (city) => {
    const data = await fetchUrl(city);

    return `<img src="${data.current.condition.icon}" class="weather_icon">
            <h4 class="city">${data.location.name}</h4>
            <p class="country">${data.location.country}</p>
            <h1 class="temperature">${data.current.temp_c}°C</h1>   
            <p class="cloud">${data.current.condition.text}</p>
            <div class="info_box">
                <div class="box_info"><div class="box_cat">Feels Like</div><p class="box_value">${data.current.feelslike_c}°C</p></div>
                <div class="box_info"><div class="box_cat">Humidity</div><p class="box_value">${data.current.humidity}%</p></div>
                <div class="box_info"><div class="box_cat">Wind</div><p class="box_value">${data.current.wind_mph}m/h</p></div>
            </div>`
}

export const renderCreate = async (search) => {
    weatherSection.innerHTML = '';
    const card = await generateDiv(search);

    const newCard = document.createElement('div');
    newCard.innerHTML = card;
    newCard.classList.add('weather_card');
    weatherSection.appendChild(newCard);
}