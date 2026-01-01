import axios from 'axios'; import * as SecureStore from 'expo-secure-store';

const apiClient = axios.create({ baseURL: 'https://api.your-saas-platform.com/v1', timeout: 10000, });

/**

High-Integrity Auth Interceptor

Manages JWT tokens for SaaS authentication. */ apiClient.interceptors.request.use(async (config) => { const token = await SecureStore.getItemAsync('user_token'); if (token) { config.headers.Authorization = Bearer ${token}; } return config; });

export default apiClient;