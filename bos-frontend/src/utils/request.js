import router from '@/router';
import { useAuthStore } from '@/stores/useAuthStore.js';
import axios from 'axios';

const service_bos = axios.create({
    baseURL: 'http://192.168.100.30:8000/',
    timeout: 86500000, // Request timeout
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    }
});

service_bos.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();
        let token = authStore.get_token;
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token; // Set JWT token
        }
        return config;
    },
    (error) => {
        console.log(error); // for debug
        Promise.reject(error);
    }
);
service_bos.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log(error);
        switch (error.response.status) {
            case 200:
                console.log('OK');
                break;
            case 401:
                console.log('Unauthorized');
                router.push('/auth/login');
                break;
            case 403:
                console.log('No Access');
                router.push('forbidden');
                break;
            case 404:
                router.push('not-found');
                console.log('Not found');
                break;
            case 422:
                console.log('Validation');
                router.push('validation-error');
                return Promise.reject(error);
            case 419:
                console.log('Session expired');
                break;
            case 500:
                console.log('Internal Server Error');
                router.push('internal-error');
                break;
            case 501:
                router.push('not-implemented');
                console.log('Not Data');
                break;
            case 502:
                router.push('service-overload');
                console.log('Server Overload');
                break;
            case 503:
                router.push('service-unavailable');
                console.log('Server Maintenance');
                break;
            default:
                return Promise.reject(error);
        }
    }
);

export default service_bos;
