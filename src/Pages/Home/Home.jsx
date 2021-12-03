import { MessageList } from "../../Components/MessageList/MessageList.jsx";
import { ChatsList } from "../../Components/ChatsList/ChatsList.jsx";
import "./Home.css"

export const Home = () => {
  return (
    <div className="home">
      <ChatsList />
      <MessageList />
    </div>
  );
};
