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
  const bottomDivRef = useRef();

  const location = useLocation();
  const conversationId = location.state.conversationId;
  const conversationTitle = location.state.title;
  let ctr = 0;
  useEffect(() => {
    let url = `https://dd-chat-0.onrender.com/api/conversations/${conversationId}/messages?nextCurser=${nextCurser}&limit=7`;
    axios.get(url).then((res) => {
      console.log({ ctr: ++ctr });
      let messages = res.data.data.messages;
      messages = messages.reverse();
      // setScrollToBottom(true);
      setMessages((prevMsg) => [...messages, ...prevMsg]);
      // setMessages(messages);
    });
  }, [nextCurser]);

  // useEffect(() => {
  //   bottomDivRef.current.scrollIntoView();
  //   // setMessages([]);
  // }, [scrollToBottom]);

  // const handleScroll = () => {
  //   let scrollTop = document.documentElement.scrollTop;
  //   if (scrollTop <= 0) {
  //     setNextCurser("63f5c6a1388472775c0626a2");
  //   }
  // };
  // useState(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  console.log({ myMessages: messages, nextCurser });

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
