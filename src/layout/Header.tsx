import HeaderHamburgerButton from './HeaderHamburgerButton';
import HeaderUserProfile from './HeaderUserProfile';
import SearchInput from './SearchInput';

export interface IHeaderrProps {
  sideMenuBarOpen: boolean;
  setSideMenuBarOpen: (arg: boolean) => void;
}

export default function Header ({sideMenuBarOpen, setSideMenuBarOpen} : IHeaderrProps) {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-8">
        <HeaderHamburgerButton sideMenuBarOpen={sideMenuBarOpen} setSideMenuBarOpen={setSideMenuBarOpen} />
        <SearchInput responsiveClass="hidden lg:block" />
        <HeaderUserProfile />
      </div>
    </header>
  );
}
