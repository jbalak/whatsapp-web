import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import MessageBox from "./messageBox";
import Profile from "../../components/profile";
import Loader from "../../components/loader";
import "./css/messageList.css";

import useDBMessages from "./useDBMessages";

const MessageList = () => {
  const [nextCurser, setNextCurser] = useState("");
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const bottomDivRef = useRef();

  const location = useLocation();
  const conversationId = location.state.conversationId;
  const conversationTitle = location.state.title;

  const { loading, messages } = useDBMessages({
    conversationId,
    nextCurser,
  });

  useEffect(() => {
    if (messages.length) {
      setScrollToBottom(true);
    }
  }, [messages]);

  useEffect(() => {
    bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
  }, [scrollToBottom]);

  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    console.log("during scroll");
    if (scrollTop <= 0) {
      messages?.[0]?._id && setNextCurser(messages[0]._id);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="message-container">
      <div className="message-nav">
        <div className="profile-box">
          <Profile />
        </div>
        <div className="user-name">{conversationTitle}</div>
      </div>
      <div className="message-list">
        {loading && (
          <div className="message-loader">
            <Loader />
          </div>
        )}

        {messages.length > 0 &&
          messages.map((message, index) => (
            <MessageBox
              key={index}
              message={message}
              scrollTo={index == 6 ? true : false}
            />
          ))}

        <div ref={bottomDivRef} className="message-input">
          <input type="text" placeholder="add new message..." />
        </div>
      </div>
    </div>
  );
};

export default MessageList;
