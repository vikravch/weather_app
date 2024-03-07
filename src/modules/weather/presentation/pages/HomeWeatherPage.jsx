import React, {Component} from 'react';
import {getWeatherByCity} from "../../data/api";
import Weather from "../../entities/Weather";
import BackIcon from "../components/icons/BackIcon";
import style from "./HomeWeatherPage.module.css"
import LikeIcon from "../components/icons/LikeIcon";
import {AppContext} from "../../../../general/context/appContext";
class HomeWeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: new Weather().object,
            cityName: ''
        }
    }
    /*componentDidMount() {
        getWeatherByCity('Haifa').then((data)=>{
            this.setState({
                weather: data
            });
        });
    }*/
    getWeatherUseCase(city){
        getWeatherByCity(city).then((data)=>{
            this.setState({
                ...this.state,
                weather: data
            });
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('New state = '+JSON.stringify(this.state));
    }
    render() {
        const pageJSX = (this.state.weather.city === '') ? <>
            <input onChange={(event)=>{
                this.setState({
                    ...this.state,
                    cityName: event.target.value
                });
            }} type='text'/>
            <button onClick={()=>{
                this.getWeatherUseCase(this.state.cityName);
            }}>Get weather</button>
        </> :
        <AppContext.Consumer>
            {(value)=> {
                return (<>
                    <div className={style.home_page_title}>
                        <BackIcon size="24" onClick={() => {
                            this.setState({
                                weather: new Weather().object,
                                cityName: ''
                            })
                        }}/>
                        <span>City: {this.state.weather.city}</span>
                        <LikeIcon size="24" isLiked={true} onClick={() => {
                            value.saveCityToPrefs(this.state.cityName);
                        }}/>
                    </div>
                    <h3>Temperature: {this.state.weather.temperature}</h3>
                </>)
            }}
        </AppContext.Consumer>


        return pageJSX;
    }
}

export default HomeWeatherPage;