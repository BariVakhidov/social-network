import React from "react";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let store = props.store;


    let sendMessage = () => {
        store.dispatch(sendMessageActionCreator());
    };

    let updateNewMessageText = (text) => {
        store.dispatch(updateNewMessageTextActionCreator(text));
    };
    console.log(state.newMessageText);
    return (<Dialogs dialogsPage={state}
                     sendMessage={sendMessage}
                     updateNewMessageText={updateNewMessageText}/>);
};

export default DialogsContainer;
