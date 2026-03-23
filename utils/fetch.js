const weatherSection = document.querySelector('.weather_section');

export const fetchUrl = async (city) => {
    try {
        loadScreen();
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=04062b3023e74467b5b72339262303&q=${city.toLowerCase()}&aqi=no`);
        const data = await response.json();
        clearScreen();
        return data;
    }
    catch (e) {
        console.error(e);
        errorScreen();
    }
}

const loadScreen = () => {
    weatherSection.innerHTML = '<div class="loading"></div>';
}

export const errorScreen = () => {
    weatherSection.innerHTML = '<div class="error_message">No City Found Please Try Again!</div>';
}

const clearScreen = () => {
    weatherSection.innerHTML = '';
}
