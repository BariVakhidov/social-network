import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import cn from 'classnames'
import ProfileImage from "./ProfileImage";
import ProfileData from "./ProfileData";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <>
            <div className={cn((props.blackTheme ? s.backBlack : s.back), {[s.backM]: props.isMobile})}></div>
            <div className={cn(s.profileData, {[s.profileDataM]: props.isMobile})}>
                <ProfileImage profile={props.profile} isOwner={props.isOwner}
                              onMainPhotoSelected={onMainPhotoSelected}/>
                <ProfileData
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    updateProfile={props.updateProfile}
                    isMobile={props.isMobile}/>
            </div>
        </>
    );
};

export default ProfileInfo;