import { User } from "../../types/intefaces";
import { DialogsReducerActionTypes } from "./action-types";
import { Actions } from "./constants";

export const sendMessage = (newMessageText:string, id:number):DialogsReducerActionTypes => ({type: Actions.SEND_MESSAGE, newMessageText,id});
export const setChatFriends = (chatFriends:Array<User>):DialogsReducerActionTypes => ({type: Actions.SET_CHAT_FRIENDS, chatFriends});
export const setCurrentChatFriendsPage = (currentPage:number):DialogsReducerActionTypes => ({type: Actions.SET_CURRENT_CHAT_FRIENDS_PAGE, currentPage});
