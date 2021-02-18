import React from 'react';
import s from "./Users.module.css"
import Pagination from "../common/Pagination/Pagination";
import UserComp from "./UserComp";
import {User} from "../../types/intefaces";

interface UsersProps {
    currentPage: number;
    totalUsers:number;
    onPageChange: (page: number)=>void;
    pageSize:number;
    users: Array<User>;
    isMobile:boolean;
    followingProgress: Array<number>;
    unfollowUser: (userId : number) => void;
    followUser: (userId: number) => void;
}

const Users:React.FC<UsersProps> = ({currentPage, totalUsers, onPageChange, pageSize, users, ...props}) => {
    return (
        <div>
            <Pagination isMobile={props.isMobile}
                        currentPage={currentPage}
                        totalUsers={totalUsers}
                        onPageChange={onPageChange}
                        pageSize={pageSize}/>
            <div>
                {users.map(u =><div key={u.id} className={s.user}>
                    <UserComp user={u}
                              followingProgress={props.followingProgress}
                              unfollowUser={props.unfollowUser}
                              followUser={props.followUser}/>
                </div>)}
            </div>
        </div>
    )
}

export default Users;