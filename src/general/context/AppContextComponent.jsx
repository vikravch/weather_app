import React, {useState} from 'react';
import {AppContext} from "./appContext";
import {getPrefsCitiesUseCase, saveCityUseCase} from "../../modules/weather/domain/useCases";

function AppContextComponent(props) {
    const [currentPage, setCurrentPage]
        = useState("");
    const [prefsCities, setPrefsCities]
        = useState([]);

    const onNavigatePath = (path) => {
        setCurrentPage(path);
    }
    const saveCityToPrefs = (city)=>{
        saveCityUseCase(city);
        if(prefsCities.includes(city) === false){
            setPrefsCities(
                [...prefsCities, city]);
        }
    }
    const initPrefsCities = ()=> {
        const prefsCities = getPrefsCitiesUseCase();
        setPrefsCities(prefsCities);
    }
    return (
        <AppContext.Provider
            value={{
                onNavigate: onNavigatePath,
                currentPage: currentPage,
                prefsCities: prefsCities,
                saveCityToPrefs: saveCityToPrefs,
                initPrefsCities: initPrefsCities
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextComponent;