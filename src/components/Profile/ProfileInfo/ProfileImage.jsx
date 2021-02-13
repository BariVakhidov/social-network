import s from "./ProfileInfo.module.css";
import React from "react";
import defaultPhoto from '../../../assets/images/profile.jpg'

const ProfileImage = ({profile, isOwner, onMainPhotoSelected}) => {
    return (
        <div className={s.photoContainer}>
            <img
                className={s.avatar}
                alt="profile"
                src={profile.photos.large ? profile.photos.large : defaultPhoto}
            />
            <div className={s.cont}>{isOwner &&
            <input type="file" className={s.inputFile} onChange={onMainPhotoSelected}/>}
            </div>

        </div>
    )
};
export default ProfileImage;