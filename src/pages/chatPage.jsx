import Header from "./../components/header";
import ChatArea from "./../components/chatArea";
import Compose from "./../components/compose";
import WithLoginValidation from "./../hoc/withLoginValidation";

const ChatApp = () => {
  return (
    <>
      <Header />
      <ChatArea />
      <Compose />
    </>
  );
};

export default WithLoginValidation(ChatApp);
