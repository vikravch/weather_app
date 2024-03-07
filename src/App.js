import React from "react";
import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import HomeWeatherPage from "./modules/weather/presentation/pages/HomeWeatherPage";
import UserListWeatherPage from "./modules/weather/presentation/pages/UserListWeatherPage";
import NavigationToolbar from "./general/components/NavigationToolbar";
import {AppContext} from "./general/context/appContext";
import {getPrefsCities, saveCityToPref} from "./modules/weather/data/localStoreManager";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'Home',
            prefsCities: []
        }
    }

    onNavigatePath = (path) => {
        this.setState({
            ...this.state,
            currentPage: path
        });
    }
    getPrefsCitiesUseCase(){
        return getPrefsCities()
    }
    initPrefsCities(){
        const prefsCities = this.getPrefsCitiesUseCase();
        this.setState({
            ...this.state,
            prefsCities: prefsCities
        })
    }
    componentDidMount() {
        this.initPrefsCities()
    }
    saveCityUseCase(city){
        console.log('clicked with city - '+city);
        saveCityToPref(city);
    }
    saveCityToPrefs = (city)=>{
        this.saveCityUseCase(city);
        if(this.state.prefsCities.includes(city) === false){
            this.setState({
                ...this.state,
                prefsCities: [...this.state.prefsCities, city]
            });
        }
    }

    render() {
        let Page = null;
        const {currentPage} = this.state;
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
            <AppContext.Provider
                value={{
                    onNavigate: this.onNavigatePath,
                    currentPage: this.state.currentPage,
                    prefsCities: this.state.prefsCities,
                    saveCityToPrefs: this.saveCityToPrefs
                }}
            >
                <div className="App">
                    <NavigationToolbar
                        paths={['Home', 'User List']}
                    />
                    { Page }


                    <>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi assumenda commodi corporis, eveniet harum in magnam necessitatibus nesciunt nostrum numquam perspiciatis quaerat quidem quos rerum unde veritatis voluptatibus.</p>
                    </>
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;

