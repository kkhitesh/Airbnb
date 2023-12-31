"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useState, useCallback } from "react";
import { Avatar } from "../Avatar";
import { MenuItem } from "./MenuItem";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div
          onClick={toggleMenu}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full transition cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
          absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-3/4
          top-12
          right-0
          text-sm
          overflow-hidden
          bg-white"
        >
          <div
            className="
              flex
              flex-col
              cursor-pointer
            "
          >
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="SignUp" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
