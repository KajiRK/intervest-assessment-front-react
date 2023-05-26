import UpArrowIcon from "components/Icons/UpArrow";

export interface IStatsCardOneProps {}

export default function StatsCardOne(props: IStatsCardOneProps) {
  return (
    <div className="rounded-md shadow-sm bg-white py-6 px-7.5 items-center justify-between lg:p-6 p-4 bg-white">
      <div className="w-full">
        <h3 className="text-base text-gray-600 font-semibold">High</h3>
        <span className="lg:text-3xl font-semibold text-2xl mt-2">0</span>
        <div className="flex items-center text-base font-normal text-gray-500 mt-4">
          <span className="flex items-center mr-2 text-sm text-green-900">
            <UpArrowIcon />
            1.10%
          </span>
          Since yesterday
        </div>
      </div>
    </div>
  );
}
