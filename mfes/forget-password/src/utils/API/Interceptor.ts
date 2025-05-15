import axios from 'axios';
// import { tenantId } from 'apps/learner-web-app/app.config';

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token');
      if (token && config.url && !config.url.endsWith('user/v1/auth/login')) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      const academicYearId = localStorage.getItem('academicYearId');
      if (academicYearId) {
        config.headers.academicyearid = academicYearId;
      }
    }
    // config.headers.tenantid = '4783a636-1191-487a-8b09-55eca51b5036';
    config.headers.tenantId = 'ef99949b-7f3a-4a5f-806a-e67e683e38f3';
    // config.headers.tenantid = tenantId;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.data?.responseCode === 401 &&
      !originalRequest._retry
    ) {
      if (error?.response?.request?.responseURL.includes('/auth/refresh')) {
        window.location.href = '/logout';
      } else {
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
