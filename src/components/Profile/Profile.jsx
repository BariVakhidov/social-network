import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     postMessage={props.postMessage}
                     newPostText={props.profilePage.newPostText}
                     addLike={props.addLike}
                     updateProfileMessage={props.updatePostMessage}
            />
        </div>
    );
};

export default Profile;
