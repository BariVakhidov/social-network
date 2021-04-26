import React, {useEffect} from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageComponent from "./Message/Message";
import {Redirect} from "react-router";
import cn from "classnames"
import plus from "../../assets/images/plus.png"
import {DialogsForm} from "./DialogsForm";
import {DialogsProps} from "../../types/intefaces";

export const Dialogs:React.FC<DialogsProps> = ({chatFriends,
                     getChatFriends,
                     currentChatFriendsPage,
                     setCurrentChatFriendsPage,
                     messagesData,
                     blackTheme,
                     isAuth,
                     isMobile,
                     currentUser}) => {

    let currentPage = chatFriends.length / 3

    useEffect(() => {
        if (currentPage !== currentChatFriendsPage)
            getChatFriends(currentChatFriendsPage);
    }, [getChatFriends, currentChatFriendsPage, currentPage]);

        if (!isAuth) return <Redirect to='/login'/>
    return (
        <div className={cn((!isMobile ? s.dialogs : s.dialogsM), {[s.dialogsBlack]: blackTheme})}>
            <div>
                <div
                    className={cn((!isMobile ? s.dialogsItems : s.dialogsItemsM), {[s.dialogsItemsBlack]: blackTheme})}>{chatFriends.map(f =>
                    <DialogsItem photo={f.photos.small} name={f.name} id={f.id} key={f.id}/>)}</div>
                <div className={s.addDialog}>
                    <img onClick={() => {
                        setCurrentChatFriendsPage(currentChatFriendsPage + 1)
                    }} alt="friend"
                         src={plus}/>
                </div>
            </div>
            <div className={cn(s.messages, {[s.messagesBlack]:blackTheme})}>
                <div className={s.messagesCont}>
                    {messagesData.map(m => <MessageComponent currentUser={currentUser}
                                                                      message={m.message} id={m.id} key={m.id}/>)}
                </div>
                <DialogsForm messagesData = {messagesData}/>
            </div>
        </div>
    );
};
