import React, {useContext} from 'react';
import NavigationToolbar from "../../../../general/components/NavigationToolbar";
import HomeWeatherPage from "./HomeWeatherPage";
import UserListWeatherPage from "./UserListWeatherPage";
import {AppContext} from "../../../../general/context/appContext";

function Main(props) {
    let Page = null;
    const {currentPage} = useContext(AppContext);
    switch (currentPage) {
        case 'Home':
            Page = <HomeWeatherPage />;
            break;
        case 'User List':
            Page = <UserListWeatherPage />;
            break;
        default:
            Page = <HomeWeatherPage />;
            break;
    }
    return (
        <div className="App">
            <NavigationToolbar
                paths={['Home', 'User List']}
            />
            {Page}
        </div>
    );
}

export default Main;