export default class Weather {

    #city;
    #temperature;

    constructor(city = "", temperature = "0") {
        this.#city = city;
        this.#temperature = temperature;
    }

    get object(){
        return {
            city: this.#city,
            temperature: this.#temperature
        }
    }
}