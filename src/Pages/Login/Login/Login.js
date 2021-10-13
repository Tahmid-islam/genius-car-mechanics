import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/userAuth";

const Login = () => {
  const { signInUsingGoogle, setIsLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then(() => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={handleGoogleSignIn} className="btn btn-warning">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
