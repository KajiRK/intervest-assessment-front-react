import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.polygon.io', 
    headers: {
        Accept: 'text/json',
        'Content-Type': 'application/json'
    }
});

export default instance;