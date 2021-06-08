import React, { FC } from 'react';
import s from "./Users.module.css";
import Pagination from '../common/Pagination/Pagination';
import UserComp from './UserComp';
import { User } from '../../types/intefaces';
import Preloader from '../common/Preloader/Preloader';
import { UsersSearchForm } from './UsersSearchForm';
import { Filter } from '../../redux/users/types';

export interface UsersProps {
  isFetching: boolean;
  currentPage: number;
  totalUsers: number;
  onPageChange: (page: number) => void;
  onSearch: (filter: Filter) => void;
  pageSize: number;
  users: Array<User>;
  isMobile: boolean;
  followingProgress: Array<number>;
  unfollowUser: (userId: number) => void;
  followUser: (userId: number) => void;
}

const Users: FC<UsersProps> = ({
  currentPage,
  totalUsers,
  onPageChange,
  pageSize,
  users,
  isMobile,
  unfollowUser,
  followingProgress,
  followUser,
  isFetching,
  onSearch,
}) => {
  return (
    <div>
      <div className={s.usersHead}>
        <h1>Users</h1>
        <UsersSearchForm onSearch={onSearch}/>
      </div>
      <Pagination
        isMobile={isMobile}
        currentPage={currentPage}
        totalUsers={totalUsers}
        onPageChange={onPageChange}
        pageSize={pageSize}
      />
      <div>
        {isFetching ? (
          <Preloader />
        ) : (
          users.map((u) => (
            <div key={u.id} className={s.user}>
              <UserComp
                user={u}
                followingProgress={followingProgress}
                unfollowUser={unfollowUser}
                followUser={followUser}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;