"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuLinkProperties = {
  item: {
    label: string;
    href: string;
    icon: React.ReactNode;
  };
  // icon: React.ReactNode;
};

const MenuLink = ({ item }: MenuLinkProperties) => {
  const pathname = usePathname();

  return (
    <Link
      className={`flex items-center w-full p-3 transition rounded-lg gap-x-3 hover:bg-main-blue/50 ${pathname === item.href ? "bg-main-blue" : ""}`}
      href={item.href}
    >
      {item.icon}
      {item.label}
    </Link>
  );
};

export default MenuLink;
