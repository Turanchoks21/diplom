import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FriendsData from "../data/FriendsData";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useUserParams } from "../context/UserParamsContext";

function PersonChatView() {
  const { t } = useTranslation();
  const { userNickname } = useParams();
  const friends = FriendsData();
  const message = t("message");
  const { userParams } = useUserParams();

  const friend = friends.find((find) => find.nickName === userNickname);

  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-full max-w-4xl xxl:max-w-6xl border-2 rounded-xl 
        border-blue-purple bg-lavender-mist dark:bg-midnight-black transition-colors 
          ease-in-out duration-500 text-midnight-black dark:text-pale-yellow "
        >
          <div
            className="flex justify-between items-center font-semibold p-3 w-full 
            border-b-2 border-blue-purple "
          >
            <div className="flex items-center space-x-3">
              <Link to="/main/chats">
                <ArrowLeftIcon className="h-8 xxl:h-12" />
              </Link>
              <img
                src={friend.userAvatar}
                className={`h-14 xxl:h-16 rounded-full border-[3px] ${
                  friend.status === "online"
                    ? "border-green-500"
                    : "border-red-500"
                }`}
              />
              <span className="text-base xxl:text-2xl">{friend.nickName}</span>
            </div>
          </div>
          <div
            className="flex h-screen my-[-12rem] justify-center items-center 
            text-midnight-black dark:text-white text-base xxl:text-2xl"
          >
            {t("noMassageInChat")}
          </div>
          <div
            className={`flex justify-between ${
              userParams.lefty ? "flex-row-reverse" : ""
            }  items-center p-2 border-t-2 border-blue-purple`}
          >
            <textarea
              placeholder={message}
              className="w-full resize-none focus:outline-none xxl:text-2xl focus:ring-0 bg-transparent"
            />
            <div
              className={`flex space-x-2 ${
                userParams.lefty ? "flex-row-reverse" : ""
              }`}
            >
              <PaperClipIcon
                className={`h-8 xxl:h-12 ${userParams.lefty ? "pr-2" : ""}`}
              />
              <PaperAirplaneIcon className={`h-8 xxl:h-12 ${userParams.lefty ? "pr-2" : ""}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonChatView;
