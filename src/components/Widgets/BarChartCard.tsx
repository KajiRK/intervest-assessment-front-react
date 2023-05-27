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
    chart: {
      toolbar: {
        show: false
      }
    },
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
      curve: "smooth"
    },
    grid: {
			show: false
		},
		legend: {
			show: false
		},
    xaxis: {
      floating: false,
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
      categories: dateRanges,
    },
    yaxis: {
			show: false
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
        <div className="flex-shrink-0 ">
          <span className="lg:text-lg font-semibold text-gray-900 text-md">This week AAPL Ticker's Close Price</span>
          <h3 className="text-sm font-light text-gray-500">{`${startOfWeek('MMMM Do')} - ${currentDate('MMMM Do')}`}</h3>
        </div>
      </div>
      <div>
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
