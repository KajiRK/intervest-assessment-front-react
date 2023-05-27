import * as React from "react";
import AppLayout from "layout/AppLayout";
import WelcomeCard from "components/Widgets/WelcomeCard";
import BarChatCard from "components/Widgets/BarChartCard";
import StatsCardOne from "components/Widgets/StatsCardOne";
import StatsCardTwo from "components/Widgets/StatsCardTwo";
import StatsCardThree from "components/Widgets/StatsCardThree";
import ComparisonChartCard from "components/Widgets/ComparisonChartCard";
import PieChartCard from "components/Widgets/PieChartCard";
import { useAppDispatch } from "hooks/useAppDispatch";
import { fetchStockResults, getStockResults } from "data/store/stockSlice";
import { useAppSelector } from "hooks/useAppSelector";
import { StockResult } from "data/entities/stock";
import { convertUnix } from "configs/dateFormats";

export default function Home() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchStockResults());
  }, [dispatch]);

  // get stock results from state
  const results = useAppSelector(getStockResults);

  // convert unix timestamp to readable date and picked dates range
  const getDateRanges = results.map((result: StockResult) => result.t);
  const dateRanges = getDateRanges.map((timestamp: number) => {
    return convertUnix(timestamp, "Do");
  });

  // filter high prices and calculate total of them
  const highPrices = results.map((result: StockResult) => result.h);
  const totalHighPrice = React.useMemo(() => {
    return highPrices.reduce((reducer: number, price: number) => {
      return parseFloat((reducer + price).toFixed(2));
    }, 0);
  }, [highPrices]);

  // filter low prices and calculate total of them
  const lowPrices = results.map((result: StockResult) => result.l);
  const totalLowPrice = React.useMemo(() => {
    return lowPrices.reduce((reducer: number, price: number) => {
      return parseFloat((reducer + price).toFixed(2));
    }, 0);
  }, [lowPrices]);

  // filter open prices and calculate total of them
  const openPrices = results.map((result: StockResult) => result.o);
  const totalOpenPrice = React.useMemo(() => {
    return openPrices.reduce((reducer: number, price: number) => {
      return parseFloat((reducer + price).toFixed(2));
    }, 0);
  }, [openPrices]);

  // filter close prices and calculate total of them
  const closePrices = results.map((result: StockResult) => result.c);
  const totalClosePrice = React.useMemo(() => {
    return closePrices.reduce((reducer: number, price: number) => {
      return parseFloat((reducer + price).toFixed(2));
    }, 0);
  }, [closePrices]);

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-0 lg:gap-5 lg:grid-cols-3">
        <div className="col-span-2">
          <WelcomeCard />
        </div>
        <div>
          {/* this week close price only comparision bar chart */}
          <BarChatCard dateRanges={dateRanges} closePrices={highPrices} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-6">
        {/* this week total high prices for AAPL Ticker*/}
        <StatsCardOne
          dateRanges={dateRanges}
          highPrices={highPrices}
          totalHighPrice={totalHighPrice}
        />
        {/* this week total low prices for AAPL Ticker*/}
        <StatsCardTwo
          dateRanges={dateRanges}
          lowPrices={lowPrices}
          totalLowPrice={totalLowPrice}
        />
        {/* this week total open prices for AAPL Ticker*/}
        <StatsCardThree
          dateRanges={dateRanges}
          openPrices={openPrices}
          totalOpenPrice={totalOpenPrice}
        />
      </div>

      <div className="grid grid-cols-1 gap-0 lg:gap-5 lg:grid-cols-3 mt-6">
        <div className="col-span-2">
          {/* this week total high, low & open prices comparision for AAPL Ticker*/}
          <ComparisonChartCard
            dateRanges={dateRanges}
            highPrices={highPrices}
            lowPrices={lowPrices}
            openPrices={openPrices}
          />
        </div>
        <div>
          {/* this week total high, low, close & open prices comparision for AAPL Ticker*/}
          <PieChartCard
            totalHighPrice={totalHighPrice}
            totalLowPrice={totalLowPrice}
            totalOpenPrice={totalOpenPrice}
            totalClosePrice={totalClosePrice}
          />
        </div>
      </div>
    </AppLayout>
  );
}
