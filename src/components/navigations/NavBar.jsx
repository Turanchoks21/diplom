import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemButton from "./../buttons/ThemButton";
import NavButton from "../buttons/NavButton";
import LanguageSwitcher from "../buttons/LanguageSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import clsx from "clsx";

function NavBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="fixed items-center top-0 left-0 z-10 w-full mx-auto px-2 xxl:py-3 sm:px-6 lg:px-48
      bg-lavender-mist dark:bg-midnight-black  border-b-2
      border-blue-purple transition-color ease-in-out duration-500
      text-white
      "
      >
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Bars3Icon
              className="h-8 text-blue-purple dark:text-pale-yellow"
              onClick={toggleMenu}
            />
          </div>
          <div className="flex-1 flex justify-center sm:items-stretch sm:justify-start">
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
      {/* mob menu */}
      <div
        className={clsx(
          "fixed z-20 inset-0 bg-gray-800 bg-opacity-75 transition-opacity",
          { hidden: !isMenuOpen }
        )}
        onClick={toggleMenu}
      />
      <div
        className={clsx(
          "fixed inset-0 bg-lavender-mist dark:bg-midnight-black z-30 transform transition-all duration-500",
          { "-translate-x-full": !isMenuOpen, "translate-x-0": isMenuOpen }
        )}
      >
        <div className="flex items-center justify-between p-4 border-b-2 border-blue-purple">
          <ThemButton />
          <XMarkIcon
            className="h-8 text-blue-purple dark:text-pale-yellow"
            onClick={toggleMenu}
          />
        </div>
        <div className="p-4 flex justify-center items-center">
          <div className="flex flex-col space-y-4 w-full items-center">
            <NavButton to="/register" onClick={toggleMenu}>
              {t("register")}
            </NavButton>
            <NavButton to="/login" onClick={toggleMenu}>
              {t("login")}
            </NavButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
