import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {initPrefsCities} from "../redux/weatherActions";
import {useDispatch, useSelector} from "react-redux";

function UserListWeatherPage() {
    const dispatch = useDispatch();
    const prefsCities = useSelector(
        (state)=>state.prefsCities
    );
    const history = useHistory();

    useEffect(() => {
        dispatch(initPrefsCities());
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