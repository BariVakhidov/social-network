import React from 'react';
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.userImg}></div>
            <div className={s.text}>{props.message}</div>
        </div>
    );
}
export default Message;