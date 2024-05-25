import React from "react";
import { useTranslation } from "react-i18next";
import ThemButton from "./../buttons/ThemButton";
import NavButton from "../buttons/NavButton";
import LanguageSwitcher from "../buttons/LanguageSwitcher";

function NavBar() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="fixed flex justify-between md:px-48 p-5 py-2 items-center top-0 left-0 border-b-2 w-full
border-violet-purple transition-color ease-in-out duration-500"
      >
        <div className="flex space-x-4">
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
