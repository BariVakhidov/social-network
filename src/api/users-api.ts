import { RequestUsersParams } from "../redux/users/types";
import { instance } from "./axiosInstance";
import { GetUsersResponse, FollowUnfollowRequest } from "./response-types";

export const usersAPI = {
    getUsers(params: RequestUsersParams): Promise<GetUsersResponse> {
      return instance
        .get<GetUsersResponse>(`users?page=${params.currentPage}&count=${params.pageSize}&term=${params.term}` + (params.friend === null ? '' : `&friend=${params.friend}`))
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