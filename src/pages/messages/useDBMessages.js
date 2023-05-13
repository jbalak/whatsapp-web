import axios from "axios";
import { useState, useEffect } from "react";
const useDBMessages = ({ nextCurser, conversationId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let url = `https://dd-chat-0.onrender.com/api/conversations/${conversationId}/messages?nextCurser=${nextCurser}&limit=7`;
    axios
      .get(url)
      .then((res) => {
        let messages = res.data.data.messages;
        messages = messages.reverse();
        setMessages((prevMsg) => [...messages, ...prevMsg]);
        setLoading(false);
      })
      .catch(console.log);
  }, [nextCurser]);

  return { messages, loading, nextCurser: messages[0]?._id };
};

export default useDBMessages;
