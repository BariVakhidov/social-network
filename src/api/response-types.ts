import { User } from '../types/intefaces';

export interface GetUsersResponse {
  items: Array<User>;
  totalCount: number;
  error: string;
}
export interface FollowUnfollowRequest {
  resultCode: number;
  messages: Array<string>;
  data: object;
}
export interface AuthMe {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: Array<string>;
}
export interface LoginResponse {
  resultCode:number;
  messages: Array<string>;
  data: {
    userId?:number;
  };
}
export interface CaptchaResponse {
  url:string;
}
export interface UpdateStatus {
  resultCode: number;
  messages: Array<string>;
  data: object;
}
export interface UpdateProfile {
  resultCode: number;
  messages: Array<string>;
  data: object;
}
export interface UpdatePhoto {
  resultCode: number;
  messages: Array<string>;
  data: {
   photos: {
    small:string;
    large:string;
   }
  };
}