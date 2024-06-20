import { Link } from "react-router-dom";
import GameName from "../components/wrapers/news/GameName";
import SearchBar from "../components/inputs/SearchBar";
import { useTranslation } from "react-i18next";
import FriendsData from "../data/FriendsData";
import { useState } from "react";

function ChatsView() {
  const { t } = useTranslation();
  const chatWithFriend = FriendsData();

  const [isSearchChat, setIsSearchChat] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  const filteredChats = chatWithFriend.filter((chat) => {
    return chat.nickName.toLowerCase().includes(searchValue.toLowerCase());
  });

  function toggleSearch() {
    setIsSearchChat(!isSearchChat);
  }

  function clearSearchInput() {
    setIsSearchChat("");
  }

  return (
    <>
      <div className="w-full lg:max-w-5xl 3xl:max-w-[70rem] mx-auto space-y-4">
        <SearchBar
          isSearch={isSearchChat}
          searchValue={searchValue}
          handleChange={handleChange}
          toggleSearch={toggleSearch}
          clearSearchInput={clearSearchInput}
        >
          {t("searchChat")}
        </SearchBar>
        <div className="flex flex-col w-full mx-auto border-2 border-blue-purple rounded-xl p-5 space-y-4">
          {filteredChats.map((friendChat) => (
            <Link
              to={`/main/chats/${friendChat.nickName}`}
              key={friendChat.nickName}
              className="w-full"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-3">
                  <img
                    className={`h-14 xxl:h-20 rounded-full border-[3px] xxl:border-[5px] ${
                      friendChat.status === "online"
                        ? "border-green-500"
                        : "border-red-500"
                    }`}
                    src={friendChat.userAvatar}
                  />
                  <div>
                    <GameName text={friendChat.nickName} />
                    <span className="text-black dark:text-white text-sm xxl:text-xl">
                      {t("noMessage")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border mt-3 border-blue-purple" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatsView;
