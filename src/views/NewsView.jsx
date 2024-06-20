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
import { useState, useEffect } from "react";
import NewsData from "./../data/NewsData";
import { useTranslation } from "react-i18next";
import ButtonSolid from "./../components/buttons/ButtonSolid";
import { Link } from "react-router-dom";
import { useUserParams } from "../context/UserParamsContext";
import { useLikedPost } from "../context/LikedPostContext";
import CommentsModal from "../components/modals/CommentsModal";

function NewsView() {
  const [likes, setLikes] = useState({});
  const { t } = useTranslation();
  const posts = NewsData();
  const { userParams } = useUserParams();
  const { selectedGames } = userParams;
  const { likedPosts, addLike, removeLike } = useLikedPost();
  const [commentsOpen, setCommentsOpen] = useState({});

  const filteredPosts = posts.filter((post) =>
    selectedGames.includes(post.gameName)
  );

  const sortPosts = filteredPosts.sort((a, b) => b.id - a.id);

  useEffect(() => {
    const initialLikes = likedPosts.reduce((acc, post) => {
      acc[post.id] = true;
      return acc;
    }, {});
    setLikes(initialLikes);
  }, [likedPosts]);

  function handleLikeClick(post) {
    setLikes((prevLikes) => {
      const isLiked = !prevLikes[post.id];
      if (isLiked) {
        addLike(post);
      } else {
        removeLike(post.id);
      }
      return {
        ...prevLikes,
        [post.id]: isLiked,
      };
    });
  }

  function handleComments(postId) {
    setCommentsOpen((prevCommentsOpen) => ({
      ...prevCommentsOpen,
      [postId]: !prevCommentsOpen[postId],
    }));
  }

  return (
    <>
      <div className="w-full lg:max-w-5xl 3xl:max-w-[70rem] mx-auto">
        {sortPosts.length !== 0 ? (
          <>
            <div className="flex flex-col space-y-4">
              {sortPosts.map((post) => (
                <div key={post.id}>
                  <NewsPost>
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
                        <ChatBubbleLeftEllipsisIcon
                          onClick={() => handleComments(post.id)}
                          className="h-7 lg:h-8 xxl:h-12"
                        />
                      </NewsButton>
                      <NewsButton onClick={() => handleLikeClick(post)}>
                        {likes[post.id] ? (
                          <HeartIconSolid className="h-7 lg:h-8 xxl:h-12 text-red-500" />
                        ) : (
                          <HeartIcon className="h-7 lg:h-8 xxl:h-12" />
                        )}
                      </NewsButton>
                    </div>
                  </NewsPost>
                  <CommentsModal
                    GameTitle={post.gameName}
                    src={post.photo}
                    conten={post.content}
                    isOpen={commentsOpen[post.id]}
                    onClose={() => handleComments(post.id)}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-midnight-black dark:text-pale-yellow font-semibold text-xl xxl:text-3xl">
            <NewsPost>
              <div className="flex justify-center items-center py-12">
                <div className="flex flex-col items-center space-y-4">
                  <span>{t("noNews")}</span>
                  <div className="border w-full border-blue-purple" />
                  <span>{t("AddedNoNews")}</span>
                  <div className="border w-full border-blue-purple" />
                  <ButtonSolid to="/main/settings">{t("addNews")}</ButtonSolid>
                </div>
              </div>
            </NewsPost>
          </div>
        )}
      </div>
    </>
  );
}

export default NewsView;
