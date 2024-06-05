import { useTranslation } from "react-i18next";
import {
  GlobeAltIcon,
  NewspaperIcon,
  ClipboardIcon,
  UserIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import ButtonOutline from "./../components/buttons/ButtonOutline";
import { useState } from "react";

function SettingsView() {
  const { t, i18n } = useTranslation();
  const languages = ["ua", "ru", "en"];
  const [currentLangIndex, setCurrentLangIndex] = useState(
    languages.indexOf(i18n.language)
  );

  const changeLanguage = () => {
    const nextLangIndex = (currentLangIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextLangIndex]);
    setCurrentLangIndex(nextLangIndex);
  };

  return (
    <>
      <div
        className="flex justify-center w-full font-semibold rounded-xl p-4 border-2 border-blue-purple 
        text-xl xxl:text-3xl text-midnight-black dark:text-pale-yellow"
      >
        <div className="flex flex-col w-full space-y-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GlobeAltIcon className="h-8 xxl:h-12" />
              <span>{t("language")}</span>
            </div>
            <div>
              <ButtonOutline onClick={changeLanguage}>
                {i18n.language.toUpperCase()}
              </ButtonOutline>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <UserIcon className="h-8 xxl:h-12" />
              <span>{t("userSettings")}</span>
            </div>
            <div>
              <ButtonOutline>{t("open")}</ButtonOutline>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <NewspaperIcon className="h-8 xxl:h-12" />
              <span>{t("preferences")}</span>
            </div>
            <div>
              <ButtonOutline>{t("select")}</ButtonOutline>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ClipboardIcon className="h-8 xxl:h-12" />
              <span>{t("blackList")}</span>
            </div>
            <div>
              <ButtonOutline>{t("open")}</ButtonOutline>
            </div>
          </div>

          <div className="grid grid-rows-subgrid gap-4 row-span-3">
            <div className="flex justify-between items-center row-start-3">
              <div className="flex items-center space-x-2 text-red-500">
                <TrashIcon className="h-8 xxl:h-12" />
                <span>{t("deleteUser")}</span>
              </div>
              <div>
                <button
                  className="p-2 xxl:p-3 w-full font-semibold text-center text-lg md:text-xl xxl:text-3xl
                text-red-500 border-2 rounded-xl border-red-500
                 hover:text-red-700 hover:border-red-700"
                >
                  {t("delete")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsView;
