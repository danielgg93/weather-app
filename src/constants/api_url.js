const  location = "Cali,co";
const api_key = "e22d6538a59730b8e36dafc9ff026f36";
const  url_base_weather = "http://api.openweathermap.org/data/2.5/weather/"; 

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`; 

