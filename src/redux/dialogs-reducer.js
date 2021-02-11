const SEND_MESSAGE = "social-network/dialogs/SEND-MESSAGE";
export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

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
        {id: 2, message: "How are you?"},
        {id: 3, message: "Nigga"},
        {id: 4, message: "Urot"},
        {id: 5, message: "Kus'"},
        {id: 6, message: "Sup"},
        {id: 7, message: "Yo"},
    ],
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: Math.floor(Math.random() * 10),
                message: action.newMessageText
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;
    }
};
export default dialogReducer;