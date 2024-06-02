import GameLogo from "../components/wrapers/news/GameLogo";
import GameName from "../components/wrapers/news/GameName";

function ChatsView() {
  return (
    <>
      <div className="flex flex-col w-full mx-auto border-2 border-blue-purple rounded-xl p-5 space-y-4">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-between space-x-3">
              <GameLogo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlM47TOfANauMxPrHEwVG-XD5vYzmaO6AFg&s" />
              <div>
                <GameName text="Sweety" />
                <span className="text-black dark:text-white text-sm">
                  Когда играть?
                </span>
              </div>
            </div>
            <div className="text-blue-purple">
              <div>20:21</div>
            </div>
          </div>
        </div>
        <div className="border border-blue-purple" />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-between space-x-3">
              <GameLogo src="https://i.pinimg.com/564x/ce/13/09/ce13098a1deb8b07123a1799872d5592.jpg" />
              <div>
                <GameName text="C00l_BoY" />
                <span className="text-black dark:text-white text-sm">
                  Не такой уж ты и крутой
                </span>
              </div>
            </div>
            <div className="text-blue-purple">
              <div>12:21</div>
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
                <span className="text-black dark:text-white text-sm">
                  Я по айпи тебя вычилю!
                </span>
              </div>
            </div>
            <div className="text-blue-purple">
              <div>10:04</div>
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
                <span className="text-black dark:text-white text-sm">
                  По чём биток?
                </span>
              </div>
            </div>
            <div className="text-blue-purple">
              <div>01.06 07:11</div>
            </div>
          </div>
        </div>
        <div className="border border-blue-purple" />
      </div>
    </>
  );
}

export default ChatsView;
