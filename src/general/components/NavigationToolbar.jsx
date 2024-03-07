import React, {Component} from 'react';
import style from './NavigationToolbar.module.css';
import {AppContext} from "../context/appContext";

class NavigationToolbar extends Component {
    render() {
        return (
            <AppContext.Consumer >{
                (value) => {
                    return (
                        <ul className={style.nav_list}>
                            {this.props.paths.map((path, index) => {
                                return (
                                    <li key={index} className={style.nav_item}
                                        onClick={() =>
                                            value.onNavigate(path)}>
                                        {path}
                                    </li>
                                );
                            })}
                        </ul>
                    )
                }
            }

            </AppContext.Consumer>
        );
    }
}

export default NavigationToolbar;