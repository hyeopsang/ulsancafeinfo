import BottomNavigator from './BottomNavigator/BottomNavigator';
import Header from './Header/Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <BottomNavigator />
    </div>
  );
}
