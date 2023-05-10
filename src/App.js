import ConversationList from "./pages/conversations/conversationList";
import ConversationNode from "./pages/conversations/conversationNode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessageList from "./pages/messages/messageList";

function App() {
  return (
    // <div className="App">
    //   <ConversationList />
    // </div>

    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<ConversationList />} />
          <Route path="conversation" element={<MessageList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
