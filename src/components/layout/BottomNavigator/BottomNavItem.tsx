import { cn } from '@/lib/cn';
import type { ComponentType, SVGProps } from 'react';
import { Link, useLocation } from 'react-router';

interface BottomNavItemProps {
  path: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export default function BottomNavItem({ path, label, icon: Icon }: BottomNavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      className={cn(
        'mx-auto flex flex-col items-center justify-center gap-1.5',
        isActive ? 'text-main' : 'text-gray-300',
      )}
    >
      <Icon className='h-6 w-6' />
      <p className='text-xs'>{label}</p>
    </Link>
  );
}
