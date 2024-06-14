import GameLogo from "./wrapers/news/GameLogo";
import GameName from "./wrapers/news/GameName";
import { UserMinusIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const FriendListItem = ({ friend }) => {
  return (
    <>
      <div key={friend.id}>
        <div className="w-full">
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
              <UserMinusIcon className="h-8 xxl:h-12 text-red-500" />
              <Link to={`/main/chats/${friend.nickName}`}>
                <ChatBubbleLeftIcon className="h-8 xxl:h-12 text-midnight-black dark:text-pale-yellow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border my-3 border-blue-purple" />
      </div>
    </>
  );
};

export default FriendListItem;
