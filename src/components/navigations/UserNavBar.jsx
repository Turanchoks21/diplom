import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemButton from "./../buttons/ThemButton";
import NavButton from "../buttons/NavButton";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import clsx from "clsx";
import UserNick from "../wrapers/users/UserNick";

import {
  Bars3Icon,
  NewspaperIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  Cog6ToothIcon,
  UserCircleIcon,
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
        className="fixed z-10 w-full mx-auto px-2 lg:px-48 xl:px-56
      bg-lavender-mist dark:bg-midnight-black border-b-2
      border-blue-purple transition-color ease-in-out duration-500
      text-white
      "
      >
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
            <Bars3Icon
              className="h-8 text-blue-purple dark:text-pale-yellow hidden md:block"
              onClick={toggleMenu}
            />
            <ThemButton className="md:hidden" />
          </div>
          <div className="flex-1 flex justify-center xl:items-stretch xl:justify-start">
            <div className="flex-shrink-0 transition ease-in-out hover:scale-110">
              <Link to="/main">
                <Logo />
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto ">
            <div className="flex space-x-3">
              <div className="hidden xl:block">
                <ThemButton />
              </div>
              <UserCircleIcon className="h-8 xxl:h-12 text-blue-purple dark:text-pale-yellow" />
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
          <NavButton to="/main/chats">
            <ChatBubbleLeftRightIcon className="h-8" />
          </NavButton>
          <NavButton to="/main/liked">
            <HeartIcon className="h-8" />
          </NavButton>
          <NavButton to="/main/settings">
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
          <UserNick>USER_NICK</UserNick>
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
    </>
  );
}

export default NavBar;
