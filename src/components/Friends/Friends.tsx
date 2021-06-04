import React, {FC, useEffect} from 'react';
import Preloader from '../common/Preloader/Preloader';
import Users from '../Users/Users';
import {useDispatch} from 'react-redux';
import {
    setPage,
} from '../../redux/users/action-creators';
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
        dispatch(setPage());
        dispatch(getFriends(currentPage, pageSize));
    }, [dispatch]);


    const onPageChange = (pageNumber: number) => {
        dispatch(getFriends(pageNumber, pageSize));
    };

    const onUnfollowUser = (userId: number) => dispatch(unfollowUser(userId));

    const onFollowUser = (userId: number) => dispatch(followUser(userId))

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users users={friends} totalUsers={totalFriends} pageSize={pageSize} onPageChange={onPageChange}
                   isMobile={isMobile} currentPage={friendsCurrentPage} followingProgress={followingProgress}
                   unfollowUser={onUnfollowUser} followUser={onFollowUser}/>
        </>
    );
}


export default FriendsContainer;
