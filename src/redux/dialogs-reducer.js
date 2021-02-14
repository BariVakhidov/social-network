import {friendsAPI} from "../api/api";

const SEND_MESSAGE = "social-network/dialogs/SEND_MESSAGE";
const SET_CHAT_FRIENDS = "social-network/dialogs/SET_CHAT_FRIENDS";
const SET_CURRENT_CHAT_FRIENDS_PAGE = "social-network/dialogs/SET_CURRENT_CHAT_FRIENDS_PAGE";
export const sendMessage = (newMessageText, id) => ({type: SEND_MESSAGE, newMessageText,id});
export const setChatFriends = (chatFriends) => ({type: SET_CHAT_FRIENDS, chatFriends});
export const setCurrentChatFriendsPage = (currentPage) => ({type: SET_CURRENT_CHAT_FRIENDS_PAGE, currentPage});

let initialState = {
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

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 2,
                message: action.newMessageText
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        case SET_CHAT_FRIENDS:
            return {
                ...state,
                chatFriends: [...state.chatFriends, ...action.chatFriends]
            }
        case SET_CURRENT_CHAT_FRIENDS_PAGE:
            return {
                ...state,
                currentChatFriendsPage: action.currentPage
            }
        default:
            return state;
    }
};
export default dialogReducer;

export const getChatFriends = (currentPage, pageSize=3) => async (dispatch) => {
    dispatch(setCurrentChatFriendsPage(currentPage));
    let data = await friendsAPI.getFriends(currentPage, pageSize);
    dispatch(setChatFriends(data.items));
};