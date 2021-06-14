import { RootState } from "./redux-store";

export const getUsers = (state: RootState) => {
  return state.usersPage.users;
};

export const getTotalUsers = (state: RootState) => {
    return state.usersPage.totalUsers;
};
export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize;
};
export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching;
};
export const getFollowingProgress = (state: RootState) => {
    return state.usersPage.followingProgress;
};
export const getFriendsCount = (state: RootState) => {
    return state.usersPage.totalFriends;
};