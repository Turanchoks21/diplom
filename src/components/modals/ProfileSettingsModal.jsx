import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Dropzone from "../AvatarUploader";
import ButtonOutline from "../buttons/ButtonOutline";
import ButtonSolid from "./../buttons/ButtonSolid";

function ProfileSettingsModal({ isOpen, onClose, userIndex }) {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState({
    nick_name: false,
    email: false,
  });
  const [editedUser, setEditedUser] = useState({
    nick_name: "",
    email: "",
  });

  useEffect(() => {
    if (isOpen) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      setUser(users[userIndex]);
      setEditedUser({
        nick_name: users[userIndex]?.nick_name || "",
        email: users[userIndex]?.email || "",
      });
    }
  }, [isOpen, userIndex]);

  function handleChange(e) {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users[userIndex] = { ...users[userIndex], ...editedUser };
    localStorage.setItem("users", JSON.stringify(users));
    setUser(users[userIndex]);
    setIsEditing({ nick_name: false, email: false });
    onClose();
  }

  function handleEdit(field) {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  }

  function handleCancel() {
    setEditedUser({
      nick_name: user.nick_name,
      email: user.email,
    });
    setIsEditing({ nick_name: false, email: false });
    onClose();
  }

  const inputStyle =
    "border-2 rounded-xl border-blue-purple bg-transparent text-midnight-black dark:text-pale-yellow px-2 focus:outline-none";

  if (!isOpen || !user) return null;

  return (
    <div className="fixed z-30 inset-0 overflow-y-auto">
      <div
        className="flex items-center bg-gray-800 bg-opacity-75 transition-opacity
       justify-center min-h-screen"
      >
        <div className="fixed" aria-hidden="true" onClick={onClose}></div>
        <div
          className="bg-lavender-mist dark:bg-midnight-black rounded-xl
          overflow-hidden shadow-xl transform transition-all max-w-2xl w-full border-2 border-blue-purple"
        >
          <div
            className="bg-lavender-mist dark:bg-midnight-black px-4 py-5 border-b-2
           border-blue-purple sm:px-6 sm:py-4"
          >
            <div className="flex justify-between items-center">
              <span
                className="text-xl xxl:text-3xl leading-6 font-semibold text-midnight-black
               dark:text-pale-yellow"
              >
                {t("preferences")}
              </span>
              <button
                type="button"
                className="text-midnight-black dark:text-pale-yellow focus:outline-none 
                focus:ring-0 focus:ring-offset-0"
                onClick={onClose}
              >
                <XMarkIcon className="h-8 xxl:h-12" />
              </button>
            </div>
          </div>
          <div className="p-4 md:p-5 space-y-5 text-midnight-black dark:text-pale-yellow font-semibold">
            <div className="flex justify-between items-center">
              <div>{t("loadAvatar")}</div>
              <div>
                <Dropzone className="h-16 rounded-full" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>{t("nickname")}</div>
              <div className="flex items-center space-x-2">
                {isEditing.nick_name ? (
                  <input
                    type="text"
                    name="nick_name"
                    value={editedUser.nick_name}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                ) : (
                  <>
                    <PencilSquareIcon
                      className="h-6 xxl:h-12"
                      onClick={() => handleEdit("nick_name")}
                    />
                    <span>{user.nick_name}</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>Email</div>
              <div className="flex items-center space-x-2">
                {isEditing.email ? (
                  <input
                    type="text"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                ) : (
                  <>
                    <PencilSquareIcon
                      className="h-6 xxl:h-12"
                      onClick={() => handleEdit("email")}
                    />
                    <span>{user.email}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div
            className="bg-lavender-mist dark:bg-midnight-black border-t-2 border-blue-purple
           px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          >
            <div className="sm:pl-4">
              {Object.values(isEditing).some((editing) => editing) ? (
                <ButtonSolid type="button" onClick={handleSave}>
                  {t("save")}
                </ButtonSolid>
              ) : (
                <ButtonSolid type="button" onClick={onClose}>
                  {t("save")}
                </ButtonSolid>
              )}
            </div>
            <div>
              <ButtonOutline type="button" onClick={handleCancel}>
                {t("cancel")}
              </ButtonOutline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettingsModal;
