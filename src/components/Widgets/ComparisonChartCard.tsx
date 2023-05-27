import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { currentDate, startOfWeek } from "configs/dateFormats";

export interface IComparisonChartCardProps {
  dateRanges: string[];
  highPrices: number[];
  lowPrices: number[];
  openPrices: number[];
}

type ChartSeries = {
  name: string;
  color: string;
  data: number[];
}[];

export default function ComparisonChartCard({dateRanges, highPrices, lowPrices, openPrices} : IComparisonChartCardProps) {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent']
		},
    grid: {
      borderColor: "#cacacf",
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
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
      name: "High Price",
      color: "#694bdb",
      data: highPrices,
    },
    {
      name: "Low Price",
      color: "#2BEBC8",
      data: lowPrices,
    },
    {
      name: "Open Price",
      color: "#FF7777",
      data: openPrices,
    },
  ];

  return (
    <div className="rounded-md shadow-sm bg-white py-6 px-7.5 mt-6 lg:mt-0 lg:p-4">
      <div className="flex items-center justify-between pl-4 pt-2">
        <div className="flex-shrink-0 ">
          <span className="lg:text-lg font-semibold text-gray-900 text-md">
            Prices Analytics
          </span>
          <h3 className="text-sm font-light text-gray-500">{`${startOfWeek(
            "MMMM Do"
          )} - ${currentDate("MMMM Do")}`}</h3>
        </div>
      </div>
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={335}
        />
      </div>
    </div>
  );
}
