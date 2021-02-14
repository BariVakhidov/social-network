import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import profilePhoto from "../../../assets/images/profile.jpg"

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={`/profile/${props.id}`}> <img alt="User" className={s.userImg}
                                 src={props.photo ? props.photo : profilePhoto}/></NavLink>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};
export default DialogsItem;