import React from "react";
import './App.css';
import AppContextComponent from "./general/context/AppContextComponent";
import Main from "./modules/weather/presentation/pages/Main";

function App() {
    return (
        <AppContextComponent>
            <Main/>
        </AppContextComponent>
    );
}

export default App;
