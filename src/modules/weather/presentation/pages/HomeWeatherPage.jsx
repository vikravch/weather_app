import React, {Component, useContext, useState} from 'react';
import Weather from "../../domain/entities/Weather";
import BackIcon from "../components/icons/BackIcon";
import style from "./HomeWeatherPage.module.css"
import LikeIcon from "../components/icons/LikeIcon";
import {AppContext} from "../../../../general/context/appContext";
import {getWeatherUseCase} from "../../domain/useCases";

function HomeWeatherPage(props) {
    const {saveCityToPrefs} = useContext(AppContext);
    const [weather, setWeather] =
        useState(new Weather().object);
    const [cityName, setCityName] =
        useState('')

    const pageJSX = (weather.city === '') ? <>
            <input onChange={(event)=>{
                setCityName(event.target.value)
            }} type='text'/>
            <button onClick={()=>{
                getWeatherUseCase(cityName)
                    .then((data)=>{
                    setWeather(data)
                });
            }}>Get weather</button>
        </> :
        <>
            <div className={style.home_page_title}>
                <BackIcon size="24" onClick={() => {
                    setWeather(new Weather().object);
                    setCityName('');
                }}/>
                <span>City: {weather.city}</span>
                <LikeIcon size="24" isLiked={true} onClick={() => {
                    saveCityToPrefs(cityName);
                }}/>
            </div>
            <h3>Temperature: {weather.temperature}</h3>
        </>

    return pageJSX;
}

export default HomeWeatherPage;