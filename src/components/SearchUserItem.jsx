import GameLogo from "./wrapers/news/GameLogo";
import GameName from "./wrapers/news/GameName";
import { UserPlusIcon } from "@heroicons/react/24/outline";

function SearchUserItem({ user }) {
  return (
    <>
      <div key={user.id}>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-between space-x-3">
              <GameLogo src={user.userAvatar} />
              <div>
                <GameName text={user.nickName} />
                {user.status === "offline" ? (
                  <span className="text-red-500">offline</span>
                ) : (
                  <span className="text-green-500">online</span>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <UserPlusIcon className="h-8 xxl:h-12 text-green-500 transition-all hover:scale-110" />
            </div>
          </div>
        </div>
        <div className="border my-3 border-blue-purple" />
      </div>
    </>
  );
}

export default SearchUserItem;
