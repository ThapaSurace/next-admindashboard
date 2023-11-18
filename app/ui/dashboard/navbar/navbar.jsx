"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center p-4 bg-bgSoft rounded-md">
      <div className="text-textSoft capitalize font-bold">{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-[#2e374a] p-3 rounded-md">
          <MdSearch size={20} className="cursor-pointer" />
          <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none" />
        </div>
        <div className="flex items-center gap-4">
          <MdOutlineChat size={20} className="cursor-pointer" />
          <MdNotifications size={20} className="cursor-pointer" />
          <MdPublic size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
