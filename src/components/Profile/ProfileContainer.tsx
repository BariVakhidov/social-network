import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {useParams} from "react-router";
import {RootState} from "../../redux/redux-store";
import {ProfileData} from "../../types/intefaces";
import {profileActions} from "../../redux/profile/action-creators";

type RouteParams = {
    userId?: string;
}

export type Props = {
    isMobile: boolean;
}
const ProfileContainer: React.FC<Props> = ({isMobile}) => {

    const {profile, status} = useSelector((state: RootState) => state.profilePage);
    const blackTheme = useSelector((state: RootState) => state.app.blackTheme);
    const mainUserId = useSelector((state: RootState) => state.auth.userId);
    const dispatch = useDispatch();

    const params = useParams<RouteParams>();

    const refreshProfile = useCallback(() => {
        if (!params.userId && mainUserId) dispatch(profileActions.getUserProfile(mainUserId));
        if (params.userId) dispatch(profileActions.getUserProfile(parseInt(params.userId)));
    }, [dispatch, mainUserId, params.userId]);

    const onUpdateProfile = (profileData: ProfileData, userId: number) => dispatch(profileActions.updateProfile({
        profileData,
        userId
    }));
    const onSavePhoto = (file: File) => dispatch(profileActions.savePhoto(file));
    const onUpdateStatus = (status: string) => dispatch(profileActions.updateStatus(status));

    useEffect(() => {
        refreshProfile();
    }, [params.userId, mainUserId, refreshProfile]);

    useEffect(() => {
        return () => {
            dispatch(profileActions.setUserProfile(null));
        }
    }, [dispatch])

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
