import { addDoc, orderBy, limit, collection, query, serverTimestamp } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useState } from "react";
import { auth, databaseApp } from "../services/firebaseConfig";


export const ChatRoom = (props) =>{

    const messagesRef = collection(databaseApp, "messages");
    const q = query(messagesRef, orderBy("createdAt"), limit(25));
    const [messages] = useCollectionData(q, { idField: "id" });
    const [formValue, setFormValue] = useState("");

    const sendMessege = async (e) => {
        e.preventDefault();

        const {photoURL, uid} = auth.currentUser;

        console.log(formValue);

        await addDoc(messagesRef, {
            text: formValue,
            uid,
            photoURL,
            createdAt: serverTimestamp(),
        });
        setFormValue('');
    }

    return(
        <>
            <main>
                {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg}/>)}
            </main>
            <form onSubmit={sendMessege}>
                <input 
                    type="text"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <button type="submit" >Enviar</button>
            </form>
        </>
    )
};


export const ChatMessage = (props) =>{
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'send' : 'received';

    return(
        <div className={`message ${messageClass}`}>
            <img src={photoURL}/>
            <p>{text}</p>
        </div>
    )
};