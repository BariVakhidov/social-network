import { Reducer } from "redux";
import { DialogsReducer } from "../../types/intefaces";
import { DialogsReducerActionTypes } from "./action-types";
import { Actions } from "./constants";

let initialState:DialogsReducer = {
    messagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I am fine!"},
        {id: 4, message: "Nice"},
        {id: 5, message: "Nice to meet you"},
        {id: 6, message: "Mee too"},
        {id: 7, message: "Yo"},
    ],
    chatFriends: [],
    currentChatFriendsPage: 1
};

const dialogReducer:Reducer<DialogsReducer, DialogsReducerActionTypes> = (state = initialState, action:DialogsReducerActionTypes):DialogsReducer => {
    switch (action.type) {
        case Actions.SEND_MESSAGE:
            let newMessage = {
                id: 2,
                message: action.newMessageText
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        case Actions.SET_CHAT_FRIENDS:
            return {
                ...state,
                chatFriends: [...state.chatFriends, ...action.chatFriends]
            }
        case Actions.SET_CURRENT_CHAT_FRIENDS_PAGE:
            return {
                ...state,
                currentChatFriendsPage: action.currentPage
            }
        default:
            return state;
    }
};
export default dialogReducer;
