import { useParams, Navigate } from "react-router";
import { ChatsList } from "../../Components/ChatsList/ChatsList";

const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  CHATS: "/chats/:chatId?",
  CHAT: "/chats",
  NO_CHAT: "/no-chat",
  NOT_FOUND: "/not-found",
};

export const Chats = () => {
  // const {chatId} = useParams();
  // console.log(chatId)

  // if (!chatId) {
  //   return <Navigate to={ROUTES.NO_CHAT} />
  // }

  return (
    <div><ChatsList /></div>
  );
};
