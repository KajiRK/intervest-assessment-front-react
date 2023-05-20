import { Link } from "react-router-dom";
import User from "assets/images/home/user.png";
import BellIcon from "components/Icons/Bell";

export default function HeaderUserProfile() {
  return (
    <div className="flex items-center gap-3 2xsm:gap-7">
      <ul className="flex items-center gap-2 2xsm:gap-4 mr-4 mt-2 hidden lg:block">
        <li className="relative">
            <button type="button" className="relative inline-flex items-center text-sm font-medium text-gray-100 text-white rounded-none">
                <BellIcon />
                <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-slate-100 rounded-full -top-1 -right-1"></div>
            </button>
        </li>
      </ul>
      <div className="relative border-l">
        <Link className="flex items-center gap-4 ml-6" to="#">
          <span className="hidden text-right lg:block">
            <span className="block text-md font-medium">Kaji RK</span>
          </span>
          <span className="h-10 w-10 rounded-full">
            <img src={User} alt="User" />
          </span>
        </Link>
      </div>
    </div>
  );
}
