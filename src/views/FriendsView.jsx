import GameLogo from "../components/wrapers/news/GameLogo";
import GameName from "../components/wrapers/news/GameName";
import { useTranslation } from "react-i18next";
import {
  MagnifyingGlassIcon,
  UserMinusIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import NavButton from "../components/buttons/NavButton";

function FriendsView() {
  const { t } = useTranslation();

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-center rounded-xl p-4 border-2 border-blue-purple">
          <NavButton>
            <MagnifyingGlassIcon className="h-8 xxl:h-12" />
            {t("searhFriends")}
          </NavButton>
        </div>
        <div className="flex flex-col w-full mx-auto border-2 border-blue-purple rounded-xl p-5 space-y-4">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-between space-x-3">
                <GameLogo src="https://i.pinimg.com/564x/ce/13/09/ce13098a1deb8b07123a1799872d5592.jpg" />
                <div>
                  <GameName text="C00l_BoY" />
                  <span className="text-green-500">online</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <UserMinusIcon className="h-8 xxl:h-12 text-red-500" />
                <ChatBubbleLeftIcon className="h-8 xxl:h-12 text-midnight-black dark:text-pale-yellow" />
              </div>
            </div>
          </div>
          <div className="border border-blue-purple" />
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-between space-x-3">
                <GameLogo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlM47TOfANauMxPrHEwVG-XD5vYzmaO6AFg&s" />
                <div>
                  <GameName text="Sweety" />
                  <span className="text-red-500">offline</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <UserMinusIcon className="h-8 xxl:h-12 text-red-500" />
                <ChatBubbleLeftIcon className="h-8 xxl:h-12 text-midnight-black dark:text-pale-yellow" />
              </div>
            </div>
          </div>
          <div className="border border-blue-purple" />
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-between space-x-3">
                <GameLogo src="https://image.api.playstation.com/cdn/UP4449/CUSA10926_00/ZqmCS0MLbdNgFEh76OZTjzBB3CS9MQrZ.png?w=440&thumb=false" />
                <div>
                  <GameName text="NaGiBeTeR" />
                  <span className="text-red-500">offline</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <UserMinusIcon className="h-8 xxl:h-12 text-red-500" />
                <ChatBubbleLeftIcon className="h-8 xxl:h-12 text-midnight-black dark:text-pale-yellow" />
              </div>
            </div>
          </div>
          <div className="border border-blue-purple" />
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-between space-x-3">
                <GameLogo src="https://pics.craiyon.com/2023-08-02/04c617f98f064ab6820edd70bb5819b8.webp" />
                <div>
                  <GameName text="Crypto_boy" />
                  <span className="text-green-500">online</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <UserMinusIcon className="h-8 xxl:h-12 text-red-500" />
                <ChatBubbleLeftIcon className="h-8 xxl:h-12 text-midnight-black dark:text-pale-yellow" />
              </div>
            </div>
          </div>
          <div className="border border-blue-purple" />
        </div>
      </div>
    </>
  );
}

export default FriendsView;
