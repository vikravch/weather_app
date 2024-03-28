import {INIT_PREFS_CITIES, SAVE_CITY_TO_PREFS} from "./weatherActions";
import {getPrefsCitiesUseCase, saveCityUseCase} from "../../domain/useCases";

const weatherReducer = function (state, action) {

    switch (action.type) {
        case SAVE_CITY_TO_PREFS:
            saveCityUseCase(action.payload);
            return {...state,
                prefsCities: [...state.prefsCities, action.payload]};
        case INIT_PREFS_CITIES:
            const newPrefsCities = getPrefsCitiesUseCase();
            return {...state, prefsCities: newPrefsCities};
        default: return state;
    }

}
export default weatherReducer;