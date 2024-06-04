import { useTranslation } from "react-i18next";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  FaceFrownIcon,
} from "@heroicons/react/24/outline";
import NavButton from "../components/buttons/NavButton";
import UsersData from "../data/UsersData";
import FriendsData from "../data/FriendsData";
import { useState } from "react";
import FriendListItem from "../components/FriendsListItem";
import SearchUserItem from "../components/SearchUserItem";

function FriendsView() {
  const { t } = useTranslation();

  const users = UsersData();
  const frieds = FriendsData();
  // const frieds = [];

  const [isSearchUser, setIsSearchUser] = useState(false);
  const [searchUserValue, setSearchUserValue] = useState("");

  const handleChange = (event) => {
    setSearchUserValue(event.target.value);
  };

  const filteredFriends = frieds.filter((friend) => {
    return friend.nickName
      .toLowerCase()
      .includes(searchUserValue.toLowerCase());
  });

  const friendsIds = new Set(frieds.map((friend) => friend.id));
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
    <>
      <div className="space-y-4">
        <div className="flex justify-center rounded-xl p-4 border-2 border-blue-purple">
          {isSearchUser ? (
            <div className="flex justify-between w-full space-x-4">
              <MagnifyingGlassIcon className="h-8 xxl:h-12 text-midnight-black dark:text-pale-yellow" />
              <input
                className="w-full focus:outline-none bg-transparent text-midnight-black 
                dark:text-pale-yellow text-lg xxl:text-2xl  border-b-2 border-midnight-black
                dark:border-pale-yellow"
                value={searchUserValue}
                onChange={handleChange}
              />
              <XMarkIcon
                onClick={() => {
                  clearSearchInput();
                  toggleSearch();
                }}
                className="h-8 xxl:h-12 text-midnight-black dark:text-pale-yellow"
              />
            </div>
          ) : (
            <NavButton onClick={toggleSearch}>
              <MagnifyingGlassIcon className="h-8 xxl:h-12" />
              {t("searhFriends")}
            </NavButton>
          )}
        </div>
        <div className="flex flex-col w-full mx-auto border-2 border-blue-purple rounded-xl p-5 space-y-4">
          {isSearchUser ? (
            <div>
              {searchUserValue === "" ? (
                <div
                  className="flex justify-center items-center text-xl xxl:text-3xl
                  text-midnight-black dark:text-pale-yellow  
                "
                >
                  {t("startSearch")}
                </div>
              ) : (
                <div>
                  <div className="space-y-5">
                    <span
                      className="text-xl xxl:text-3xl pb-1 text-midnight-black dark:text-pale-yellow border-b-2 
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
                      className="text-xl xxl:text-3xl pb-1 text-midnight-black dark:text-pale-yellow border-b-2 
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
              {frieds.length !== 0 ? (
                <div>
                  {frieds.map((fried) => (
                    <FriendListItem key={fried.id} friend={fried} />
                  ))}
                </div>
              ) : (
                <div
                  className="flex justify-center items-center text-blue-purple font-semibold 
                  text-xl xxl:text-3xl"
                >
                  <span className="flex flex-col text-xl xxl:text-3xl text-midnight-black dark:text-pale-yellow">
                    {t("nobodyHere")}
                    <FaceFrownIcon className="h-10 xxl:h-14" />
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FriendsView;
