"use client";

import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
  
    const handleSearch = useDebouncedCallback((e) => {
      const params = new URLSearchParams(searchParams);
  
      params.set("page", 1);
  
      if (e.target.value) {
        e.target.value.length > 2 && params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
      replace(`${pathname}?${params}`);
    }, 300);
  
    return (
      <div className="flex items-center gap-3 bg-[#2e374a] p-1 rounded-md w-[max-content]">
        <MdSearch size={22} className="cursor-pointer" />
        <input
          type="text"
          placeholder={placeholder}
          className="transparent border-none text-white outline-none p-1"
          onChange={handleSearch}
        />
      </div>
    );
  };
  
  export default Search;