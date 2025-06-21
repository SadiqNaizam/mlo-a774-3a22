import React from 'react';
import { Home, FileText, MessageSquare, Bell, MapPin, AreaChart, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active = false }) => {
  return (
    <a
      href="#"
      className={cn(
        'flex items-center p-3 rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors',
        active && 'bg-primary-foreground/10 text-primary-foreground'
      )}
    >
      <Icon className="h-5 w-5 mr-4" />
      <span className="font-medium capitalize">{label}</span>
    </a>
  );
};

const SidebarNav: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'home', active: true },
    { icon: FileText, label: 'file' },
    { icon: MessageSquare, label: 'messages' },
    { icon: Bell, label: 'notification' },
    { icon: MapPin, label: 'location' },
    { icon: AreaChart, label: 'graph' },
  ];

  return (
    <aside className="w-64 bg-primary text-primary-foreground flex flex-col p-6">
      <div className="flex flex-col items-center text-center py-6 mb-6">
        <Avatar className="h-24 w-24 mb-4 ring-2 ring-offset-4 ring-offset-primary ring-primary-foreground/50">
            <AvatarImage src="/placeholder-user.jpg" alt="John Don" />
            <AvatarFallback className="bg-primary-foreground/20 text-4xl">
                <User className="h-12 w-12" />
            </AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold tracking-wider">JOHN DON</h2>
        <p className="text-sm text-primary-foreground/70">johndon@company.com</p>
      </div>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <NavItem key={item.label} icon={item.icon} label={item.label} active={item.active} />
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;
