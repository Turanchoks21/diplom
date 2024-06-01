import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemButton from "./../buttons/ThemButton";
import NavButton from "../buttons/NavButton";
import LanguageSwitcher from "../buttons/LanguageSwitcher";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import clsx from "clsx";
import MenuNick from "./../wrapers/usersMenu/MenuNick";
import MenuAvatar from "./../wrapers/usersMenu/MenuAvatar";

import {
  Bars3Icon,
  NewspaperIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function NavBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="fixed z-10 w-full mx-auto px-2  lg:px-48
      bg-lavender-mist dark:bg-midnight-black  border-b-2
      border-blue-purple transition-color ease-in-out duration-500
      text-white
      "
      >
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <Bars3Icon
              className="h-8 text-blue-purple dark:text-pale-yellow hidden md:block"
              onClick={toggleMenu}
            />
            <ThemButton className="md:hidden" />
          </div>
          <div className="flex-1 flex justify-center lg:items-stretch lg:justify-start">
            <div className="flex-shrink-0 transition ease-in-out hover:scale-110">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            {/* <div className="hidden lg:block lg:ml-6">
              <div className="flex justify-center items-center space-x-4">
                <NavButton to="/register">{t("register")}</NavButton>
                <NavButton to="/login">{t("login")}</NavButton>
              </div>
            </div> */}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-3">
              <MenuAvatar src="https://avatarfiles.alphacoders.com/374/thumb-1920-374883.png" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer navbar */}
      <div
        className="fixed w-full items-center bg-lavender-mist dark:bg-midnight-black z-10 bottom-0 left-0 
        border-t-2 border-blue-purple md:hidden"
      >
        <div className="flex justify-between p-4">
          <NavButton to="/main">
            <NewspaperIcon className="h-8" />
          </NavButton>
          <NavButton to="/main/friends">
            <UsersIcon className="h-8" />
          </NavButton>
          <NavButton>
            <ChatBubbleLeftRightIcon className="h-8" />
          </NavButton>
          <NavButton>
            <HeartIcon className="h-8" />
          </NavButton>
          <NavButton>
            <Cog6ToothIcon className="h-8" />
          </NavButton>
        </div>
      </div>

      {/* Mobile side menu */}
      <div
        className={clsx(
          "fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transition-opacity",
          { hidden: !isMenuOpen }
        )}
        onClick={toggleMenu}
      />
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-72 bg-lavender-mist dark:bg-midnight-black z-30 transform transition-transform",
          { "-translate-x-full": !isMenuOpen, "translate-x-0": isMenuOpen }
        )}
      >
        <div className="flex justify-between items-center gap-3 p-4 border-b-2 border-blue-purple">
          <MenuNick>USER_NICK</MenuNick>
          <ThemButton />
        </div>

        <div className="p-4 flex justify-center items-center">
          <div className="flex flex-col space-y-4 w-full items-start">
            <NavButton to="/main" onClick={toggleMenu}>
              <NewspaperIcon className="h-8" />
              <span>{t("news")}</span>
            </NavButton>
            <NavButton to="/main/friends" onClick={toggleMenu}>
              <UsersIcon className="h-8" />
              <span>{t("friends")}</span>
            </NavButton>
            <NavButton to="/main/chats" onClick={toggleMenu}>
              <ChatBubbleLeftRightIcon className="h-8" />{" "}
              <span>{t("chats")}</span>
            </NavButton>
            <NavButton to="/main/liked" onClick={toggleMenu}>
              <HeartIcon className="h-8" />
              <span>{t("liked")}</span>
            </NavButton>
            <NavButton to="/main/settings" onClick={toggleMenu}>
              <Cog6ToothIcon className="h-8" />
              <span>{t("settings")}</span>
            </NavButton>
          </div>
        </div>
      </div>

      {/* PC side bar */}
      <div>

      </div>
    </>
  );
}

export default NavBar;
