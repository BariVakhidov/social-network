const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: Math.floor(Math.random() * 10),
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = "";
            return state;
        default:
            return state;
    }
};
export default dialogReducer;