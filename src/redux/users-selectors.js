export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers;
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress;
};
export const getFriendsCount = (state) => {
    return state.navbar.friendsCount;
};