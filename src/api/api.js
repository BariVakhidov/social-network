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
    loginMe() {
        return(instance.get('auth/me').then(response => response.data));
    },
    auth(loginInformation) {
        return(instance.post('auth/login', loginInformation).then(response => response.data));
    }
};

export const profileAPI = {
    getProfile(id) {
        return(instance.get(`profile/${id}`));
    },
    getStatus(userId) {
        return (instance.get(`profile/status/${userId}`));
    },
    updateStatus(status) {
        return (instance.put(`profile/status`, {status: status}));
    },
};

export const friendsAPI = {
    displayFriends() {
        return (instance.get(`users?page=1&count=+3&friend=true`).then(response => response.data));
    }
}