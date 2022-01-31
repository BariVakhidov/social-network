import {Profile, ProfileData} from "../types/intefaces";
import {instance} from "./axiosInstance";
import {UpdateStatus, UpdateProfile, UpdatePhoto} from "./response-types";

export const profileAPI = {
    getProfile(id: number): Promise<Profile> {
        return instance.get<Profile>(`profile/${id}`).then(response => response.data);
    },
    getStatus(userId: number): Promise<string> {
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status: string): Promise<UpdateStatus> {
        return instance.put<UpdateStatus>(`profile/status`, {status: status}).then(response => response.data);
    },
    updateProfile(profileData: ProfileData): Promise<UpdateProfile> {
        return instance.put<UpdateProfile>(`profile`, profileData).then(response => response.data);
    },

    savePhoto(photoFile: File): Promise<UpdatePhoto> {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<UpdatePhoto>(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(response => response.data);
    },
};
