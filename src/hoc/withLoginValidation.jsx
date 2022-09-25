import { useEffect, useState } from "react";
import { auth } from "./../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import LogInPage from "./../pages/logInPage";

const WithLoginValidation = (Component) => {
  return function WithLoginValidation() {
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
    }, []);

    if (currentUser) return <Component />;

    return <LogInPage />;
  };
};

export default WithLoginValidation;
