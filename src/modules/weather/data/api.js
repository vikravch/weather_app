import Weather from "../entities/Weather";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "43eca9eb36bec7368e155809e9f64c2c";
export async function getWeatherByCity(cityName) {
    const res = await fetch(
        baseUrl+"/weather?q="+cityName+"&appid="+apiKey+"&units=metric");
    const data = await res.json();
    console.log(data);

    const newWeather =
        new Weather(data.name, data.main.temp).object;

    return newWeather;
}