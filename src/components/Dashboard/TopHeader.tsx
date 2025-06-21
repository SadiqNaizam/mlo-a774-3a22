import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TopHeaderProps {
    className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  return (
    <header className={cn("h-16 flex items-center justify-between bg-background px-8 border-b", className)}>
      <h1 className="text-xl font-semibold text-foreground">Dashboard User</h1>
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <Button variant="ghost" size="icon" className="hidden lg:flex">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </Button>
    </header>
  );
};

export default TopHeader;
