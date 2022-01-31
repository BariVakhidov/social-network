import { instance } from "./axiosInstance";
import { GetUsersResponse } from "./response-types";

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
