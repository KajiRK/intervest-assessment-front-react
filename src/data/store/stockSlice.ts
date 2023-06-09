import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'data/store';
import axios from 'configs/axios';
import { StockResult, StockStateValues } from 'data/entities/stock';
import { env } from "configs/env";
import { currentDate, startOfWeek } from 'configs/dateFormats';

const initialState: StockStateValues = {
    stockResults: []
};

export const fetchStockResults = createAsyncThunk (
    "fetch/stockResults", 
    async () => {
        const response = await axios.get(`/v2/aggs/ticker/${env.ticker}/range/1/day/${startOfWeek()}/${currentDate()}?adjusted=true&sort=asc&apiKey=${env.apiKey}`);
        const stockResults: StockResult[] = response.data.results;
        return stockResults;
    }
);

export const stockSlice = createSlice({
    name: 'trade',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStockResults.pending, (state) => {
            console.log('Request is pending');
        });
        builder.addCase(fetchStockResults.fulfilled, (state, {payload}) => {
            return {...state, stockResults: payload}
        });
        builder.addCase(fetchStockResults.rejected, (state, {error}) => {
            console.log('Request is rejected');
        });
    }
});

export const getStockResults = (state: RootState) => state.trade.stockResults;

export default stockSlice.reducer;