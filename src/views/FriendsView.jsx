import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "./../components/inputs/SearchBar";
import FriendListItem from "../components/FriendsListItem";
import SearchUserItem from "../components/SearchUserItem";
import UsersData from "../data/UsersData";
import FriendsData from "../data/FriendsData";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import FriendsRequestItem from "../components/FriendsRequestItem";

function FriendsView() {
  const { t } = useTranslation();

  const users = UsersData();
  const friendsData = FriendsData();

  const [friends, setFriends] = useState(friendsData);
  const [friendRequests, setFriendRequests] = useState([]);
  const [isFrindRequest, setIsFrindRequest] = useState(false);
  const [isSearchUser, setIsSearchUser] = useState(false);
  const [searchUserValue, setSearchUserValue] = useState("");

  function handleChange(event) {
    setSearchUserValue(event.target.value);
  }

  const sortedFriends = [...friends].sort((a, b) =>
    a.nickName.localeCompare(b.nickName)
  );

  const sortedFriendRequests = [...friendRequests].sort((a, b) =>
    a.nickName.localeCompare(b.nickName)
  );

  const filteredFriends = sortedFriends.filter((friend) =>
    friend.nickName.toLowerCase().includes(searchUserValue.toLowerCase())
  );

  const friendsIds = new Set(sortedFriends.map((friend) => friend.id));
  const filteredUsers = users.filter(
    (user) =>
      user.nickName.toLowerCase().includes(searchUserValue.toLowerCase()) &&
      !friendsIds.has(user.id)
  );

  function toggleSearch() {
    setIsSearchUser(!isSearchUser);
  }

  function clearSearchInput() {
    setSearchUserValue("");
  }

  function toggleFriendsRequest() {
    setIsFrindRequest(!isFrindRequest);
  }

  function removeFriend(friendId) {
    const friend = friends.find((f) => f.id === friendId);
    setFriends((prevFriends) =>
      prevFriends.filter((friend) => friend.id !== friendId)
    );
    setFriendRequests((prevRequests) => [...prevRequests, friend]);
  }

  function addFriend(friendId) {
    const friend = friendRequests.find((f) => f.id === friendId);
    setFriendRequests((prevRequests) =>
      prevRequests.filter((friend) => friend.id !== friendId)
    );
    setFriends((prevFriends) => [...prevFriends, friend]);
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
        <div className="flex justify-between -mx-5 -mt-5">
          <div
            onClick={toggleFriendsRequest}
            className={`border-r p-2 w-full flex justify-center border-blue-purple ${
              isFrindRequest ? "border-b-2" : "border-b-0"
            }`}
          >
            <span className="font-semibold text-lg xxl:text-2xl">
              {t("friends")}
            </span>
          </div>
          <div
            onClick={toggleFriendsRequest}
            className={`border-l p-2 w-full flex justify-center border-blue-purple ${
              isFrindRequest ? "border-b-0" : "border-b-2"
            }`}
          >
            <span className="font-semibold text-lg xxl:text-2xl">
              {t("friendRequest")}
            </span>
          </div>
        </div>
        {!isFrindRequest ? (
          <div>
            {isSearchUser ? (
              <div>
                {searchUserValue === "" ? (
                  <div className="flex justify-center p-12 items-center text-xl xxl:text-3xl">
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
                        <FriendListItem
                          key={friend.id}
                          friend={friend}
                          onRemove={removeFriend}
                        />
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
                    {sortedFriends.map((friend) => (
                      <FriendListItem
                        key={friend.id}
                        friend={friend}
                        onRemove={removeFriend}
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    className="flex justify-center items-center text-blue-purple dark:text-pale-yellow
                    font-semibold text-xl xxl:text-3xl"
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
        ) : (
          <div>
            {friendRequests.length !== 0 ? (
              <div>
                {sortedFriendRequests.map((friend) => (
                  <FriendsRequestItem
                    key={friend.id}
                    friend={friend}
                    onAdd={addFriend}
                    isRequest
                  />
                ))}
              </div>
            ) : (
              <div className="flex justify-center p-12">
                <span className="text-xl xxl:text-3xl">
                  {t("noFriendRequest")}
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
