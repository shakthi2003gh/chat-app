import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="page-not-found">
      <h1>Page Not Found</h1>

      <button onClick={handleClick}>Take me to Home</button>
    </div>
  );
};

export default PageNotFound;
