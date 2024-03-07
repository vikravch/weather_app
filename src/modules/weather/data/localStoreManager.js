export function saveCityToPref(cityName) {
    const prefsStr = localStorage.getItem('prefsCities');

    const array = (!prefsStr)? []:JSON.parse(prefsStr);
    if(!array.includes(cityName)){
        array.push(cityName);
    }

    localStorage.setItem('prefsCities', JSON.stringify(array));
}

export function getPrefsCities() {
    const prefsStr = localStorage.getItem('prefsCities');

    const array = (!prefsStr)? []:JSON.parse(prefsStr);
    return array;
}