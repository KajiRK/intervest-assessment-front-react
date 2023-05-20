import NavLinkItem from "./NavLinkItem";
import SearchInput from "./SearchInput";

export default function SideMenuBarItems() {
  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <SearchInput responsiveClass="lg:hidden block pl-4 pr-4 mt-4 mb-2" />
      <nav className="mt-2 lg:mt-0 lg:px-0 lg:py-0">
          <ul className="mb-6 flex flex-col">
            <li>
              <NavLinkItem text="Dashboard" icon="i-dashboard" link="home" borderBottom={true} />
            </li>
            <li>
              <NavLinkItem text="Orders" icon="i-orders" link="orders" borderBottom={true} />
            </li>
            <li>
              <NavLinkItem text="Account" icon="i-account" link="account" borderBottom={true} />
            </li>
            <li>
              <NavLinkItem text="Settings" icon="i-settings" link="settings" borderBottom={true} />
            </li>
          </ul>
          <h3 className="mb-4 ml-6 text-normal font-normal text-gray-500">
            Support
          </h3>
          <ul className="mb-6 flex flex-col border-b">
            <li>
              <NavLinkItem text="Chat" icon="i-chat" link="chat" borderBottom={false} />
            </li>
            <li>
              <NavLinkItem text="FAQ" icon="i-faq" link="faq" borderBottom={false} />
            </li>
          </ul>
      </nav>
    </div>
  );
}
