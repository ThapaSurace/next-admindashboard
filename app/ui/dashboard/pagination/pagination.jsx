"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="p-3 flex justify-between">
      <div className="flex items-center">
        <MdOutlineKeyboardDoubleArrowLeft size={25} />
        <button
          className="px-1 py-2 disabled:cursor-not-allowed text-white"
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          Previous
        </button>
      </div>
      <div className="flex items-center">
        <button
          className="px-1 py-2 disabled:cursor-not-allowed text-white"
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >
          Next
        </button>
        <MdOutlineKeyboardDoubleArrowRight size={25} />
      </div>
    </div>
  );
};

export default Pagination;
