import React, {Component} from 'react';
import {getPrefsCities} from "../../data/localStoreManager";
import {AppContext} from "../../../../general/context/appContext";

class UserListWeatherPage extends Component {
    render() {
        return (
            <AppContext.Consumer>{
                (value) => {
                    return (
                        <>
                            <h1>User List Weather Page</h1>
                            <ul>
                                {value.prefsCities.map((item, i) => {
                                    return <li key={i.toString()}>{item}</li>
                                })}
                            </ul>
                        </>
                    )
                }
            }

            </AppContext.Consumer>
        );
    }
}

export default UserListWeatherPage;