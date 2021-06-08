import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Users from './Users';
import {usersActions} from '../../redux/users/action-creators';
import {
    requestUsers,
    unfollowUser,
    followUser,
} from '../../redux/users/thunk';
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsers,
} from '../../redux/users-selectors';
import {RootState} from '../../redux/redux-store';
import { Filter } from '../../redux/users/types';

interface UsersContainerProps {
    isMobile: boolean;
}

export const UsersContainer: React.FC<UsersContainerProps> = ({isMobile}) => {

    const users = useSelector((state: RootState) => getUsers(state));
    const filter = useSelector((state: RootState) => state.usersPage.filter);
    const totalUsers = useSelector((state: RootState) => getTotalUsers(state));
    const pageSize = useSelector((state: RootState) => getPageSize(state));
    const currentPage = useSelector((state: RootState) => getCurrentPage(state));
    const isFetching = useSelector((state: RootState) => getIsFetching(state));
    const followingProgress = useSelector((state: RootState) => getFollowingProgress(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.setPage());
        dispatch(requestUsers({currentPage, pageSize, term: filter.term, friend: filter.friend}));
    }, []);

    const onPageChange = useCallback((pageNumber: number) => {
        dispatch(requestUsers({currentPage: pageNumber, pageSize, friend: filter.friend, term: filter.term}));
    }, [pageSize, dispatch, filter]);


    const onSearch = useCallback((filter: Filter) => {
        dispatch(requestUsers({currentPage: 1, pageSize, term: filter.term, friend: filter.friend}));
    }, [dispatch, pageSize ]);

    const onUnfollow = (userId: number) => {
        dispatch(unfollowUser(userId));
    }

    const onFollow = (userId: number) => {
        dispatch(followUser(userId));
    }

    return (
        <Users
            isFetching={isFetching}
            isMobile={isMobile}
            users={users}
            onPageChange={onPageChange}
            currentPage={currentPage}
            totalUsers={totalUsers}
            pageSize={pageSize}
            followingProgress={followingProgress}
            unfollowUser={onUnfollow}
            followUser={onFollow}
            onSearch={onSearch}/>
    )
    }
