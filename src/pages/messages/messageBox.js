import { useEffect, useRef } from "react";
import "./css/messageBox.css";

const MessageBox = ({ message, scrollTo }) => {
  let currentRef = useRef();

  useEffect(() => {
    scrollTo && currentRef.current.scrollIntoView({ behavior: "instant" });
  }, [message]);

  let me = "63cbba1fbed83250e51dcc59";

  let className = message?.sender == me ? "right" : "left";
  return (
    <div className="bubble-container">
      {scrollTo ? (
        <div ref={currentRef} className={`bubble bubble-${className}`}>
          {message.text}
        </div>
      ) : (
        <div className={`bubble bubble-${className}`}>{message.text}</div>
      )}
    </div>
  );
};

export default MessageBox;
