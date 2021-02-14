import React from 'react';
import s from "./Message.module.css";
import {NavLink} from "react-router-dom";
import profileImage from "../../../assets/images/profile.jpg"

const Message = (props) => {
    if (props.id % 2 === 0) {
        return (
            <div className={s.myMessage}>
                <div>
                    <img className={s.userImg} src={props.currentUser.photos.large || profileImage} alt=""/>
                </div>
                <div className={s.text}>{props.message}</div>
            </div>
        );
    }
    return (
        <div className={s.message}>
            <div className={s.userImg}><NavLink to="/friends/id"><img src={profileImage} alt="Friend"/></NavLink></div>
            <div className={s.text}>{props.message}</div>
        </div>
    );
}
export default Message;