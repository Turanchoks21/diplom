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

function LikedView() {
  const [isLiked, setIsLiked] = useState(true);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <>
      <div className="flex flex-col w-full lg:max-w-5xl xxl:max-w-7xl mx-auto space-y-4">
        <NewsPost>
          <div className="flex justify-between">
            <div className="flex justify-between space-x-3">
              <GameLogo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlaQHb1dAQP5ij0lGbGZXGJoH-XlMCKG_-Q&s" />
              <GameName text="Brawlhalla" />
            </div>
            <div className="flex flex-col items-end">
              <NewsTime time="22.05.2024" />
              <NewsTime time="12:24" />
            </div>
          </div>
          <div className="text-midnight-black dark:text-white xxl:text-2xl">
            Hey Brawlers, here’s the info for our next three Twitch Drops
            Campaigns!
            <br />
            <br />
            Streamers let us all know if you’ll be streaming during these Drops
            windows below.
          </div>
          <div className="flex justify-center">
            <NewsPhoto src="https://pbs.twimg.com/media/GOIeyQ4WgAAePNr?format=jpg&name=large" />
          </div>
          <div className="flex justify-between">
            <NewsButton>
              <ChatBubbleLeftEllipsisIcon className="h-8 xxl:h-12" />
            </NewsButton>
            <NewsButton>
              <ArrowsUpDownIcon className="h-8 xxl:h-12" />
            </NewsButton>
            <NewsButton onClick={handleLikeClick}>
              {isLiked ? (
                <HeartIconSolid className="h-8 xxl:h-12 text-red-500" />
              ) : (
                <HeartIcon className="h-8 xxl:h-12" />
              )}
            </NewsButton>
          </div>
        </NewsPost>
      </div>
    </>
  );
}

export default LikedView;
