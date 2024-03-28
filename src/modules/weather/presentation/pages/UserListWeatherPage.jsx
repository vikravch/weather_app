import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../../../general/context/appContext";
import {useHistory} from "react-router-dom";
import storage from "../../../../general/redux/storeConfiguration";
import {initPrefsCities} from "../redux/weatherActions";

function UserListWeatherPage() {
    const history = useHistory()
    //const {prefsCities, initPrefsCities} = useContext(AppContext);
    const [rand, setRand] = useState(0);
    useEffect(()=>{
        const unsubscribe = storage.subscribe(()=>{
            setRand(Math.random());
        });
        return ()=>{
            unsubscribe()
        }
    }, []);

    useEffect(() => {
        storage.dispatch(initPrefsCities());
    }, []);

    return (
        <>
            <h1>User List Weather Page</h1>
            <ul>
                {storage.getState().prefsCities.map((item, i) => {
                    return <li key={i.toString()} onClick={()=>{
                        history.push('/home/'+item)
                    }}>{item}</li>
                })}
            </ul>
        </>
    );
}

export default UserListWeatherPage;