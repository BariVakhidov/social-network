import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import {Profile, ProfileData} from "../../types/intefaces";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/redux-store";

interface ProfileProps {
    profile: Profile | null;
    blackTheme: boolean;
    isMobile: boolean;
    isOwner: boolean;
    status:string;
    savePhoto: (file:File) => void;
    updateStatus: (status:string)=>void;
    updateProfile: (profileData:ProfileData,userId:number)=>void;
}
const ProfileComponent:React.FC<ProfileProps> = ({profile,
                                            isOwner,
                                            isMobile,
                                            blackTheme,
                                            savePhoto,
                                            status,
                                            updateStatus,
                                            updateProfile}) => {
    const isFetching = useSelector((state:RootState)=> state.profilePage.isFetching);
    if (!profile || isFetching) {
        return <Preloader/>
    }
    return (
        <>
            <ProfileInfo
                blackTheme={blackTheme}
                isMobile={isMobile}
                isOwner={isOwner}
                profile={profile}
                status={status}
                savePhoto={savePhoto}
                updateStatus={updateStatus}
                updateProfile={updateProfile}/>
            {blackTheme && <hr/>}
            <MyPostsContainer />
        </>
    );
};

export default ProfileComponent;
