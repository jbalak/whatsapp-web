import { useNavigate } from "react-router-dom";

import Profile from "../../components/profile";
import "./css/conversationNode.css";

const ConversationNode = ({ conversation }) => {
  const title = conversation.title;
  const lastMessage = conversation.lastMessage;
  const lastMessageDate = new Date(conversation.updatedAt).toDateString();
  const conversationId = conversation._id;
  const navigate = useNavigate();

  const handleConversationClick = (conversationId) => {
    navigate("/conversation", {
      state: {
        conversationId,
        title,
      },
    });
  };

  return (
    <div className="conversationNode">
      <Profile />

      <div
        className="node info"
        onClick={() => handleConversationClick(conversationId)}
      >
        <div className="title-date">
          <div className="title">{title}</div>
          <div className="date">{lastMessageDate}</div>
        </div>
        <div className="last-message">{lastMessage}</div>
      </div>
    </div>
  );
};

export default ConversationNode;
