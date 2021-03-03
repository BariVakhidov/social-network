import React, {useEffect} from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControl";
import {maxLength, required} from "../../utils/validators/validators";
import cn from "classnames"
import StyledButton from "../common/StyledButton";
import plus from "../../assets/images/plus.png"

const Dialogs = ({chatFriends, getChatFriends, currentChatFriendsPage, setCurrentChatFriendsPage, ...props}) => {

    let currentPage = chatFriends.length / 3;
    useEffect(() => {
        if (currentPage !== currentChatFriendsPage)
            getChatFriends(currentChatFriendsPage);
    }, [getChatFriends, currentChatFriendsPage, currentPage])
    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessage);
    }
        if (!props.isAuth) return <Redirect to='/login'/>
    return (
        <div className={cn((!props.isMobile ? s.dialogs : s.dialogsM), {[s.dialogsBlack]: props.blackTheme})}>
            <div>
                <div
                    className={cn((!props.isMobile ? s.dialogsItems : s.dialogsItemsM), {[s.dialogsItemsBlack]: props.blackTheme})}>{chatFriends.map(f =>
                    <DialogsItem photo={f.photos.small} name={f.name} id={f.id} key={f.id}/>)}</div>
                <div className={s.addDialog}>
                    <img onClick={() => {
                        setCurrentChatFriendsPage(currentChatFriendsPage + 1)
                    }} alt="friend"
                         src={plus}/>
                </div>
            </div>
            <div className={cn(s.messages, {[s.messagesBlack]: props.blackTheme})}>
                <div>
                    {props.dialogsPage.messagesData.map(m => <Message currentUser={props.currentUser}
                                                                      message={m.message} id={m.id} key={m.id}/>)}
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
                <StyledButton>Send</StyledButton>
            </div>
        </form>
    );
};
const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm)
export default Dialogs;
