import * as React from "react";
import AppLayout from "layout/AppLayout";
import WelcomeCard from "components/Widgets/WelcomeCard";
import BarChatCard from "components/Widgets/BarChartCard";
import StatsCardOne from "components/Widgets/StatsCardOne";
import StatsCardTwo from "components/Widgets/StatsCardTwo";
import StatsCardThree from "components/Widgets/StatsCardThree";
import ComparisonChartCard from "components/Widgets/ComparisonChartCard";
import PieChartCard from "components/Widgets/PieChartCard";

export default function Home() {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-0 lg:gap-5 lg:grid-cols-3">
        <div className="col-span-2">
          <WelcomeCard />
        </div>
        <div>
          {/* last month AAPL Ticker close price bar chart */}
          <BarChatCard /> 
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-6">
        <StatsCardOne /> {/* total last month high prices for AAPL Ticker*/}
        <StatsCardTwo /> {/* total last month low prices for AAPL Ticker*/}
        <StatsCardThree /> {/* total last month close prices for AAPL Ticker*/}
      </div>

      <div className="grid grid-cols-1 gap-0 lg:gap-5 lg:grid-cols-3 mt-6">
        <div className="col-span-2">
          <ComparisonChartCard /> {/* total last month high, low prices for AAPL Ticker*/}
        </div>
        <div>
          <PieChartCard /> {/* total last month high, low, close prices for AAPL Ticker*/}
        </div>
      </div>
    </AppLayout>
  );
}
