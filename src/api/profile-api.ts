import { AxiosResponse } from "axios";
import { Profile, ProfileData } from "../types/intefaces";
import { instance } from "./axiosInstance";
import { UpdateStatus, UpdateProfile, UpdatePhoto } from "./response-types";

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