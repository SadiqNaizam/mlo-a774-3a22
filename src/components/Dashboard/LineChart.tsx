import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const lineChartData = [
  { name: 'Day 1', lorem: 40, dolor: 24 },
  { name: 'Day 2', lorem: 30, dolor: 14 },
  { name: 'Day 3', lorem: 20, dolor: 98 },
  { name: 'Day 4', lorem: 28, dolor: 40 },
  { name: 'Day 5', lorem: 19, dolor: 48 },
  { name: 'Day 6', lorem: 24, dolor: 38 },
  { name: 'Day 7', lorem: 35, dolor: 43 },
  { name: 'Day 8', lorem: 50, dolor: 60 },
  { name: 'Day 9', lorem: 62, dolor: 55 },
  { name: 'Day 10', lorem: 55, dolor: 70 },
  { name: 'Day 11', lorem: 70, dolor: 80 },
  { name: 'Day 12', lorem: 60, dolor: 50 },
];

const CalendarGrid: React.FC = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const activeDates = [10, 16, 24];
  const today = 18;

  return (
    <div className='w-48 flex-shrink-0 text-center'>
        <div className='grid grid-cols-7 gap-y-2 text-xs text-muted-foreground mb-2'>
            {days.map(day => <div key={day}>{day}</div>)}
        </div>
        <div className='grid grid-cols-7 gap-1 text-sm'>
            {dates.map(date => (
                <div key={date} className={`flex items-center justify-center p-1 rounded-full ${date === today ? 'bg-primary text-primary-foreground' : ''} ${activeDates.includes(date) ? 'bg-accent/80 text-white' : ''}`}>
                    {date}
                </div>
            ))}
        </div>
    </div>
  )
}

const LineChart: React.FC = () => {
  return (
    <Card className="shadow-md border-border/50">
      <CardHeader>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-accent"></div>
            <span className="text-sm font-medium">Lorem Ipsum</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <span className="text-sm font-medium">Dolor Amet</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center space-x-4">
            <div className="flex-grow h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={lineChartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorLorem" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFAA00" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#FFAA00" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorDolor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#122641" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#122641" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '0.375rem' }}
                        />
                        <Area type="monotone" dataKey="lorem" stroke="#FFAA00" strokeWidth={2} fillOpacity={1} fill="url(#colorLorem)" />
                        <Area type="monotone" dataKey="dolor" stroke="#122641" strokeWidth={2} fillOpacity={1} fill="url(#colorDolor)" />
                         <XAxis dataKey="name" hide={true} />
                         <YAxis hide={true} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <CalendarGrid />
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;
