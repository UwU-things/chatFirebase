import React from "react";
import './global.css'
import { SignIn } from "./Components/SignIn";
import { SignOut } from "./Components/SignOut";
import { ChatRoom } from "./Components/ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from './services/firebaseConfig';
import {getAuth} from "firebase/auth";

const auth = getAuth(app);

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