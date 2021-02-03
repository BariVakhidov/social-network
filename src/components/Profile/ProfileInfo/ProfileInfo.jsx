import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.back}></div>
            <div className={s.name}>
                <div>
                    <img
                        className={s.avatar}
                        alt="ava"
                            src={props.profile.photos.large ? props.profile.photos.large: "https://upload.wikimedia.org/wikipedia/ru/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg"}
                    />
                </div>
                <div className={s.aboutYourself}>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    {props.profile.aboutMe}
                    <h3>{props.profile.fullName}</h3>
                    <p>{props.profile.lookingForAJob ? "lookingForAJob" : "-"}</p>
                    <p>{props.profile.lookingForAJobDescription}</p>
                    <div>{props.profile.contacts.facebook}
                    </div>
                </div>
                <div className={s.contacts}>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;