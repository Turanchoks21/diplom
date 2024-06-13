import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FriendsData from "../data/FriendsData";
import {
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function PersonChatView() {
  const { t } = useTranslation();
  const { userNickname } = useParams();
  const friends = FriendsData();
  const message = t("message");

  const friend = friends.find((find) => find.nickName === userNickname);

  return (
    <>
      <div className="flex justify-center pt-2 md:pt-3">
        <div
          className="w-full max-w-2xl border-2 rounded-xl 
        border-blue-purple bg-lavender-mist dark:bg-midnight-black transition-colors 
          ease-in-out duration-500 text-midnight-black dark:text-pale-yellow"
        >
          <div
            className="flex justify-between items-center font-semibold p-3 w-full 
            border-b-2 border-blue-purple"
          >
            <div className="flex items-center space-x-3">
              <Link to="/main/chats">
                <ArrowLeftIcon className="h-7" />
              </Link>
              <img
                src={friend.userAvatar}
                className={`h-14 rounded-full border-[3px] ${
                  friend.status !== "online"
                    ? "border-green-500"
                    : "border-red-500"
                }`}
              />
              <span>{friend.nickName}</span>
            </div>
            <div>
              <EllipsisVerticalIcon className="h-8 xxl:h-12" />
            </div>
          </div>
          <div className="flex h-screen my-[-7rem] justify-center items-center text-white">
            chat
          </div>
          <div className="flex justify-between space-x-4 items-center p-2  border-t-2 border-blue-purple">
            <textarea
              placeholder={message}
              className="w-full resize-none focus:outline-none focus:ring-0 bg-transparent"
            />
            <PaperClipIcon className="h-10 md:h-8 xxl:h-12" />
            <PaperAirplaneIcon className="h-10 md:h-8 xxl:h-12" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonChatView;
