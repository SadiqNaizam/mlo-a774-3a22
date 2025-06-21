import React from 'react';
import BarChart from '../components/Dashboard/BarChart';
import DonutChartCard from '../components/Dashboard/DonutChartCard';
import LineChart from '../components/Dashboard/LineChart';
import StatCardGrid from '../components/Dashboard/StatCardGrid';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * The main dashboard overview page.
 * This component composes the entire user-facing dashboard by assembling various 
 * organism-level components within the main application layout.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Section for key performance indicator cards */}
        <section>
          <StatCardGrid />
        </section>

        {/* Section for primary charts: Bar chart and Donut chart */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <BarChart />
          </div>
          <div className="lg:col-span-1">
            <DonutChartCard />
          </div>
        </section>

        {/* Section for the secondary line chart with calendar */}
        <section>
          <LineChart />
        </section>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
