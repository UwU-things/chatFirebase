import React from "react";
import { auth } from "../services/firebaseConfig";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'

export const SignIn = (props) => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return(
        <button className="signIn" onClick={() => signInWithGoogle()}>Logar com Google</button>
    )
}