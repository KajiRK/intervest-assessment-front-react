import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { currentDate, startOfWeek } from "configs/dateFormats";

export interface IPieChartCardProps {
  totalHighPrice: number;
  totalLowPrice: number;
  totalOpenPrice: number;
  totalClosePrice: number;
}

export default function PieChartCard({
  totalHighPrice,
  totalLowPrice,
  totalOpenPrice,
  totalClosePrice,
}: IPieChartCardProps) {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["High", "Low", "Open", "Close"],
    colors: ["#10B981", "#375E83", "#259AE6", "#FDBA8C"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 430,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };

  const series = [
    totalHighPrice,
    totalLowPrice,
    totalOpenPrice,
    totalClosePrice,
  ];

  return (
    <div className="rounded-md shadow-sm bg-white py-6 px-7.5 mt-6 lg:mt-0 lg:p-4">
      <div className="flex items-center justify-between pl-4 pt-2">
        <div className="flex-shrink-0 ">
          <span className="lg:text-lg font-semibold text-gray-900 text-md">
            Prices By Type
          </span>
          <h3 className="text-sm font-light text-gray-500">{`${startOfWeek(
            "MMMM Do"
          )} - ${currentDate("MMMM Do")}`}</h3>
        </div>
      </div>
      <div className="mt-4">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={355}
        />
      </div>
    </div>
  );
}
