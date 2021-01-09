import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageText} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsItems = state.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messages = state.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageText(text));
    };
    console.log(state.newMessageText);
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
                        <textarea ref={newMessage} value={state.newMessageText}
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
