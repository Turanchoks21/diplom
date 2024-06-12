import React from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavButton from "./../buttons/NavButton";

function SearchBar({
  isSearch,
  searchValue,
  handleChange,
  toggleSearch,
  clearSearchInput,
  children,
}) {
  return (
    <div
      className="flex justify-center rounded-xl p-4 border-2 border-blue-purple
      text-midnight-black dark:text-pale-yellow"
    >
      {isSearch ? (
        <div className="flex justify-between w-full space-x-4">
          <MagnifyingGlassIcon className="h-8 xxl:h-12" />
          <input
            className="w-full focus:outline-none bg-transparent
            text-lg xxl:text-2xl border-b-2 border-midnight-black
            dark:border-pale-yellow"
            value={searchValue}
            onChange={handleChange}
          />
          <XMarkIcon
            onClick={() => {
              clearSearchInput();
              toggleSearch();
            }}
            className="h-8 xxl:h-12"
          />
        </div>
      ) : (
        <NavButton onClick={toggleSearch}>
          <MagnifyingGlassIcon className="h-8 xxl:h-12" />
          {children}
        </NavButton>
      )}
    </div>
  );
}

export default SearchBar;
