import { instance } from "./axiosInstance";
import { CaptchaResponse } from "./response-types";

export const securityAPI = {
    getCaptchaURL(): Promise<CaptchaResponse> {
      return instance
        .get<CaptchaResponse>('security/get-captcha-url')
        .then((response) => response.data);
    },
  };