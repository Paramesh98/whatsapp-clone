import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../ServiceProvider";
import "./login.css";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: response.user,
        })
      )
      .catch((error) => console.log(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="/whatsapp.png" alt="whatsapp" />
        <div className="login__text">
          <h1>Login to Whatsapp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Singn in to Whatsapp
        </Button>
      </div>
    </div>
  );
}

export default Login;
