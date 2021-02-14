import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <ProfileInfo blackTheme={props.blackTheme} isMobile={props.isMobile} isFetching={props.isFetching} isOwner={props.isOwner} profile={props.profile} status={props.status} savePhoto={props.savePhoto} updateStatus={props.updateStatus} updateProfile={props.updateProfile}/>
            {props.blackTheme && <hr/>}
            <MyPostsContainer blackTheme={props.blackTheme}/>
        </>
    );
};

export default Profile;
