import React from "react";
import { useTranslation } from "react-i18next";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ButtonOutline from "../buttons/ButtonOutline";
import ButtonSolid from "../buttons/ButtonSolid";
import PurpleInput from "../inputs/PurpleInput";

function ForgotPasswordModal({ isOpen, onClose }) {
  const { t } = useTranslation();

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
                {t("resetPassword")}
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
            <PurpleInput>{t("enterYourMail")}</PurpleInput>
          </div>
          <div
            className="bg-lavender-mist dark:bg-midnight-black border-t-2 border-blue-purple
            px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse space-y-3 sm:space-y-0"
          >
            <div className="sm:pl-4">
              <ButtonSolid type="button">{t("sendAnEmail")}</ButtonSolid>
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

export default ForgotPasswordModal;
