const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

let initialState = {
    dialogsData: [
        {id: 1, name: "Roman"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Demin"},
        {id: 4, name: "Ustin"},
        {id: 5, name: "Lera"},
        {id: 6, name: "Valeria"},
        {id: 7, name: "Lerchick"},
    ],

    messagesData: [
        {id: 1, message: "Hi!"},
        {id: 1, message: "How are you?"},
        {id: 3, message: "Nigga"},
        {id: 4, message: "Urot"},
        {id: 1, message: "Kus'"},
        {id: 6, message: "Sup"},
        {id: 1, message: "Yo"},
    ],
    newMessageText: ""
};

const dialogReducer = (state = initialState, action) => {
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