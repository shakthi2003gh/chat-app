import { useState, useEffect, useRef } from "react";
import { auth } from "./../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getMessages } from "../services/firebase";

const ChatArea = () => {
  const [uid, setUid] = useState();
  const [messages, setMessages] = useState([]);
  const scrollDownRef = useRef();

  useEffect(() => {
    async function setmessage() {
      const messages = await getMessages();
      setMessages(messages);
    }

    onAuthStateChanged(auth, (user) => {
      setUid(user.uid);
    });

    setmessage();
    scrollDownRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <span
            key={index}
            className={"message " + (message.id === uid ? "send" : "received")}
          >
            {message.text}
          </span>
        ))}
      </div>

      <div ref={scrollDownRef}></div>
    </div>
  );
};

export default ChatArea;
