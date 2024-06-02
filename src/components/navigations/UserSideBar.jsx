import NavButton from "../buttons/NavButton";
import { useTranslation } from "react-i18next";
import {
  NewspaperIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function UserSideBar() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full fixed max-w-[18rem] z-10 hidden xl:block">
        <div
          className="flex-col col-span-1 space-y-4 p-5 pl-8 border-2 rounded-xl bg-lavender-mist
         dark:bg-midnight-black border-blue-purple transition-colors ease-in-out duration-500
          "
        >
          <NavButton to="/main">
            <NewspaperIcon className="h-8 xxl:h-12" />
            <span>{t("news")}</span>
          </NavButton>
          <NavButton to="/main/friends">
            <UsersIcon className="h-8 xxl:h-12" />
            <span>{t("friends")}</span>
          </NavButton>
          <NavButton to="/main/chats">
            <ChatBubbleLeftRightIcon className="h-8 xxl:h-12" />
            <span>{t("chats")}</span>
          </NavButton>
          <NavButton to="/main/liked">
            <HeartIcon className="h-8 xxl:h-12" />
            <span>{t("liked")}</span>
          </NavButton>
          <NavButton to="/main/settings">
            <Cog6ToothIcon className="h-8 xxl:h-12" />
            <span>{t("settings")}</span>
          </NavButton>
        </div>
      </div>
    </>
  );
}

export default UserSideBar;
