import BottomNavItem from './BottomNavItem';

import Home from '@/assets/home.svg';
import Map from '@/assets/map.svg';
import Event from '@/assets/events.svg';
import Profile from '@/assets/profile.svg';
import type { ComponentType, SVGProps } from 'react';

interface BottomNavItemConfig {
  path: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

const BOTTOM_NAV_ITEMS: BottomNavItemConfig[] = [
  { path: '/', icon: Home, label: '홈' },
  { path: '/map', icon: Map, label: '지도' },
  { path: '/events', icon: Event, label: '행사' },
  { path: '/mypage', icon: Profile, label: '마이페이지' },
];

export default function BottomNavigator() {
  return (
    <nav className='z-30 w-full max-w-3xl bg-white py-2.5 shadow-[0_-2px_20px] shadow-gray-900/10'>
      <ul className='grid w-full grid-cols-4'>
        {BOTTOM_NAV_ITEMS.map((nav) => (
          <li key={nav.path}>
            <BottomNavItem {...nav} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
