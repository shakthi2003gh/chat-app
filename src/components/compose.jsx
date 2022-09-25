import { useEffect, useState } from "react";
import { auth, sendMessage } from "./../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Compose = () => {
  const [uid, setUid] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUid(user.uid);
    });
  }, []);

  const handleType = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    sendMessage(uid, message);
    setMessage("");
  };

  return (
    <div className="compose-container">
      <div className="compose">
        <input type="text" onChange={handleType} value={message} />

        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
};

export default Compose;
