import React from "react";
import { auth } from "../services/firebaseConfig";


export const SignOut = (props) => {
   return auth.currentUser && <button className="sign-out" onClick={() => auth.signOut()}>Sair</button>
}