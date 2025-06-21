import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const donutChartData = [
  { name: 'Completed', value: 45 },
  { name: 'Remaining', value: 55 },
];

const COLORS = ['hsl(var(--accent))', 'hsl(var(--primary))'];

const DonutChartCard: React.FC = () => {
  return (
    <Card className="shadow-md border-border/50 flex flex-col justify-between">
      <CardContent className="p-6 flex flex-col items-center flex-grow">
        <div className="relative w-40 h-40 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutChartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {donutChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">{`${donutChartData[0].value}%`}</span>
          </div>
        </div>
        
        <div className="w-full text-center space-y-2 mb-4">
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
        </div>

      </CardContent>
      <div className="px-6 pb-6">
        <Button className="w-full bg-accent hover:bg-accent/90">
          Check Now
        </Button>
      </div>
    </Card>
  );
};

export default DonutChartCard;
