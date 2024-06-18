import React from "react";
import { useTranslation } from "react-i18next";
import { XMarkIcon, FaceFrownIcon } from "@heroicons/react/24/outline";
import ButtonOutline from "../buttons/ButtonOutline";
import { useNavigate } from "react-router-dom";
import { useUsers } from "./../../context/UserContext";

function DeleteProfileModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { clearUsers } = useUsers();
  const navigate = useNavigate();

  function handleDeleteProfile() {
    clearUsers();
    navigate("/register");
  }

  if (!isOpen) return null;

  return (
    <div className="fixed h-screen z-30 inset-0 overflow-y-auto">
      <div
        className="flex items-center justify-center min-h-screen 
      text-midnight-black dark:text-pale-yellow font-semibold"
      >
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <div
          className="bg-lavender-mist dark:bg-midnight-black rounded-xl overflow-hidden shadow-xl
          transform transition-all max-w-2xl w-full border-2 border-blue-purple"
        >
          <div className="bg-lavender-mist dark:bg-midnight-black px-4 py-5 border-b-2 border-blue-purple sm:px-6 sm:py-4">
            <div className="flex justify-between items-center">
              <span className="text-xl xxl:text-3xl leading-6 ">
                {t("deleteUser")}
              </span>
              <button
                type="button"
                className=" 
                focus:outline-none focus:ring-0 focus:ring-offset-0"
                onClick={onClose}
              >
                <XMarkIcon className="h-8 xxl:h-12" />
              </button>
            </div>
          </div>
          <div className="p-4 md:p-5 space-y-5 text-midnight-black dark:text-pale-yellow font-semibold">
            <span>{t("wantToDelete")}</span>
            <FaceFrownIcon className="h-8 xxl:h-12" />
          </div>
          <div className="bg-lavender-mist dark:bg-midnight-black border-t-2 border-blue-purple px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <div className="sm:pl-4">
              <button
                className="p-2 xxl:p-3 w-full text-center text-lg md:text-xl xxl:text-3xl text-lavender-mist dark:text-midnight-black font-bold bg-red-500 border-2 border-red-500 hover:bg-red-600 hover:border-red-600 rounded-xl"
                type="button"
                onClick={handleDeleteProfile}
              >
                {t("delete")}
              </button>
            </div>
            <div>
              <ButtonOutline type="button" onClick={onClose}>
                {t("cancel")}
              </ButtonOutline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProfileModal;
