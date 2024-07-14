import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FriendsData from "../data/FriendsData";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useUserParams } from "../context/UserParamsContext";
import { useEffect, useState } from "react";

function PersonChatView() {
  const { t } = useTranslation();
  const { userNickname } = useParams();
  const friends = FriendsData();
  const messagePlaceholder = t("message");
  const { userParams } = useUserParams();

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const friend = friends.find((find) => find.nickName === userNickname);

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      return data.joke;
    } catch (error) {
      console.error("Error fetching joke:", error);
      return "Oops! Something went wrong.";
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage = {
      sender: "user",
      text: inputMessage,
      time: timestamp,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");

    const joke = await fetchJoke();
    const jokeMessage = {
      sender: "bot",
      text: joke,
      time: timestamp,
    };
    setMessages((prevMessages) => [...prevMessages, jokeMessage]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className="w-full max-w-4xl xxl:max-w-5xl border-2 rounded-xl 
        border-blue-purple bg-lavender-mist dark:bg-midnight-black transition-colors 
          ease-in-out duration-500 text-midnight-black dark:text-pale-yellow "
        >
          <div
            className="flex justify-between items-center font-semibold p-3 w-full 
            border-b-2 border-blue-purple "
          >
            <div className="flex items-center space-x-3">
              <Link to="/main/chats">
                <ArrowLeftIcon className="h-8 xxl:h-12" />
              </Link>
              <img
                src={friend.userAvatar}
                className={`h-14 xxl:h-16 rounded-full border-[3px] ${
                  friend.status === "online"
                    ? "border-green-500"
                    : "border-red-500"
                }`}
              />
              <span className="text-base xxl:text-2xl">{friend.nickName}</span>
            </div>
          </div>
          <div className="flex flex-col h-[30rem]">
            <div className="flex-1 overflow-y-auto p-4">
              {messages.length === 0 ? (
                <div className="flex h-full justify-center items-center text-midnight-black dark:text-white text-base xxl:text-2xl">
                  {t("noMassageInChat")}
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 p-2 rounded-lg max-w-3xl ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    <pre className="whitespace-pre-wrap break-words font-sans xxl:text-2xl">
                      {message.text}
                    </pre>
                    <div
                      className={`text-xs xxl:text-lg mt-1 text-end ${
                        message.sender === "user" ? "text-white" : "text-black"
                      }`}
                    >
                      {message.time}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div
              className={`flex justify-between ${
                userParams.lefty ? "flex-row-reverse" : ""
              }  items-center p-2 border-t-2 border-blue-purple`}
            >
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={messagePlaceholder}
                className="w-full resize-none focus:outline-none xxl:text-2xl focus:ring-0 bg-transparent"
              />
              <div
                className={`flex space-x-2 ${
                  userParams.lefty ? "flex-row-reverse" : ""
                }`}
              >
                <PaperClipIcon
                  className={`h-8 xxl:h-12 ${userParams.lefty ? "pr-2" : ""}`}
                />
                <PaperAirplaneIcon
                  onClick={handleSendMessage}
                  className={`h-8 xxl:h-12 ${
                    userParams.lefty ? "pr-2" : ""
                  } cursor-pointer`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonChatView;
