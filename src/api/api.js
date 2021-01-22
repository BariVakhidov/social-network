import {instance} from "./axiosInstance";


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data));
    },
    followUser(userId) {
        return (instance.post(`follow/${userId}`).then(response => response.data));
    },

    unFollowUser(userId) {
        return (instance.delete(`follow/${userId}`).then(response =>response.data));
    }
};

export const loginAPI = {
    login() {
        return(instance.get('auth/me').then(response => response.data));
    }
};

export const profileAPI = {
    getProfile(id) {
        return(instance.get(`profile/${id}`));
    }
};

export const friendsAPI = {
    displayFriends() {
        return (instance.get(`users?page=1&count=3&friend=true`).then(response => response.data));
    }
}