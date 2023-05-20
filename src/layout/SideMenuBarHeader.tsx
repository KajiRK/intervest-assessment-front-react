import { NavLink } from "react-router-dom";
import YourLogo from "assets/images/home/your-logo.png";

export default function SideMenuBarHeader() {
  return (
    <div className="flex items-center justify-between lg:py-6.5">
      <NavLink to="/">
        <img src={YourLogo} alt="Logo" className="w-full h-full" />
      </NavLink>
    </div>
  );
}
