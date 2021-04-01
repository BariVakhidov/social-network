import { profileAPI } from "../../api/api";
import { setCurrentUserPhotos } from "../auth-reducer";
import { setShowingUserId, setUserProfile, setStatus, savePhotoSuccess } from "./action-creators";
import { AppThunk } from "../redux-store";

export const getProfilePage = (userId:number): AppThunk => async (dispatch) => {
  dispatch(setShowingUserId(userId));
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
  let response2 = await profileAPI.getStatus(userId);
  dispatch(setStatus(response2.data));
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

export const updateProfile = (profileData:object,userId:string):AppThunk=> async (dispatch) => {
  let response = await profileAPI.updateProfile(profileData);
  if (response.data.resultCode === 0) {
      let response = await profileAPI.getProfile(userId);
      dispatch(setUserProfile(response.data));
  }
  else return response.data.messages;
}
export const savePhoto = (file:any): AppThunk => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
      dispatch(setCurrentUserPhotos(response.data.data.photos));
  }
}