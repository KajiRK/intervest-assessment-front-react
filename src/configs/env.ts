export interface IEnv {
    apiKey?: string;
    ticker?: string;
}

export const env: IEnv = {
    apiKey: process.env.REACT_APP_API_KEY,
    ticker: process.env.REACT_APP_TICKER
}