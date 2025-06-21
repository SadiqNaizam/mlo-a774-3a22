import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * Main application layout component that orchestrates the sidebar, header, and main content area.
 * It handles responsive behavior for the sidebar, showing it statically on desktop and as an overlay on mobile.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  return (
    <>
      {/* Mobile Sidebar: Positioned fixed, slides in from the left */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:hidden',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <Sidebar />
      </div>

      {/* Overlay to close mobile sidebar on click outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main layout grid based on requirements */}
      <div className="grid min-h-screen grid-rows-[auto_1fr] lg:grid-cols-[256px_1fr]">
        {/* Desktop Sidebar: Static, occupies the first column */}
        <aside className="hidden lg:block lg:row-span-2">
          <Sidebar />
        </aside>

        {/* Header: First row, second column on desktop */}
        <div className="lg:col-start-2">
          <Header onMenuClick={() => setIsSidebarOpen(prev => !prev)} />
        </div>

        {/* Main Content: Second row, second column on desktop */}
        <main className="overflow-y-auto p-6 md:p-8 lg:col-start-2">
          {children}
        </main>
      </div>
    </>
  );
};

export default MainAppLayout;
