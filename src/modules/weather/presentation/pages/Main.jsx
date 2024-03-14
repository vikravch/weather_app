import React from 'react';
import NavigationToolbar from "../../../../general/components/NavigationToolbar";
import HomeWeatherPage from "./HomeWeatherPage";
import UserListWeatherPage from "./UserListWeatherPage";
import {Route, Switch} from "react-router-dom";

function Main() {
    return (
        <div className="App">
            <NavigationToolbar
                paths={[{title: 'Home', path: '/home'},
                    {title: 'User List', path: '/cities'}]}
            />
            <Switch>
                <Route component={HomeWeatherPage} path={['/', '/home', '/home/:city']} exact/>
                <Route component={UserListWeatherPage} path={'/cities'}/>
            </Switch>
        </div>
    );
}

export default Main;