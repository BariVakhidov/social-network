import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsItems = props.dialogsPage.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);
    let messages = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>);


    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    };
    console.log(props.dialogsPage.newMessageText);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
                <div className={s.addDialog}>
                    <NavLink to='/friends'> <img alt="friend"
                                                 src="https://icons-for-free.com/iconfiles/png/512/add+character+increase+math+plus+sign+icon-1320184998988139546.png"/>
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div>
                    {messages}
                </div>
                <div className={s.sentMessage}>
                    <div>
                        <textarea value={props.dialogsPage.newMessageText}
                                  placeholder="Enter your message" onChange={onNewMessageChange}/>
                    </div>
                    <div className={s.button}>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
