import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import cn from "classnames";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import StyledButton from "../../common/StyledButton";
import Contact from "./Contact";
import ProfileInfoForm from "./ProfileInfoForm";
import job from "../../../assets/images/job.png"
import name from "../../../assets/images/name.png"

const ProfileData = ({profile, isOwner, status, updateStatus, updateProfile, isMobile}) => {
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
                    <div className={cn(s.aboutYourself, {[s.aboutYourselfM]: isMobile})}>
                        <ProfileStatusWithHooks isOwner={isOwner} status={status}
                                                updateStatus={updateStatus}/>
                        <div className={s.fullName}><img src={name} alt="name" height={25}/><span>{profile.fullName}</span></div>
                        <div style={{marginBottom: "10px"}}>{profile.aboutMe}</div>
                        <div style={{marginBottom: "10px"}}>{profile.lookingForAJob ?
                            <img src={job} alt="job" width="30"/> : "-"}</div>
                        <div style={{marginBottom: "10px"}}>{profile.lookingForAJobDescription}</div>
                        <div style={{display: "inline-block", marginBottom: "10px"}}>
                            {contactsVisible ? <StyledButton onClick={() => {
                                    setContactsVisible(false)
                                }}>Close contacts</StyledButton> :
                                <StyledButton onClick={() => {
                                    setContactsVisible(true)
                                }}>Show contacts</StyledButton>}
                            {isOwner && <StyledButton onClick={activateEditMode}>Edit</StyledButton>}
                        </div>
                    </div>
                    {contactsVisible ? <div className={cn(s.contacts, {[s.contactsM]: isMobile})}>
                        <div className={s.contactsCont}>{Object.keys(profile.contacts).map((key => {
                            return <Contact isMobile={isMobile} icon={key} key={key}
                                            contactValue={profile.contacts[key]}/>
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
export default ProfileData;