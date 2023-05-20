import { ReactNode, useState } from "react";
import Header from "./Header";
import SideMenuBar from "./SideMenuBar";

export interface IAppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: IAppLayoutProps) {
  const [sideMenuBarOpen, setSideMenuBarOpen] = useState(false);

  return (
    <section className="min-h-screen bg-zinc-100">
      <div className="flex h-screen overflow-hidden">
        {/* Side Bar */}
        <SideMenuBar sideMenuBarOpen={sideMenuBarOpen} setSideMenuBarOpen={setSideMenuBarOpen} />
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Header */}
          <Header sideMenuBarOpen={sideMenuBarOpen} setSideMenuBarOpen={setSideMenuBarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
