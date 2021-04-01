import { User } from "../../types/intefaces";
import { Actions } from "./constants";

interface SendMessage {
    type:typeof Actions.SEND_MESSAGE;
    newMessageText: string;
    id: number;
}
interface SetChatFriends {
    type:typeof Actions.SET_CHAT_FRIENDS;
    chatFriends: Array<User>;
}

interface SetCurrentChatFriendsPage {
    type:typeof Actions.SET_CURRENT_CHAT_FRIENDS_PAGE;
    currentPage: number;
}
export type DialogsReducerActionTypes = SendMessage | SetChatFriends | SetCurrentChatFriendsPage;