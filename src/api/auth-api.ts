import { AxiosResponse } from "axios";
import { LoginData } from "../types/intefaces";
import { instance } from "./axiosInstance";
import { AuthMe, LoginResponse } from "./response-types";

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