import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Users from './Users';
import { setPage } from '../../redux/users/action-creators';
import {
  requestUsers,
  unfollowUser,
  followUser,
} from '../../redux/users/thunk';
import Preloader from '../common/Preloader/Preloader';
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsers,
  getUsers,
} from '../../redux/users-selectors';
import { RootState } from '../../redux/redux-store';

interface UsersContainerProps {
  isMobile:boolean;
}
export const UsersContainer:React.FC<UsersContainerProps> = ({isMobile}) => {

  const users = useSelector((state:RootState) => getUsers(state));
  const totalUsers = useSelector((state:RootState) => getTotalUsers(state));
  const pageSize = useSelector((state:RootState) => getPageSize(state));
  const currentPage = useSelector((state:RootState) => getCurrentPage(state));
  const isFetching = useSelector((state:RootState) => getIsFetching(state));
  const followingProgress = useSelector((state:RootState) => getFollowingProgress(state));
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(setPage());
    dispatch(requestUsers(currentPage,pageSize));
  }, [dispatch, currentPage, pageSize]);

  const onPageChange = useCallback((pageNumber:number) => {
    dispatch(requestUsers(pageNumber,pageSize));
  },[pageSize, dispatch]);

  const onUnfollow = (userId:number) => {
    dispatch(unfollowUser(userId));
  }

  const onFollow = (userId:number) => {
    dispatch(followUser(userId));
  }

  return (
      <>
        {isFetching ? <Preloader /> : null}
        <Users isMobile={isMobile}
               users={users}
               onPageChange={onPageChange}
               currentPage={currentPage}
               totalUsers={totalUsers}
               pageSize={pageSize}
               followingProgress={followingProgress}
               unfollowUser={onUnfollow}
               followUser={onFollow}/>
      </>
  )
}
