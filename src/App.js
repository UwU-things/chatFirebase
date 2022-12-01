import React from "react";
import './global.css'
import { SignIn } from "./Components/SignIn";
import { SignOut } from "./Components/SignOut";
import { ChatRoom } from "./Components/ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./services/firebaseConfig";


export const App = () => {
  const [user] = useAuthState(auth);

  return(
    <div className="content">
        <header>
            <h1>Chat Nirayuki</h1>
            <SignOut/>
        </header>
        <section>{user ? <ChatRoom/> : <SignIn/>}</section>
    </div>
  )
}