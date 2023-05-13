import axios from "axios";
import { useState, useEffect } from "react";
import ConversationNode from "./conversationNode";

import json from "../../json/conversations.json";

import "./css/conversationList.css";
import Loader from "../../components/loader";
const ConversationList = () => {
  let ctr = 0;
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    axios
      .get("https://dd-chat-0.onrender.com/api/conversations")
      .then((res) => {
        setConversations(res.data.data);
      });
  }, []);

  return (
    <div className="container">
      <input
        className="node-search" //
        type="search"
        src=""
        placeholder="search"
      ></input>

      {conversations.length ? (
        conversations.map((c) => (
          <ConversationNode key={c._id} conversation={c} />
        ))
      ) : (
        <div className="conversation-loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ConversationList;
