import React from 'react';
import s from "./Message.module.css";
import {NavLink} from "react-router-dom";

const Message = (props) => {
    if (props.id % 2 === 0){
        return (
            <div className={s.myMessage}>
                <div>
                    <div className={s.userImg}>

                    </div>
                </div>
                <div className={s.text}>{props.message}</div>
            </div>
        );
    }
    return (
        <div className={s.message}>
            <div className={s.userImg}><NavLink to="/friends/id">Friend</NavLink></div>
            <div className={s.text}>{props.message}</div>
        </div>
    );
}
export default Message;