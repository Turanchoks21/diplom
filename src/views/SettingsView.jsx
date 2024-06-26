import { useTranslation } from "react-i18next";
import {
  GlobeAltIcon,
  NewspaperIcon,
  UserIcon,
  TrashIcon,
  ArrowRightOnRectangleIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";
import ButtonOutline from "./../components/buttons/ButtonOutline";
import { useState } from "react";
import PreferencesModal from "../components/modals/PreferencesModal";
import ProfileSettingsModal from "../components/modals/ProfileSettingsModal";
import DeleteProfileModal from "../components/modals/DeleteProfileModal";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import { useUserParams } from "../context/UserParamsContext";

function SettingsView() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { clearUsers } = useUsers();
  const { userParams, setUserParams } = useUserParams();

  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isProfileSettingsOpen, setIsProfileSettingsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const languages = ["ua", "ru", "en"];
  const [currentLangIndex, setCurrentLangIndex] = useState(
    languages.indexOf(i18n.language)
  );

  function changeLanguage() {
    const nextLangIndex = (currentLangIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextLangIndex]);
    setCurrentLangIndex(nextLangIndex);
  }

  function handleLogout() {
    clearUsers();
    navigate("/login");
  }

  function toggleUserLefty() {
    setUserParams((prevParams) => ({
      ...prevParams,
      lefty: !prevParams.lefty,
    }));
  }

  return (
    <>
      <div
        className="flex justify-center w-full lg:max-w-5xl 3xl:max-w-[70rem] mx-auto font-semibold 
        rounded-xl p-4 border-2 border-blue-purple 
        text-xl xxl:text-3xl 4xl:text-4xl text-midnight-black dark:text-pale-yellow"
      >
        <div className="flex flex-col w-full space-y-4">
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
              <ButtonOutline onClick={() => setIsProfileSettingsOpen(true)}>
                {t("open")}
              </ButtonOutline>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <NewspaperIcon className="h-8 xxl:h-12" />
              <span>{t("preferences")}</span>
            </div>
            <div>
              <ButtonOutline onClick={() => setIsPreferencesOpen(true)}>
                {t("select")}
              </ButtonOutline>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <HandRaisedIcon className="h-8 xxl:h-12" />
              <span>{t("lefty")}</span>
            </div>
            <div>
              <ButtonOutline onClick={toggleUserLefty}>
                {userParams.lefty ? (
                  <span>{t("yes")}</span>
                ) : (
                  <span>{t("no")}</span>
                )}
              </ButtonOutline>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ArrowRightOnRectangleIcon className="h-8 xxl:h-12 text-red-500" />
              <span className="text-red-500">{t("logout")}</span>
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="p-2 xxl:p-3 w-full font-semibold text-center 
                text-red-500 border-2 rounded-xl border-red-500
                hover:text-red-700 hover:border-red-700"
              >
                {t("logout")}
              </button>
            </div>
          </div>
          <div className="border border-blue-purple" />
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-red-500">
              <TrashIcon className="h-8 xxl:h-12" />
              <span>{t("deleteUser")}</span>
            </div>
            <div>
              <button
                onClick={() => setIsDeleteOpen(true)}
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
      <PreferencesModal
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
      />
      <ProfileSettingsModal
        isOpen={isProfileSettingsOpen}
        onClose={() => setIsProfileSettingsOpen(false)}
        userIndex={0}
      />
      <DeleteProfileModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      />
    </>
  );
}

export default SettingsView;
