import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Profile from './Profile';
import {
  getProfilePage,
  savePhoto,
  updateProfile,
  updateStatus,
} from '../../redux/profile/thunk';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {useParams} from "react-router";
import {RootState} from "../../redux/redux-store";
import {ProfileData} from "../../types/intefaces";

type RouteParams = {
  userId?:string;
}

export type Props = {
  isMobile:boolean;
}
const ProfileContainer:React.FC<Props> = ({isMobile}) => {

  const {profile, status} = useSelector((state:RootState) => state.profilePage);
  const blackTheme = useSelector((state:RootState) => state.app.blackTheme);
  const mainUserId = useSelector((state:RootState) => state.auth.userId);
  const dispatch = useDispatch();

  const params = useParams<RouteParams>();

  const refreshProfile = useCallback(() => {
    if (!params.userId && mainUserId)  dispatch(getProfilePage(mainUserId));
    if (params.userId) dispatch(getProfilePage(parseInt(params.userId)));
  }, [dispatch, mainUserId, params.userId])
  const onUpdateProfile = (profileData:ProfileData,userId:number) => dispatch(updateProfile(profileData,userId));
  const onSavePhoto = (file:File) => dispatch(savePhoto(file));
  const onUpdateStatus = (status:string) => dispatch(updateStatus(status));

  useEffect(()=> {
    refreshProfile();
  },[params.userId, mainUserId, refreshProfile]);

  return <Profile
          isOwner={!params.userId}
          isMobile={isMobile}
          blackTheme={blackTheme}
          profile={profile}
          status={status}
          updateProfile={onUpdateProfile}
          savePhoto={onSavePhoto}
          updateStatus={onUpdateStatus}
      />
}
export default withAuthRedirect(ProfileContainer);