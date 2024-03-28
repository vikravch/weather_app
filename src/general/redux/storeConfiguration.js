
import weatherReducer from "../../modules/weather/presentation/redux/weatherReducer";
import {createStore} from "redux";

const initState = { prefsCities:[] }
const storage = createStore(
    weatherReducer,initState
    );

export default storage;