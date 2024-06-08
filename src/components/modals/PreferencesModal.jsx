import { useTranslation } from "react-i18next";
import {
  XMarkIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import GameData from "../../data/GameData";
import GameLogo from "../wrapers/news/GameLogo";
import { useState } from "react";
import VirtualScroll from "../VirtualScroll";

function PreferencesModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const games = GameData();

  const [searchGameValue, setSearchGameValue] = useState("");

  function handleChange(event) {
    setSearchGameValue(event.target.value);
  }

  const filteredGames = games.filter((game) => {
    return game.name.toLowerCase().includes(searchGameValue.toLowerCase());
  });

  const [preferences, setPreferences] = useState(
    games.reduce((acc, game) => {
      acc[game.id] = game.preference;
      return acc;
    }, {})
  );

  function handlePreference(gameId) {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [gameId]: !prevPreferences[gameId],
    }));
  }

  function clearSearchInput() {
    setSearchGameValue("");
  }

  if (!isOpen) return null;

  return (
    <div className="fixed h-screen z-30 inset-0 overflow-y-auto">
      <div
        className="flex items-center justify-center min-h-screen 
      text-midnight-black dark:text-pale-yellow font-semibold"
      >
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <div
          className="bg-lavender-mist dark:bg-midnight-black rounded-xl overflow-hidden shadow-xl
          transform transition-all max-w-2xl w-full border-2 border-blue-purple"
        >
          <div className="bg-lavender-mist dark:bg-midnight-black px-4 py-5 border-b-2 border-blue-purple sm:px-6 sm:py-4">
            <div className="flex justify-between items-center">
              <span className="text-xl xxl:text-3xl leading-6 ">
                {t("preferences")}
              </span>
              <button
                type="button"
                className=" 
                focus:outline-none focus:ring-0 focus:ring-offset-0"
                onClick={onClose}
              >
                <XMarkIcon className="h-8 xxl:h-12" />
              </button>
            </div>
          </div>
          <div className="px-5 xl:px-6 pt-4">
            <div className="flex justify-between w-full space-x-3">
              <MagnifyingGlassIcon className="h-8 xxl:h-12" />
              <input
                className="w-full focus:outline-none bg-transparent
                text-lg xxl:text-2xl border-b-2 border-midnight-black
               dark:border-pale-yellow"
                value={searchGameValue}
                onChange={handleChange}
              />
              <XMarkIcon className="h-8 xxl:h-12" onClick={clearSearchInput} />
            </div>
          </div>
          <div className="px-1 py-4 md:p-5 h-[400px]">
            <VirtualScroll
              itemCount={filteredGames.length}
              viewportHeight={400}
              rowHeight={100}
              nodePadding={1}
            >
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="flex justify-center items-center w-full border-2 rounded-xl p-2 border-blue-purple mb-4"
                >
                  <div className="flex justify-between w-full">
                    <div className="flex justify-between items-center space-x-3">
                      <GameLogo src={game.logo} />
                      <span>{game.name}</span>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        className="flex justify-center items-center"
                        onClick={() => handlePreference(game.id)}
                      >
                        {preferences[game.id] ? (
                          <MinusCircleIcon className="h-8 xxl:h-12 text-red-500" />
                        ) : (
                          <PlusCircleIcon className="h-8 xxl:h-12 text-green-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </VirtualScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreferencesModal;
