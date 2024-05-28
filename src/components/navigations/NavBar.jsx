import React from "react";
import { useTranslation } from "react-i18next";
import ThemButton from "./../buttons/ThemButton";
import NavButton from "../buttons/NavButton";
import LanguageSwitcher from "../buttons/LanguageSwitcher";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function NavBar() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="fixed z-10 w-full mx-auto px-2 sm:px-6 lg:px-48
      bg-lavender-mist dark:bg-midnight-black  border-b-2
      border-blue-purple transition-color ease-in-out duration-500
      text-white
      "
      >
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Bars3Icon className="h-8 text-blue-purple dark:text-pale-yellow" />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 transition ease-in-out hover:scale-110">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex justify-center items-center space-x-4">
                <NavButton to="/register">{t("register")}</NavButton>
                <NavButton to="/login">{t("login")}</NavButton>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-3">
              <LanguageSwitcher />
              <div className="hidden sm:block">
                <ThemButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
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
      </div> */}
    </>
  );
}

export default NavBar;
