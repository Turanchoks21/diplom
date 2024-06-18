import { useParams } from "react-router-dom";
import GameData from "../data/GameData";
import NewsData from "../data/NewsData";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ButtonOutline from "../components/buttons/ButtonOutline";
import ButtonSolid from "../components/buttons/ButtonSolid";
import NewsPost from "../components/wrapers/news/NewsPost";
import GameLogo from "../components/wrapers/news/GameLogo";
import GameName from "../components/wrapers/news/GameName";
import NewsTime from "../components/wrapers/news/NewsTime";
import NewsPhoto from "../components/wrapers/news/NewsPhoto";
import NewsButton from "../components/buttons/NewsButton";
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  FaceFrownIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/20/solid";
import { useUserParams } from "../context/UserParamsContext";

function GameProfileView() {
  const { gameName } = useParams();
  const { t } = useTranslation();
  const { userParams } = useUserParams();

  const games = GameData();
  const newsPosts = NewsData();

  const game = games.find((find) => find.name === gameName);
  const newsPost = newsPosts.filter((find) => find.gameName === gameName);
  const sortPosts = newsPost.sort((a, b) => b.id - a.id);

  const [isSubscribe, setIsSubscribe] = useState(game.preference);
  const [likes, setLikes] = useState({});

  function handleSubscribe() {
    setIsSubscribe(!isSubscribe);
  }
  function handleLikeClick(postId) {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  }

  return (
    <>
      <div className="space-y-4 w-full lg:max-w-5xl 3xl:max-w-[70rem] mx-auto">
        <div
          className="p-4 border-2 rounded-xl border-blue-purple text-midnight-black 
        dark:text-pale-yellow"
        >
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <img
                src={game.logo}
                className="rounded-full h-20 xxl:h-24 3xl:h-32"
              />
              <div className="flex flex-col space-y-2">
                <span className="text-xl xxl:text-4xl 4xl:text-5xl">
                  {game.name}
                </span>
                <div className="flex flex-wrap gap-2">
                  {game.genre.map((genre, index) => (
                    <span
                      key={index}
                      className="border-2 border-midnight-black bg-purple-400 dark:bg-gray-700 
                    dark:border-gray-700 px-2 py-1 rounded-xl text-md xxl:text-2xl 4xl:text-3xl"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              {isSubscribe ? (
                <div>
                  <MinusCircleIcon
                    onClick={handleSubscribe}
                    className="h-8 text-red-500 sm:hidden"
                  />
                  <div className="hidden sm:block">
                    <ButtonOutline onClick={handleSubscribe}>
                      {t("unsubscribe")}
                    </ButtonOutline>
                  </div>
                </div>
              ) : (
                <div>
                  <PlusCircleIcon
                    onClick={handleSubscribe}
                    className="h-8 text-green-500 sm:hidden"
                  />
                  <div className="hidden sm:block">
                    <ButtonSolid onClick={handleSubscribe}>
                      {t("subscribe")}
                    </ButtonSolid>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-col space-y-2">
              <span className="text-lg xxl:text-3xl 4xl:text-4xl">
                {t("platforms")}:
              </span>
              <div className="flex flex-wrap gap-2">
                {game.platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="border-2 border-midnight-black bg-purple-300 dark:bg-gray-700 
                    dark:border-gray-700 px-2 py-1 rounded-xl text-md xxl:text-2xl 4xl:text-3xl"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full lg:max-w-5xl 3xl:max-w-[70rem] mx-auto">
            {sortPosts.length > 0 ? (
              sortPosts.map((post) => (
                <NewsPost key={post.id}>
                  <div className="flex justify-between">
                    <div
                      to={`/main/${post.gameName}`}
                      className="flex justify-between space-x-3"
                    >
                      <GameLogo src={post.gameLogo} />
                      <GameName text={post.gameName} />
                    </div>
                    <div className="flex flex-col items-end">
                      {post.times.map((time, index) => (
                        <NewsTime key={index} time={time} />
                      ))}
                    </div>
                  </div>
                  <div className="text-midnight-black dark:text-white xxl:text-2xl">
                    {post.content}
                  </div>
                  <div className="flex justify-center">
                    <NewsPhoto src={post.photo} />
                  </div>
                  <div
                    className={`flex ${
                      userParams.lefty ? "justify-start" : "justify-end"
                    } space-x-3 my-2`}
                  >
                    <NewsButton>
                      <ChatBubbleLeftEllipsisIcon className="h-7 lg:h-8 xxl:h-12" />
                    </NewsButton>
                    <NewsButton onClick={() => handleLikeClick(post.id)}>
                      {likes[post.id] ? (
                        <HeartIconSolid className="h-7 lg:h-8 xxl:h-12 text-red-500" />
                      ) : (
                        <HeartIcon className="h-7 lg:h-8 xxl:h-12" />
                      )}
                    </NewsButton>
                  </div>
                </NewsPost>
              ))
            ) : (
              <div
                className="p-12 border-2 rounded-xl border-blue-purple text-midnight-black 
              dark:text-pale-yellow"
              >
                <div className="w-full flex justify-center">
                  <span className="flex flex-wrap gap-2 items-center">
                    {t("noNewsForGame")} <FaceFrownIcon className="h-8" />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GameProfileView;
