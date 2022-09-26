import { useEffect, useRef, useState } from "react";
import { auth, sendMessage } from "./../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Compose = () => {
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleType = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message === "") return;
    const id = user.uid;
    const name = user.displayName;
    const profileImg = user.photoURL;

    sendMessage({ id, name, profileImg }, message);
    setMessage("");
    inputRef.current.focus();
  };

  return (
    <div className="compose-container">
      <div className="compose">
        <input
          type="text"
          ref={inputRef}
          onChange={handleType}
          value={message}
        />

        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
};

export default Compose;
