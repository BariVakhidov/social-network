import { Profile, Photos } from "../../types/intefaces";
import { ProfileReducerActionType } from "./action-types";
import { Actions } from "./constants";

export const addPostAC = (newText:string, photo:string):ProfileReducerActionType => ({type: Actions.ADD_POST, newText, photo});
export const deletePost = (postId:number):ProfileReducerActionType => ({type: Actions.DELETE_POST, postId});
export const addLikeAC = (postId:number):ProfileReducerActionType => ({type: Actions.ADD_LIKE, postId});
export const setUserProfile = (profile:Profile):ProfileReducerActionType => ({type: Actions.SET_PROFILE, profile});
export const setStatus = (status:string):ProfileReducerActionType => ({type: Actions.SET_STATUS, status});
export const savePhotoSuccess = (photos:Photos):ProfileReducerActionType => ({type: Actions.SAVE_PHOTO_SUCCESS, photos});
export const setShowingUserId = (showingUserId:number):ProfileReducerActionType => ({type: Actions.SET_SHOWING_USER_ID, showingUserId});
