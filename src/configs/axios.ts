import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.polygon.io/v2/aggs/ticker', 
    headers: {
        Accept: 'text/json',
        'Content-Type': 'application/json'
    }
});

export default instance;