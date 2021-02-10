import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileInfoForm from "./ProfileInfoForm";

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
        <div>
            <div className={s.back}></div>
            <div className={s.profileData}>
                <Photo profile={props.profile} isOwner={props.isOwner} onMainPhotoSelected={onMainPhotoSelected}/>
                <ProfileData
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    updateProfile={props.updateProfile}/>
            </div>
        </div>
    );
};
const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <span>{contactTitle}</span>
            <a href={contactValue}>{contactValue}</a>
        </div>
    )
};
const Photo = ({profile, isOwner, onMainPhotoSelected}) => {
    return (
        <div className={s.photoContainer}>
            <img
                className={s.avatar}
                alt="ava"
                src={profile.photos.large ? profile.photos.large : "https://upload.wikimedia.org/wikipedia/ru/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg"}
            />
            <div className={s.cont}>{isOwner &&
            <input type="file" className={s.inputFile} onChange={onMainPhotoSelected}/>}
            </div>

        </div>
    )
};
const ProfileData = ({profile, isOwner, status, updateStatus, updateProfile}) => {
    let [editMode, setEditMode] = useState(false);
    let [contactsVisible, setContactsVisible] = useState(false)
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
    }
    return (
        <>
            {!editMode ?
                <div className={s.profileDataComp}>
                    <div className={s.aboutYourself}>
                        <ProfileStatusWithHooks isOwner={isOwner} status={status}
                                                updateStatus={updateStatus}/>
                        <div className={s.fullName}>{profile.fullName}</div>
                        <div>{profile.aboutMe}</div>
                        <div>{profile.lookingForAJob ? "lookingForAJob" : "-"}</div>
                        <div>{profile.lookingForAJobDescription}</div>
                        <div style={{display: "inline-block"}}>
                            {contactsVisible ? <button onClick={() => {
                                    setContactsVisible(false)
                                }}>Close contacts</button> :
                                <button onClick={() => {
                                    setContactsVisible(true)
                                }}>Show contacts</button>}
                            {isOwner && <button onClick={activateEditMode}>Edit</button>}
                        </div>
                    </div>
                    {contactsVisible ? <div className={s.contacts}>
                        <div>{Object.keys(profile.contacts).map((key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                        }))}
                        </div>
                    </div> : null}
                </div>
                :
                <ProfileInfoForm updateProfile={updateProfile} deactivateEditMode={deactivateEditMode}
                                 contacts={profile.contacts} profile={profile}/>
            }
        </>
    )
}
export default ProfileInfo;