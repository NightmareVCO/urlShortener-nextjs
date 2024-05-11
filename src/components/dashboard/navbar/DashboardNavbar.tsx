"use client";

import LanguageIcon from "@icons/Dashboard/LanguageIcon";
import MessageIcon from "@icons/Dashboard/MessageIcon";
import NotificationIcon from "@icons/Dashboard/NotificationIcon";
import { usePathname } from "next/navigation";

import Search from "../search/Search";

const DashboardNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between w-full p-5 rounded-lg bg-background-gray">
      <h3 className="text-lg font-semibold capitalize text-main-dark-white">
        {pathname.split("/").pop()}
      </h3>
      <ul className="flex items-center justify-center gap-x-4">
        <li>
          <Search placeholder="Search..." />
        </li>
        <li className="flex gap-x-5">
          <MessageIcon />
          <NotificationIcon />
          <LanguageIcon />
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
