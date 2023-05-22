export interface StockResult {
    v: number;
    vw: number;
    o: number;
    c: number;
    h: number;
    l: number;
    t: number;
    n: number;
}

export interface StockStateValues {
    stockResults: StockResult[];
}