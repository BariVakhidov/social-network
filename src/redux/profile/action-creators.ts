import {Profile, Photos, ProfileData} from "../../types/intefaces";
import {ProfileActions} from "./constants";
import {InferActionsType} from "../redux-store";
import {AddPostPayload} from "./types";

export const profileActions = {
    addPostAC: (payload: AddPostPayload) => ({type: ProfileActions.ADD_POST, payload} as const),
    deletePost: (payload: number) => ({type: ProfileActions.DELETE_POST, payload} as const),
    addLikeAC: (payload: number) => ({type: ProfileActions.ADD_LIKE, payload} as const),
    setUserProfile: (payload: Profile | null) => ({type: ProfileActions.SET_PROFILE, payload} as const),
    getUserProfile: (payload: number) => ({type: ProfileActions.GET_PROFILE, payload} as const),
    updateProfile: (payload: { profileData: ProfileData, userId: number }) => ({
        type: ProfileActions.UPDATE_PROFILE,
        payload
    } as const),
    setStatus: (payload: string) => ({type: ProfileActions.SET_STATUS, payload} as const),
    getStatus: (payload: number) => ({type: ProfileActions.GET_STATUS, payload} as const),
    updateStatus: (payload: string) => ({type: ProfileActions.UPDATE_STATUS, payload} as const),
    setFetching: (payload: boolean) => ({type: ProfileActions.SET_FETCHING, payload} as const),
    savePhotoSuccess: (payload: Photos) => ({type: ProfileActions.SAVE_PHOTO_SUCCESS, payload} as const),
    savePhoto: (payload: File) => ({type: ProfileActions.SAVE_PHOTO, payload} as const),
    setShowingUserId: (payload: number) => ({type: ProfileActions.SET_SHOWING_USER_ID, payload} as const),
}

export type ProfileActionsType = InferActionsType<typeof profileActions>
