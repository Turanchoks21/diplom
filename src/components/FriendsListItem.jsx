import React from "react";
import GameLogo from "./wrapers/news/GameLogo";
import GameName from "./wrapers/news/GameName";
import { UserMinusIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function FriendListItem({ friend, onRemove }) {
  return (
    <>
      <div key={friend.id}>
        <div
          className="w-full text-lg md:text-xl xxl:text-3xl
          4xl:text-4xl"
        >
          <div className="flex justify-between items-center">
            <div className="flex justify-between space-x-3">
              <GameLogo src={friend.userAvatar} />
              <div>
                <GameName text={friend.nickName} />
                {friend.status === "offline" ? (
                  <span className="text-red-500">offline</span>
                ) : (
                  <span className="text-green-500">online</span>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <UserMinusIcon
                className="h-8 xxl:h-12 text-red-500 cursor-pointer 
                transition-all ease-in-out hover:scale-110"
                onClick={() => onRemove(friend.id)}
              />
              <Link to={`/main/chats/${friend.nickName}`}>
                <ChatBubbleLeftIcon
                  className="h-8 xxl:h-12 text-midnight-black 
                  cursor-pointer dark:text-pale-yellow transition-all ease-in-out hover:scale-110"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="border my-3 border-blue-purple" />
      </div>
    </>
  );
}

export default FriendListItem;
