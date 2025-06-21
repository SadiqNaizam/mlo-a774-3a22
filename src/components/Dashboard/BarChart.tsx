import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const barChartData = [
  { name: 'JAN', '2019': 20, '2020': 38 },
  { name: 'FEB', '2019': 28, '2020': 44 },
  { name: 'MAR', '2019': 14, '2020': 32 },
  { name: 'APR', '2019': 24, '2020': 8 },
  { name: 'MAY', '2019': 34, '2020': 22 },
  { name: 'JUNE', '2019': 24, '2020': 48 },
  { name: 'JULY', '2019': 34, '2020': 14 },
  { name: 'AUG', '2019': 22, '2020': 24 },
  { name: 'SEP', '2019': 28, '2020': 38 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primary text-primary-foreground p-2 rounded-md shadow-lg">
        <p className="text-sm">{`${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const BarChart: React.FC = () => {
  return (
    <Card className="shadow-md border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">Result</CardTitle>
        <div className='flex items-center space-x-4'>
           <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-accent"></div>
              <span className="text-sm text-muted-foreground">2019</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <span className="text-sm text-muted-foreground">2020</span>
            </div>
            <Button size="sm" className="bg-accent hover:bg-accent/90 h-8 px-4">
                Check Now
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <RechartsBarChart data={barChartData} barGap={8}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
            <Bar dataKey="2019" radius={[4, 4, 0, 0]} fill="hsl(var(--accent))" />
            <Bar dataKey="2020" radius={[4, 4, 0, 0]} fill="hsl(var(--primary))" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChart;
