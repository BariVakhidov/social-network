import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsItems = props.state.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messages = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();
    let sentMessage = () => {
        let textMessage = newMessage.current.value;
        props.addMessage(textMessage);
        newMessage.current.value = "";
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div>
                <div className={s.messages}>
                    {messages}
                </div>
                <div className={s.sentMessage}>
                    <div>
                        <textarea ref={newMessage}>New message</textarea>
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
