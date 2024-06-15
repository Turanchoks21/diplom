import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "./../components/inputs/SearchBar";
import FriendListItem from "../components/FriendsListItem";
import SearchUserItem from "../components/SearchUserItem";
import UsersData from "../data/UsersData";
import FriendsData from "../data/FriendsData";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

function FriendsView() {
  const { t } = useTranslation();

  const users = UsersData();
  const friends = FriendsData();
  // const friends = [];

  const [isSearchUser, setIsSearchUser] = useState(false);
  const [searchUserValue, setSearchUserValue] = useState("");

  function handleChange(event) {
    setSearchUserValue(event.target.value);
  }

  const filteredFriends = friends.filter((friend) => {
    return friend.nickName
      .toLowerCase()
      .includes(searchUserValue.toLowerCase());
  });

  const friendsIds = new Set(friends.map((friend) => friend.id));
  const filteredUsers = users.filter((user) => {
    return (
      user.nickName.toLowerCase().includes(searchUserValue.toLowerCase()) &&
      !friendsIds.has(user.id)
    );
  });

  function toggleSearch() {
    setIsSearchUser(!isSearchUser);
  }

  function clearSearchInput() {
    setSearchUserValue("");
  }

  return (
    <div className="space-y-4 max-w-5xl 3xl:max-w-[70rem] mx-auto">
      <SearchBar
        isSearch={isSearchUser}
        searchValue={searchUserValue}
        handleChange={handleChange}
        toggleSearch={toggleSearch}
        clearSearchInput={clearSearchInput}
      >
        {t("searchFriends")}
      </SearchBar>
      <div
        className="flex flex-col w-full mx-auto border-2 border-blue-purple rounded-xl p-5 space-y-4
        text-midnight-black dark:text-pale-yellow font-semibold"
      >
        {isSearchUser ? (
          <div>
            {searchUserValue === "" ? (
              <div className="flex justify-center items-center text-xl xxl:text-3xl">
                {t("startSearch")}
              </div>
            ) : (
              <div>
                <div className="space-y-5">
                  <span
                    className="text-xl xxl:text-3xl pb-1 border-b-2 
                     border-midnight-black dark:border-pale-yellow"
                  >
                    {t("inFriends")}
                  </span>
                  {filteredFriends.map((friend) => (
                    <FriendListItem key={friend.id} friend={friend} />
                  ))}
                </div>
                <div className="my-10" />
                <div className="space-y-5">
                  <span
                    className="text-xl xxl:text-3xl pb-1 border-b-2 
                     border-midnight-black dark:border-pale-yellow"
                  >
                    {t("globalUsers")}
                  </span>
                  {filteredUsers.map((user) => (
                    <SearchUserItem key={user.id} user={user} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {friends.length !== 0 ? (
              <div>
                {friends.map((friend) => (
                  <FriendListItem key={friend.id} friend={friend} />
                ))}
              </div>
            ) : (
              <div
                className="flex justify-center items-center text-blue-purple font-semibold 
                text-xl xxl:text-3xl"
              >
                <span className="flex flex-col text-xl xxl:text-3xl">
                  {t("nobodyHere")}
                  <FaceFrownIcon className="h-10 xxl:h-14" />
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FriendsView;
