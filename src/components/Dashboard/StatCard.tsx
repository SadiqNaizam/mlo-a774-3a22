import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, className }) => {
  return (
    <Card className={cn('shadow-md border-border/50', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn('text-sm font-medium text-muted-foreground', className && 'text-primary-foreground/80')}>
            {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
