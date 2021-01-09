import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";
import {addMessageActionCreator, updateNewMessageText} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsItems = props.dialogsPage.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messages = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let sentMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageText(text));
    };
    console.log(props.dialogsPage.newMessageText);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
                <div className={s.addDialog}>
                    <NavLink to='/friends'> <img onClick={sentMessage} alt="friend" src="https://icons-for-free.com/iconfiles/png/512/add+character+increase+math+plus+sign+icon-1320184998988139546.png"/></NavLink>
                </div>
            </div>
            <div>
                <div className={s.messages}>
                    {messages}
                </div>
                <div className={s.sentMessage}>
                    <div>
                        <textarea ref={newMessage} value={props.dialogsPage.newMessageText} onChange={onChange} />
                    </div>
                    <div className={s.button}>
                        <button onClick={sentMessage}>Sent</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
