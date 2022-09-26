import { useState, useEffect, useRef } from "react";
import { auth, messagesColRef } from "./../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot, orderBy, query } from "firebase/firestore";

const ChatArea = () => {
  const [uid, setUid] = useState();
  const [messages, setMessages] = useState([]);
  const scrollDownRef = useRef();

  useEffect(() => {
    const orderByRef = orderBy("createAt");
    const queryRef = query(messagesColRef, orderByRef);

    onAuthStateChanged(auth, (user) => {
      setUid(user.uid);
    });

    onSnapshot(queryRef, (snapshot) => {
      const messages = snapshot.docs.map((doc) => doc.data());
      setMessages(messages);
    });
  }, []);

  useEffect(() => {
    scrollDownRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => {
          const classname =
            "message-group " + (message.id === uid ? "send" : "received");

          return (
            <div key={index} className={classname}>
              <div className="profile">
                <img src={message.profileImg} alt="" />
              </div>
              <div className="name">{message.name}</div>
              <span className="message">{message.text}</span>
            </div>
          );
        })}
      </div>
      <div ref={scrollDownRef}></div>
    </div>
  );
};

export default ChatArea;
