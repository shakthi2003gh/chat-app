import { login } from "../services/firebase";

const LogInPage = () => {
  return (
    <div className="login-Page">
      <button onClick={login}>Log in with google</button>
    </div>
  );
};

export default LogInPage;
