import React from 'react';
import { DollarSign, Share2, ThumbsUp, Star } from 'lucide-react';
import StatCard from './StatCard';

const StatCardGrid: React.FC = () => {
  const statsData = [
    {
      title: 'Earning',
      value: '$ 628',
      icon: <DollarSign className="h-5 w-5 text-primary-foreground/80" />,
      className: 'bg-primary text-primary-foreground',
    },
    {
      title: 'Share',
      value: '2434',
      icon: <Share2 className="h-5 w-5 text-accent-secondary" />,
    },
    {
      title: 'Likes',
      value: '1259',
      icon: <ThumbsUp className="h-5 w-5 text-accent" />,
    },
    {
      title: 'Rating',
      value: '8,5',
      icon: <Star className="h-5 w-5 text-accent" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          className={stat.className}
        />
      ))}
    </div>
  );
};

export default StatCardGrid;
