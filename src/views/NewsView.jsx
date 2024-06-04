import NewsPost from "../components/wrapers/news/NewsPost";
import GameName from "../components/wrapers/news/GameName";
import GameLogo from "../components/wrapers/news/GameLogo";
import NewsTime from "../components/wrapers/news/NewsTime";
import NewsPhoto from "../components/wrapers/news/NewsPhoto";
import NewsButton from "../components/buttons/NewsButton";
import {
  ArrowsUpDownIcon,
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/20/solid";
import { useState } from "react";
import NewsData from "./../data/NewsData";

function NewsView() {
  const [likes, setLikes] = useState({});
  const posts = NewsData();

  function handleLikeClick(postId) {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  }

  return (
    <>
      <div className="flex flex-col w-full lg:max-w-5xl xxl:max-w-7xl mx-auto space-y-4">
        {posts.map((post) => (
          <NewsPost key={post.id}>
            <div className="flex justify-between">
              <div className="flex justify-between space-x-3">
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
            <div className="flex justify-between">
              <NewsButton>
                <ChatBubbleLeftEllipsisIcon className="h-8 xxl:h-12" />
              </NewsButton>
              <NewsButton>
                <ArrowsUpDownIcon className="h-8 xxl:h-12" />
              </NewsButton>
              <NewsButton onClick={() => handleLikeClick(post.id)}>
                {likes[post.id] ? (
                  <HeartIconSolid className="h-8 xxl:h-12 text-red-500" />
                ) : (
                  <HeartIcon className="h-8 xxl:h-12" />
                )}
              </NewsButton>
            </div>
          </NewsPost>
        ))}
      </div>
    </>
  );
}

export default NewsView;
