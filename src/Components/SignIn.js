import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {getAuth} from "firebase/auth";
import { app } from '../services/firebaseConfig';

const auth = getAuth(app);

export const SignIn = (props) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return <button className="signIn" onClick={() => signInWithGoogle()}>logar com Google</button>;
} 