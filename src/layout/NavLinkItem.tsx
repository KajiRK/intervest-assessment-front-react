import NavIcons from "components/Icons/NavIcons";
import { NavLink, useLocation } from "react-router-dom";

export interface INavLinkItemProps {
  text: string;
  icon: string;
  link: string;
}

export default function NavLinkItem({ text, icon, link }: INavLinkItemProps) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <NavLink
      to={`/` + link}
      className={`group relative flex items-center gap-2.5 border-b rounded-none py-4 px-6 font-normal duration-300 ease-in-out hover:bg-gray-100 ${
        pathname.includes(link) && "bg-primary-purple text-white hover:bg-violet-600"
      }`}
    >
      <NavIcons icon={icon} />
      {text}
    </NavLink>
  );
}
