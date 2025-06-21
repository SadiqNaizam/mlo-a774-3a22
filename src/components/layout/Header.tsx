import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  /**
   * Callback function to be invoked when the menu icon is clicked.
   * Typically used to toggle a mobile sidebar.
   */
  onMenuClick?: () => void;
  className?: string;
}

/**
 * Header component for the application layout.
 * It displays the page title and provides a menu toggle for responsive navigation.
 */
const Header: React.FC<HeaderProps> = ({ onMenuClick, className }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-8',
        className
      )}
    >
      <h1 className="text-xl font-semibold text-foreground">Dashboard User</h1>
      
      <div className="flex items-center">
        {/* Mobile menu button, triggers the onMenuClick callback */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {/* Desktop menu button, as seen in the design. Could be used for sidebar collapsing. */}
        <Button variant="ghost" size="icon" className="hidden lg:flex">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
