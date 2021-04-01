import { AxiosResponse } from 'axios';
import { LoginData, Profile, ProfileData } from '../types/intefaces';
import { instance } from './axiosInstance';
import {
  AuthMe,
  CaptchaResponse,
  FollowUnfollowRequest,
  GetUsersResponse,
  LoginResponse,
  UpdatePhoto,
  UpdateProfile,
  UpdateStatus,
} from './response-types';

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number): Promise<GetUsersResponse> {
    return instance
      .get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser(userId: number): Promise<FollowUnfollowRequest> {
    return instance
      .post<FollowUnfollowRequest>(`follow/${userId}`)
      .then((response) => response.data);
  },

  unFollowUser(userId: number): Promise<FollowUnfollowRequest> {
    return instance
      .delete<FollowUnfollowRequest>(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  authMe(): Promise<AxiosResponse<AuthMe>> {
    return instance.get<AuthMe>('auth/me');
  },
  login(loginData: LoginData): Promise<LoginResponse> {
    return instance
      .post<LoginResponse>('auth/login', loginData)
      .then((response) => response.data);
  },
  logout(): Promise<LoginResponse> {
    return instance
      .delete<LoginResponse>('auth/login')
      .then((response) => response.data);
  },
};
export const securityAPI = {
  getCaptchaURL(): Promise<CaptchaResponse> {
    return instance
      .get<CaptchaResponse>('security/get-captcha-url')
      .then((response) => response.data);
  },
};
export const profileAPI = {
  getProfile(id: number):Promise<AxiosResponse<Profile>> {
    return instance.get<Profile>(`profile/${id}`);
  },
  getStatus(userId: number):Promise<AxiosResponse<string>> {
    return instance.get<string>(`profile/status/${userId}`);
  },
  updateStatus(status: string):Promise<AxiosResponse<UpdateStatus>> {
    return instance.put<UpdateStatus>(`profile/status`, { status: status });
  },
  updateProfile(profileData:ProfileData):Promise<AxiosResponse<UpdateProfile>> {
    return instance.put<UpdateProfile>(`profile`, profileData);
  },

  savePhoto(photoFile:File):Promise<AxiosResponse<UpdatePhoto>> {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put<UpdatePhoto>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const friendsAPI = {
  displayFriends(): Promise<GetUsersResponse> {
    return instance
      .get<GetUsersResponse>(`users?page=1&count=+2&friend=true`)
      .then((response) => response.data);
  },
  getFriends(currentPage: number, pageSize: number): Promise<GetUsersResponse> {
    return instance
      .get<GetUsersResponse>(
        `users?page=${currentPage}&count=${pageSize}&friend=true`
      )
      .then((response) => response.data);
  },
};
