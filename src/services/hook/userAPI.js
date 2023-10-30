import { axiosServiceInstance } from '../client';

export const userAPI = {
  login: async ({ payload }) => {
    const response = await axiosServiceInstance.post('/user/login', payload);

    return response;
  },
};
