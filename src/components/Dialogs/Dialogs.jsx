import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControl";
import {maxLength, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let dialogsItems = props.dialogsPage.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);
    let messages = props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

    const onSubmit = (formData) => {
        console.log(formData);
        props.sendMessage(formData.newMessage);
    }
    if (!props.isAuth) return <Redirect to='/login'/>
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
                    <NewMessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    );
};
const maxLength50 = maxLength(50);
const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"New message"} name={"newMessage"} component={TextArea}
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};
const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm)
export default Dialogs;
