import React from "react";
import { useTranslation } from "react-i18next";
import ThemButton from "./../buttons/ThemButton";
import NavButton from "../buttons/NavButton";
import LanguageSwitcher from "../buttons/LanguageSwitcher";
import { Bars3Icon } from "@heroicons/react/20/solid";

function NavBar() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="fixed flex justify-between md:px-48 p-5 py-2 items-center 
        top-0 left-0 border-b-2 w-full bg-lavender-mist dark:bg-midnight-black
        border-blue-purple transition-color ease-in-out duration-500"
      >
        <Bars3Icon className="h-8 text-blue-purple dark:text-pale-yellow" />
        <div className="flex space-x-4 justify-center items-center">
          <div
            className="
           bg-clip-text text-transparent bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]
           flex space-x-1 items-center"
          >
            <span className="font-bold text-2xl">LevelUp! </span>
          </div>
          <NavButton to="/register">{t("register")}</NavButton>
          <NavButton to="/login">{t("login")}</NavButton>
        </div>
        <div className="flex space-x-3">
          <LanguageSwitcher />
          <ThemButton />
        </div>
      </div>
    </>
  );
}

export default NavBar;
