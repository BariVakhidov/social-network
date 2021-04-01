import { Profile, Photos } from "../../types/intefaces";
import { Actions } from "./constants";

interface AddPost {
  type: typeof Actions.ADD_POST;
  newText: string;
  photo: string;
}
interface DeletePost {
  type: typeof Actions.DELETE_POST;
  postId: number;
}
interface AddLike {
  type: typeof Actions.ADD_LIKE;
  postId: number;
}
interface SetUserProfile {
  type: typeof Actions.SET_PROFILE;
  profile: Profile;
}
interface SetStatus {
  type: typeof Actions.SET_STATUS;
  status: string;
}
interface SavePhotoSuccess {
  type: typeof Actions.SAVE_PHOTO_SUCCESS;
  photos: Photos;
}
interface SetShowingUserId {
  type: typeof Actions.SET_SHOWING_USER_ID;
  showingUserId: number;
}
export type ProfileReducerActionType =
  | AddPost
  | AddLike
  | DeletePost
  | SavePhotoSuccess
  | SetUserProfile
  | SetStatus
  | SetShowingUserId;
