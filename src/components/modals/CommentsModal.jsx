import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  XMarkIcon,
  PaperAirplaneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useUserParams } from "../../context/UserParamsContext";

function CommentsModal({ isOpen, onClose, GameTitle }) {
  const { t } = useTranslation();
  const commentArea = t("comment");
  const { userParams } = useUserParams();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    const storedAvatar = localStorage.getItem("avatar");
    if (user) {
      setUser(user[0].nick_name);
    }
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, []);

  function handleSendComment() {
    if (newComment.trim()) {
      const commentData = {
        text: newComment.trim(),
        nick: user,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: avatar,
      };
      setComments([...comments, commentData]);
      setNewComment("");
    }
  };

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
                {GameTitle}
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
          {comments.length === 0 ? (
            <div className="flex w-full justify-center p-4 md:p-5 text-midnight-black dark:text-pale-yellow font-semibold">
              <span>{t("noComments")}</span>
            </div>
          ) : (
            <div className="p-4 md:p-5 max-h-96 overflow-y-auto">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-2 mb-2 rounded-md  whitespace-normal"
                >
                  <div className="flex items-start">
                    {comment.avatar ? (
                      <img src={comment.avatar} className="h-12 rounded-full" />
                    ) : (
                      <UserCircleIcon className="h-12" />
                    )}

                    <div className="md:pl-2">
                      <div className="dark:text-pale-yellow font-semibold">
                        {comment.nick}
                      </div>
                      <div
                        className="break-words break-all dark:text-white"
                        style={{ wordBreak: "break-word" }}
                      >
                        {comment.text}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end text-gray-500 text-sm">
                    {comment.time}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div
            className={`flex bg-lavender-mist dark:bg-midnight-black border-t-2 border-blue-purple
            px-2 py-3 ${
              userParams.lefty ? "flex-row-reverse" : ""
            } justify-between items-center`}
          >
            <textarea
              placeholder={commentArea}
              className="w-full resize-none focus:outline-none xxl:text-2xl focus:ring-0 bg-transparent
              dark:text-white"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <PaperAirplaneIcon
              className="h-8 xxl:h-12 px-2 cursor-pointer"
              onClick={handleSendComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsModal;
