import { env } from "configs/env";
import WelcomeCardVector from "assets/images/home/welcome-card-vector.png";

export default function WelcomeCard () {
  return (
    <div className="rounded-md py-8 px-7.5 bg-teal-400">
      <div className="flex flex-col items-start lg:flex-row">
        <div className="pl-12 pr-12 lg:w-2/3 lg:mt-8 lg:ml-4">
          <h3 className="mb-4 font-semibold">Welcome to {env.ticker} Ticker's Dashboard!</h3>
          <p className="text-gray-600 font-light text-sm leading-7 lg:pr-12">The dasboard shows the analytics around {env.ticker} Ticker's prices. 
          Stock related data fetched from <a rel="noreferrer" className="font-semibold" href="https://polygon.io/" target="_blank">polygon.io </a> 
          and displayed the data between current week day range.</p>
        </div>
        <div className="pt-4 pl-14 mb-4 mr-12 lg:pl-6 lg:pr-12 order-first lg:order-last">
          <img src={WelcomeCardVector} alt="Logo" className="w-80" />
        </div>
      </div>
    </div>
  );
}
