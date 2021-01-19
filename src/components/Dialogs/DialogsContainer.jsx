import {
    sendMessage,
    updateNewMessageText
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}*/

const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText
})(Dialogs);

export default DialogsContainer;
