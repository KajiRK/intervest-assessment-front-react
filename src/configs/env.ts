export interface IEnv {
    apiKey?: string;
}

export const env: IEnv = {
    apiKey: process.env.REACT_APP_API_KEY
}