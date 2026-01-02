import axis from 'axios';

const API_BASE_URL = (window as any).API_BASE_URL;


const apiService = axis.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiService.interceptors.response.use((config) =>{
    const crsfToken = document.querySelector('meta[name="csrf-token"]');

    if (crsfToken) {
        const token = crsfToken.getAttribute('content');

        if (token) {
            config.headers['X-CSRF-TOKEN'] = token;
        }
    }
    return config
})
export default apiService;