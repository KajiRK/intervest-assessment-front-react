import * as React from "react";
import HamburgerIcon from "components/Icons/Hamburger";
import YourLogoWhite from "assets/images/home/your-logo-white.png";
import CloseIcon from "components/Icons/Close";

export interface IHeaderHamburgerButtonProps {
  sideMenuBarOpen: boolean;
  setSideMenuBarOpen: (arg: boolean) => void;
}

export default function HeaderHamburgerButton({
  sideMenuBarOpen,
  setSideMenuBarOpen,
}: IHeaderHamburgerButtonProps) {
  return (
    <>
      <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            setSideMenuBarOpen(!sideMenuBarOpen);
          }}
          className="block rounded-none bg-white lg:hidden"
        >
          {sideMenuBarOpen && (
            <CloseIcon />
          )}
          {!sideMenuBarOpen && (
            <HamburgerIcon />
          )}
        </button>
      </div>
      <img src={YourLogoWhite} alt="Logo" className="w-24 lg:hidden" />
    </>
  );
}
