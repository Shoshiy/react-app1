import "./App.css";
import { MessageList } from "./Components/MessageList/MessageList.jsx";
import { ChatsList } from "./Components/ChatsList/ChatsList.jsx";

function App() {
  return (
    <div className="App">
      <ChatsList />
      <MessageList />
    </div>
  );
}

export default App;
