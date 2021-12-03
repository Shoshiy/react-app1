import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import { Profile } from "../../Pages/Profile/Profile";
import { Chats } from "../../Pages/Chats/Chats";
import { NotFound } from "../../Pages/NotFound/NotFound";


const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  CHATS: "/chats/:chatId?",
  NO_CHAT: "/no-chat",
  CHAT: "/chats",
  NOT_FOUND: "/not-found",
  
};

export const Router = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.CHAT}>Chats</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path={ROUTES.PROFILE} element={<Profile/>}/>
        <Route exact path={ROUTES.CHAT} element={<Chats/>}/>
        <Route exact path={ROUTES.HOME} element={<Home/>}/>
        <Route exact path={ROUTES.NO_CHAT} >No chat content</Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};
