import { useRef } from 'react';
import SideMenuBarHeader from './SideMenuBarHeader';
import SideMenuBarItems from './SideMenuBarItems';

export interface ISideMenuBarProps {
  sideMenuBarOpen: boolean;
  setSideMenuBarOpen: (arg: boolean) => void;
}

export default function SideMenuBar ({sideMenuBarOpen, setSideMenuBarOpen} : ISideMenuBarProps) {
  const sidebar = useRef<any>(null);
  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 flex h-screen w-72 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${
        sideMenuBarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Side menu bar header */}
      <SideMenuBarHeader />
      
      {/* Side menu bar items */}
      <SideMenuBarItems />
    </aside>
  );
}
