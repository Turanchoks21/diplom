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

function NewsView() {
  return (
    <>
      <div className="flex flex-col w-full space-y-4 lg:max-w-5xl mx-auto">
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
          <div className="text-midnight-black dark:text-white">
            Hey Brawlers, here’s the info for our next three Twitch Drops
            Campaigns!
            <br />
            <br />
            Streamers let us all know if you’ll be streaming during these Drops
            windows below.
          </div>
          <NewsPhoto src="https://pbs.twimg.com/media/GOIeyQ4WgAAePNr?format=jpg&name=large" />
          <div className="flex justify-between px-3">
            <NewsButton>
              <ChatBubbleLeftEllipsisIcon className="h-8" />
            </NewsButton>
            <NewsButton>
              <ArrowsUpDownIcon className="h-8" />
            </NewsButton>
            <NewsButton>
              <HeartIcon className="h-8" />
            </NewsButton>
          </div>
        </NewsPost>
        <NewsPost>
          <div className="flex justify-between">
            <div className="flex justify-between space-x-3">
              <GameLogo src="https://pbs.twimg.com/profile_images/1767177446518902784/6xQX33hp_400x400.png" />
              <GameName text="MultiVersus" />
            </div>
            <div className="flex flex-col items-end">
              <NewsTime time="27.05.2024" />
              <NewsTime time="04:00" />
            </div>
          </div>
          <div className="text-midnight-black dark:text-white">
            MVPs, Tuesday is the big day! Figured you all want to see a launch
            plan: - For Consoles: We’ll be in Maintenance Mode till Tuesday, May
            28 @ 4:00AM PT / 7:00AM ET / 11:00 AM UTC - For PC: We’ll be in
            Maintenance Mode till Tuesday, May 28 @ 10:00AM PT / 1:00PM ET/ 5:00
            PM UTC - At
          </div>
          <NewsPhoto src="https://pbs.twimg.com/media/GOi7H1TboAAaw3r?format=jpg&name=large" />
          <div className="flex justify-between px-3">
            <NewsButton>
              <ChatBubbleLeftEllipsisIcon className="h-8" />
            </NewsButton>
            <NewsButton>
              <ArrowsUpDownIcon className="h-8" />
            </NewsButton>
            <NewsButton>
              <HeartIcon className="h-8" />
            </NewsButton>
          </div>
        </NewsPost>
        <NewsPost>
          <div className="flex justify-between">
            <div className="flex justify-between space-x-3">
              <GameLogo src="https://pbs.twimg.com/profile_images/1707527647532552192/-415OYhP_400x400.jpg" />
              <GameName text="Skullgirls Mobile" />
            </div>
            <div className="flex flex-col items-end">
              <NewsTime time="30.05.2024" />
              <NewsTime time="03:24" />
            </div>
          </div>
          <div className="text-midnight-black dark:text-white">
            The PLUNDER PRESSURE Backstage Pass will be ending soon! How many
            rewards have you unlocked?
            <br />
            <br />
            The brand new HAUTE TOPIC Backstage Pass starts on June 1st!
          </div>
          <NewsPhoto src="https://pbs.twimg.com/media/GOyVU46XMAAk1HE?format=jpg&name=large" />
          <div className="flex justify-between px-3">
            <NewsButton>
              <ChatBubbleLeftEllipsisIcon className="h-8" />
            </NewsButton>
            <NewsButton>
              <ArrowsUpDownIcon className="h-8" />
            </NewsButton>
            <NewsButton>
              <HeartIcon className="h-8" />
            </NewsButton>
          </div>
        </NewsPost>
      </div>
    </>
  );
}

export default NewsView;
