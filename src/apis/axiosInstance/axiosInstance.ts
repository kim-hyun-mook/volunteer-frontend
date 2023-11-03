import { reissueToken } from '@apis/auth/reissueToken';
import { getCookie } from '@utils/cookies/cookies';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';


const createInstance = (contentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_SERVER_API,
    timeout: 3000,
    headers: {
      'Content-Type': contentType,
    },
  };
  const instance = axios.create(config);
  instance.interceptors.request.use((config) => {
    const token = '안녕';
    if (token) {
      config.headers = config.headers || {};
      (config.headers as AxiosRequestHeaders).Authorization = `${token}`;
    }
    return config;
  });

  instance.interceptors.response.use((response) => response,
    async (error) => {
      const { status } = error.response
      const refreshToken = getCookie('refreshToken')
      if (status === 400) {
        const response = await reissueToken(refreshToken)
        return response
      } else {
        window.location.href ='/login'
      }
    },
  );

  return instance;
};

export const axiosInstance = createInstance('application/json');
export const axiosImgInstance = createInstance('multipart/form-data');






const mainCommuAxiosInstance = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'http://13.209.253.193/maple',
});

export const getCommunityData = async () => {
  try {
    const response = await mainCommuAxiosInstance.get('/community');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCommunityDetail = async (communityId: number) => {
  try {
    const response = await mainCommuAxiosInstance.get(`/community/${communityId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};