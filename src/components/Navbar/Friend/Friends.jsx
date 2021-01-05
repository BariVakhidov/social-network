import React from "react";
import {NavLink} from "react-router-dom";
import s from './Friends.module.css';

const Friends = (props) => {
    let path = "/friends" + props.id;
    return (
        <div className={s.friend}>
            <NavLink to={path}>
                <div className={s.container}>
                <img src={props.image}/>
                <div className={s.name}>
                    {props.name}
                </div>
                </div>
            </NavLink>
        </div>
    );
};
export default Friends;