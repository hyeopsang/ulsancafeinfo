import { Outlet } from 'react-router';
import BottomNavigator from './BottomNavigator/BottomNavigator';
import Header from './Header/Header';

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <BottomNavigator />
    </div>
  );
}
