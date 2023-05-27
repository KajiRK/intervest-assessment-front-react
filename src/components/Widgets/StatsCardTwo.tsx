import React from "react";
import UpArrowIcon from "components/Icons/UpArrow";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { getStockResults } from "data/store/stockSlice";
import { useAppSelector } from "hooks/useAppSelector";
import { StockResult } from "data/entities/stock";
import { convertUnix } from "configs/dateFormats";

type ChartSeries = {
  name: string;
  data: number[];
}[];

export default function StatsCardTwo() {
  const results = useAppSelector(getStockResults);
  const getDateRanges = results.map((result: StockResult) => result.t);
  const dateRanges = getDateRanges.map((timestamp: number) => {
    return convertUnix(timestamp, "Do");
  });
  const lowPrices = results.map((result: StockResult) => result.l);
  const totalLowPrice = React.useMemo(() => {
    return lowPrices.reduce((reducer: number, price: number) => {
      return reducer + price;
    }, 0);
  }, [lowPrices]);

  const options: ApexOptions = {
    colors: ["#F3C522"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: dateRanges,
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  const series: ChartSeries = [
    {
      name: "",
      data: lowPrices,
    },
  ];

  return (
    <div className="sm:flex rounded-md shadow-sm bg-white py-6 px-7.5 items-center justify-between lg:p-6 p-4 bg-white">
      <div className="w-full">
        <h3 className="text-base text-gray-600 font-semibold">Low</h3>
        <span className="lg:text-3xl font-semibold text-2xl mt-2">
          {totalLowPrice.toFixed(2)}
        </span>
        <div className="flex items-center text-base font-normal text-gray-500 mt-4">
          <span className="flex items-center mr-2 text-sm text-green-900">
            <UpArrowIcon />
            1.10%
          </span>
          Since yesterday
        </div>
      </div>
      <div className="w-full">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={100}
        />
      </div>
    </div>
  );
}
