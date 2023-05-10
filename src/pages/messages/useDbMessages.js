// import axios from "axios";
// import { useEffect, useState } from "react";

// export default ({ nextCurser, conversationId }) => {
//   console.log({ nextCurser, conversationId });
//   let url = `https://dd-chat-0.onrender.com/api/conversations/${conversationId}/messages?limit=7`;

//   if (nextCurser.length > 0) {
//     url = `https://dd-chat-0.onrender.com/api/conversations/${conversationId}/messages?nextCurser=${nextCurser}&limit=7`;
//   }
//   const [messages, setMessages] = useState([]);
//   const [loader, setLoader] = useState(true);

//   useEffect(() => {
//     axios.get(url).then((res) => {
//       let messages = res.data.data.messages;
//       messages = messages.reverse();
//       setMessages((prevMsg) => [...prevMsg, ...messages]);
//       setLoader(false);
//     });
//   }, [nextCurser]);
//   return { loader, messages };
// };
