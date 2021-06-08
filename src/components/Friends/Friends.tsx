import React, {FC, useEffect} from 'react';
import Users from '../Users/Users';
import {useDispatch} from 'react-redux';
import {usersActions} from '../../redux/users/action-creators';
import {getFriends, unfollowUser, followUser} from '../../redux/users/thunk';

import {useAppSelector} from "../../redux/redux-store";

interface Props {
    isMobile: boolean;
}

const FriendsContainer: FC<Props> = ({isMobile}) => {

    const {
        friends,
        totalFriends,
        pageSize,
        friendsCurrentPage,
        isFetching,
        followingProgress,
        currentPage,
    } = useAppSelector(state => state.usersPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.setPage());
        dispatch(getFriends(currentPage, pageSize));
    }, [dispatch, usersActions, getFriends]);


    const onPageChange = (pageNumber: number) => {
        dispatch(getFriends(pageNumber, pageSize));
    };

    const onUnfollowUser = (userId: number) => dispatch(unfollowUser(userId));

    const onFollowUser = (userId: number) => dispatch(followUser(userId))

    return (
        <div>

            {/* <Users  isFetching={isFetching} users={friends} totalUsers={totalFriends} pageSize={pageSize}
               onPageChange={onPageChange}
               isMobile={isMobile} currentPage={friendsCurrentPage} followingProgress={followingProgress}
               unfollowUser={onUnfollowUser} followUser={onFollowUser}/> */}
        </div>
               
               );
}


export default FriendsContainer;
