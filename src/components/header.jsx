import { logout } from "./../services/firebase";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="title">Chat app</div>

        <button onClick={logout}>Log out</button>
      </div>
    </header>
  );
};

export default Header;
