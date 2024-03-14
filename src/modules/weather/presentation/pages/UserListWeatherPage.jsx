import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../../../general/context/appContext";
import {useHistory} from "react-router-dom";

function UserListWeatherPage() {
    const history = useHistory()
    const {prefsCities, initPrefsCities} = useContext(AppContext);

    useEffect(() => {
        initPrefsCities()
    }, []);

    return (
        <>
            <h1>User List Weather Page</h1>
            <ul>
                {prefsCities.map((item, i) => {
                    return <li key={i.toString()} onClick={()=>{
                        history.push('/home/'+item)
                    }}>{item}</li>
                })}
            </ul>
        </>
    );
}

export default UserListWeatherPage;