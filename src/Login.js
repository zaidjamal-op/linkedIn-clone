import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const dispatch = useDispatch();

  const LogintoApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayNamer,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  const register = () => {
    if (!name) {
      return alert("Please Enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilepic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilepic,
              })
            );
          });
      })
      .catch((error) => {
        console.log(error);
        //alert(error);
      });
  };
  return (
    <div className="login">
      <img
        src="https://brandlogos.net/wp-content/uploads/2017/01/linkedin-logo.png"
        alt=""
      />

      <form>
        <input
          placeholder="Full name (required if Registering)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Profile pic Url (optional)"
          type="text"
          value={profilepic}
          onChange={(e) => setProfilepic(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={LogintoApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
