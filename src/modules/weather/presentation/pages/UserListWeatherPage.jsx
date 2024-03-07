import React, {useContext} from 'react';
import {AppContext} from "../../../../general/context/appContext";

function UserListWeatherPage() {
    const {prefsCities, initPrefsCities} = useContext(AppContext);
    return (
        <>
            <h1>User List Weather Page</h1>
            <button onClick={()=>{
                initPrefsCities()
            }}>Init cities</button>
            <ul>
                {prefsCities.map((item, i) => {
                    return <li key={i.toString()}>{item}</li>
                })}
            </ul>
        </>
    );
}

export default UserListWeatherPage;