import { profileAPI } from "../../api/api";
import { setCurrentUserPhotos } from "../auth-reducer";
import {setShowingUserId, setUserProfile, setStatus, savePhotoSuccess, setFetching} from "./action-creators";
import { AppThunk } from "../redux-store";
import { ProfileData } from "../../types/intefaces";

export const getProfilePage = (userId:number): AppThunk => async (dispatch) => {
  dispatch(setShowingUserId(userId));
  dispatch(setFetching());
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
  let response2 = await profileAPI.getStatus(userId);
  dispatch(setStatus(response2.data));
  dispatch(setFetching());
};
export const getStatus = (userId:number): AppThunk => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status:string): AppThunk => async (dispatch) => {
  try {
      let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
      }
  }
  catch (error) {
      alert(error.message);
  }
};

export const updateProfile = (profileData:ProfileData,userId:number):AppThunk=> async (dispatch) => {
  let response = await profileAPI.updateProfile(profileData);
  if (response.data.resultCode === 0) {
      let response = await profileAPI.getProfile(userId);
      dispatch(setUserProfile(response.data));
  }
  else return response.data.messages;
}
export const savePhoto = (file:File): AppThunk => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
      dispatch(setCurrentUserPhotos(response.data.data.photos));
  }
}