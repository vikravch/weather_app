import {getPrefsCities, saveCityToPref} from "../data/localStoreManager";
import {getWeatherByCity} from "../data/api";

export function getPrefsCitiesUseCase(){
    return getPrefsCities()
}
export function saveCityUseCase(city){
    console.log('clicked with city - '+city);
    saveCityToPref(city);
}
export function getWeatherUseCase(city){
    return getWeatherByCity(city)
}