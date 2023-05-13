import "./css/messageBox.css";
const MessageBox = ({ message, index }) => {
  let me = "63cbba1fbed83250e51dcc59";

  let className = message?.sender == me ? "right" : "left";
  return (
    <div className="bubble-container">
      {<div className={`bubble bubble-${className}`}>{message.text}</div>}
    </div>
  );
};

export default MessageBox;
