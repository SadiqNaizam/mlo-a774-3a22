import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

/**
 * Sidebar component that acts as a container for the main sidebar navigation.
 * It is designed to be used within a layout component like MainAppLayout.
 */
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The SidebarNav component from context contains all specific styling and navigation items.
  // This component serves as a clean, reusable wrapper for placement within the application's layout.
  return (
    <div className={cn('h-full', className)}>
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
