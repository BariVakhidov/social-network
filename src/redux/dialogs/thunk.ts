import { friendsAPI } from "../../api/api";
import { setCurrentChatFriendsPage, setChatFriends } from "./action-creators";
import { AppThunk } from "../redux-store";

export const getChatFriends = (currentPage:number, pageSize=3): AppThunk => async (dispatch) => {
    dispatch(setCurrentChatFriendsPage(currentPage));
    let data = await friendsAPI.getFriends(currentPage, pageSize);
    dispatch(setChatFriends(data.items));
};