import {createStore} from "./createStore";
import weatherReducer from "../../modules/weather/presentation/redux/weatherReducer";

const initState = { prefsCities:[] }
const storage = createStore(initState,
    weatherReducer);

export default storage;