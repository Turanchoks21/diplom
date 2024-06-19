import { useTranslation } from "react-i18next";
import { useUserParams } from "../context/UserParamsContext";
import { useLikedPost } from "../context/LikedPostContext";
import NewsPost from "../components/wrapers/news/NewsPost";
import GameName from "../components/wrapers/news/GameName";
import GameLogo from "../components/wrapers/news/GameLogo";
import NewsTime from "../components/wrapers/news/NewsTime";
import NewsPhoto from "../components/wrapers/news/NewsPhoto";
import NewsButton from "../components/buttons/NewsButton";
import {
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/20/solid";
import ButtonSolid from "./../components/buttons/ButtonSolid";
import { Link } from "react-router-dom";

function LikedView() {
  const { t } = useTranslation();
  const { userParams } = useUserParams();
  const { likedPosts, removeLike } = useLikedPost();

  const handleLikeClick = (postId) => {
    removeLike(postId);
  };

  return (
    <>
      <div className="flex flex-col w-full max-w-5xl 3xl:max-w-[70rem] mx-auto space-y-4">
        {likedPosts.length > 0 ? (
          likedPosts.map((post) => (
            <NewsPost key={post.id}>
              <div className="flex justify-between">
                <Link
                  to={`/main/${post.gameName}`}
                  className="flex justify-between space-x-3"
                >
                  <GameLogo src={post.gameLogo} />
                  <GameName text={post.gameName} />
                </Link>
                <div className="flex flex-col items-end">
                  {post.times.map((time, index) => (
                    <NewsTime key={index} time={time} />
                  ))}
                </div>
              </div>
              <div className="text-midnight-black dark:text-white xxl:text-2xl">
                {post.content}
              </div>
              <div className="flex justify-center my-2">
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
                  <HeartIconSolid className="h-7 lg:h-8 xxl:h-12 text-red-500" />
                </NewsButton>
              </div>
            </NewsPost>
          ))
        ) : (
          <div className="text-midnight-black dark:text-pale-yellow font-semibold text-xl xxl:text-3xl">
            <NewsPost>
              <div className="flex justify-center items-center py-12">
                <div className="flex flex-col items-center space-y-4">
                  <span>{t("noLikedPosts")}</span>
                  <ButtonSolid to="/main">{t("backToNews")}</ButtonSolid>
                </div>
              </div>
            </NewsPost>
          </div>
        )}
      </div>
    </>
  );
}

export default LikedView;
