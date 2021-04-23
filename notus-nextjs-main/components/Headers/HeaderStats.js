import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Starter"
                  statTitle="$50"
                  statArrow=""
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="over a year"
                  statIconName="fas fa-percent"
                  statIconColor="bg-emerald-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="pro"
                  statTitle="$100"
                  statArrow=""
                  statPercent="4"
                  statPercentColor="text-emerald-500"
                  statDescripiron="over a year"
                  statIconName="fas fa-percent"
                  statIconColor="bg-emerald-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Pro+"
                  statTitle="$250"
                  statArrow=""
                  statPercent="1.10"
                  statPercentColor="text-emerald-500"
                  statDescripiron="over a year"
                  statIconName="fas fa-percent"
                  statIconColor="bg-emerald-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Premium"
                  statTitle="$500"
                  statArrow=""
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="over a year"
                  statIconName="fas fa-percent"
                  statIconColor="bg-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
