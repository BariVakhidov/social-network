import React from 'react';
import s from "./Users.module.css"
import userPhoto from '../../assets/images/profile.jpg'
import {NavLink} from "react-router-dom";
import StyledButton from "../common/StyledButton";

interface User {
    id: number;
    name: string;
    photos: {
        small: string | null;
    };
    followed: boolean;
    status: null | string;
}

interface Props {
    user : User;
    followingProgress: Array<number>;
    unfollowUser: (userId : number) => void;
    followUser: (userId: number) => void;
}

const UserComp: React.FC<Props> = ({user, followingProgress, unfollowUser, followUser}) => {
    return (
        <div className={s.user}>
            <div className={s.firstUserInfo}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt="avatar"/>
                    </NavLink>
                </div>
                <div className={s.followButton}>
                    {user.followed ? <StyledButton disabled={followingProgress.some(id => id === user.id)}
                                                   onClick={() => {
                                                       unfollowUser(user.id);
                                                   }}>
                            Unfollow</StyledButton>
                        : <StyledButton disabled={followingProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            followUser(user.id);
                                        }}>
                            Follow</StyledButton>}
                </div>
            </div>
            <div className={s.userInfo}>
                <div className={s.userName}>{user.name}</div>
                <div className={s.status}>{user.status}</div>
            </div>
        </div>)
}

export default UserComp;