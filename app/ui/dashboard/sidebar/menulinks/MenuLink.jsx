"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({item}) => {
    const pathname = usePathname()
  return (
    <div>
      <Link className={`flex items-center gap-2 p-3 my-2 rounded-md hover:bg-[#2e374a] ${pathname === item.path && "bg-[#2e374a]"}`} href={item.path}>
        {item.icon}
        {item.title}
      </Link>
    </div>
  );
};

export default MenuLink;
