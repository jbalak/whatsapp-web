import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConversationList from "./pages/conversations/conversationList";
import MessageList from "./pages/messages/messageList";
import Status from "./pages/status/status";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ConversationList />} />
          <Route path="conversation" element={<MessageList />} />
          <Route path="status" element={<Status />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
