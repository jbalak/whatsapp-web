import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import MessageBox from "./messageBox";
import Profile from "../../components/profile";
import Loader from "../../components/loader";
import "./css/messageList.css";
import axios from "axios";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [nextCurser, setNextCurser] = useState("");
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const [dbData, setData] = useState({});
  const bottomDivRef = useRef();

  const location = useLocation();
  const conversationId = location.state.conversationId;
  const conversationTitle = location.state.title;
  let ctr = 0;

  const apiCall = async (nextCurser) => {
    const { data } = await axios.get(
      `https://dd-chat-0.onrender.com/api/conversations/${conversationId}/messages?nextCurser=${nextCurser}&limit=7`
    );
    setMessages(data.data.messages);
    setData(data.data);
  };

  useEffect(() => {
    try {
      apiCall(nextCurser);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  // useEffect(() => {
  //   bottomDivRef.current.scrollIntoView();
  //   // setMessages([]);
  // }, [scrollToBottom]);

  const handleScroll = (nextCurser) => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop <= 0) {
      console.log("dbData.nextCurser: ");
      console.log(nextCurser);
      setNextCurser(nextCurser);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll(dbData);
    });
  }, []);

  console.log("dbData ", dbData);
  console.log("nextCurser:- ", nextCurser);

  return (
    <div className="message-container">
      <div className="message-nav">
        <div className="profile-box">
          <Profile />
        </div>
        <div className="user-name">{conversationTitle}</div>
      </div>
      <div>
        {messages.length ? (
          messages.map((message, index) => (
            <MessageBox key={index} message={message} />
          ))
        ) : (
          <div className="message-loader">
            <Loader />
          </div>
        )}
      </div>
      <div ref={bottomDivRef} className="message-input">
        <input type="text" placeholder="add new message..." />
      </div>
    </div>
  );
};

export default MessageList;
