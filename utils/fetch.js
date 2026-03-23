
export const fetchUrl = async (city) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=04062b3023e74467b5b72339262303&q=${city.toLowerCase()}&aqi=no`);
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.error(e);
    }
}
