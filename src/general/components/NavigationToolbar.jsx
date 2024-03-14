import React from 'react';
import style from './NavigationToolbar.module.css';
import {Link} from "react-router-dom";

function NavigationToolbar(props) {
    return (
        <ul className={style.nav_list}>
            {props.paths.map((path, index) => {
                return (
                    <li key={index} className={style.nav_item}>
                        <Link to={path.path}>{path.title}</Link>
                    </li>
                );
            })}
        </ul>


    );
}
export default NavigationToolbar;