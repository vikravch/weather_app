import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../../../general/context/appContext";

function UserListWeatherPage() {
    const {prefsCities, initPrefsCities} = useContext(AppContext);

    useEffect(() => {
        initPrefsCities()
    }, []);

    return (
        <>
            <h1>User List Weather Page</h1>
            <ul>
                {prefsCities.map((item, i) => {
                    return <li key={i.toString()}>{item}</li>
                })}
            </ul>
        </>
    );
}

export default UserListWeatherPage;