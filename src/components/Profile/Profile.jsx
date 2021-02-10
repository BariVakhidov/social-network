import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo isFetching={props.isFetching} isOwner={props.isOwner} profile={props.profile} status={props.status} savePhoto={props.savePhoto} updateStatus={props.updateStatus} updateProfile={props.updateProfile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
