export const SAVE_CITY_TO_PREFS
    = "save_city_to_prefs";
export const INIT_PREFS_CITIES
    = "init_prefs_cities";

export const saveCityToPrefs = (cityName)=>{
    return {
        type: SAVE_CITY_TO_PREFS,
        payload: cityName
    }
}
export const initPrefsCities = ()=>{
    return {
        type: INIT_PREFS_CITIES
    }
}