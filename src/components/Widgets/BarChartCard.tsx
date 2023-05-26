import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { getStockResults } from "data/store/stockSlice";
import { useAppSelector } from "hooks/useAppSelector";
import { StockResult } from "data/entities/stock";
import { convertUnix, currentDate, startOfWeek } from "configs/dateFormats";

type ChartSeries = {
  name: string;
  data: number[];
}[];

export default function BarChatCard() {
  const results = useAppSelector(getStockResults);
  const getDateRanges = results.map((result: StockResult) => result.t);
  const dateRanges = getDateRanges.map((timestamp: number) => {
    return convertUnix(timestamp, "Do");
  });
  const closePrices = results.map((result: StockResult) => result.c);

  const options: ApexOptions = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    colors: ['#694bdb'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#694bdb"],
    },
    xaxis: {
      categories: dateRanges,
    },
    yaxis: {
      title: {
        text: "Close Prices in $",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val;
        },
      },
    },
  };

  const series: ChartSeries = [
    {
      name: "",
      data: closePrices,
    },
  ];

  return (
    <div className="rounded-md shadow-sm bg-white py-6 px-7.5 mt-6 lg:mt-0 lg:p-4">
      <div className="flex items-center justify-between pl-4 pt-2">
        <div className="flex-shrink-0">
          <span className="text-lg font-boldtext-gray-900">Current week AAPL Ticker's Close Price</span>
          <h3 className="text-sm font-light text-gray-500 dark:text-gray-400">{`${startOfWeek('MMMM Do')} - ${currentDate('MMMM Do')}`}</h3>
        </div>
      </div>
      <div className="pl-4">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={200}
        />
      </div>
      
    </div>
  );
}
