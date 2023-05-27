import UpArrowIcon from "components/Icons/UpArrow";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export interface IStatsCardThreeProps {
  dateRanges: string[];
  openPrices: number[];
  totalOpenPrice: number;
}

type ChartSeries = {
  name: string;
  data: number[];
}[];

export default function StatsCardThree({
  dateRanges,
  openPrices,
  totalOpenPrice,
}: IStatsCardThreeProps) {
  const options: ApexOptions = {
    colors: ["#06AA8D"],
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
      data: openPrices,
    },
  ];

  return (
    <div className="sm:flex rounded-md shadow-sm bg-white py-6 px-7.5 items-center justify-between lg:p-6 p-4 bg-white">
      <div className="w-full">
        <h3 className="text-base text-gray-600 font-semibold">Open</h3>
        <span className="lg:text-3xl font-semibold text-2xl mt-2">
          {totalOpenPrice.toFixed(2)}
        </span>
        <div className="flex items-center text-base font-normal text-gray-500 mt-4">
          <span className="flex items-center mr-2 text-sm text-green-900">
            <UpArrowIcon />
            0.00%
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
