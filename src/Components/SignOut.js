import React from "react";
import {getAuth} from "firebase/auth";
import { app } from '../services/firebaseConfig';

const auth = getAuth(app);


export const SignOut = (props) => {
   return auth.currentUser && <button className="sign-out" onClick={() => auth.signOut()}>Sair</button>
}