import { Link } from "react-router-dom";
import GameName from "../components/wrapers/news/GameName";
import SearchBar from "../components/inputs/SearchBar";
import { useTranslation } from "react-i18next";

function ChatsView() {
  const { t } = useTranslation();

  const chatWithFriend = [
    {
      userNickname: "Sweety",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlM47TOfANauMxPrHEwVG-XD5vYzmaO6AFg&s",
      lastMessage: "Когда играть?",
      time: "20:21",
      status: 'online',
    },
    {
      userNickname: "C00l_BoY",
      logo: "https://i.pinimg.com/564x/ce/13/09/ce13098a1deb8b07123a1799872d5592.jpg",
      lastMessage: "Не такой уж ты и крутой",
      time: "12:21",
      status: 'offline',
    },
    {
      userNickname: "NaGiBeTeR",
      logo: "https://image.api.playstation.com/cdn/UP4449/CUSA10926_00/ZqmCS0MLbdNgFEh76OZTjzBB3CS9MQrZ.png?w=440&thumb=false",
      lastMessage: "Я по айпи тебя вычилю!",
      time: "10:04",
      status: 'online',
    },
    {
      userNickname: "Crypto_boy",
      logo: "https://pics.craiyon.com/2023-08-02/04c617f98f064ab6820edd70bb5819b8.webp",
      lastMessage: "По чём биток?",
      time: "01.06 07:11",
      status: 'offline',
    },
  ];

  return (
    <>
      <div className="space-y-4">
        <SearchBar>{t("searchChat")}</SearchBar>
        <div className="flex flex-col w-full mx-auto border-2 border-blue-purple rounded-xl p-5 space-y-4">
          {chatWithFriend.map((friendChat) => (
            <Link
              to={`/main/chats/${friendChat.userNickname}`}
              key={friendChat.userNickname}
              className="w-full"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-between space-x-3">
                  <img
                    className={`h-14 rounded-full border-[3px] ${
                      friendChat.status == "online"
                        ? "border-green-500"
                        : "border-red-500"
                    }`}
                    src={friendChat.logo}
                  />
                  <div>
                    <GameName text={friendChat.userNickname} />
                    <span className="text-black dark:text-white text-sm">
                      {friendChat.lastMessage}
                    </span>
                  </div>
                </div>
                <div className="text-blue-purple">
                  <div>{friendChat.time}</div>
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
