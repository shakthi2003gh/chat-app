import { useEffect, useRef } from "react";

const ChatArea = () => {
  const scrollDownRef = useRef();

  useEffect(() => {
    scrollDownRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="messages"></div>

      <div ref={scrollDownRef}></div>
    </div>
  );
};

export default ChatArea;
