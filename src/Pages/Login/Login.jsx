import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in");
        navigate("/main");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <header className="showcase">
      <div className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="img" />
      </div>

      <div className="showcase-content">
        <div className="formm">
          <form>
            <h1>Log In</h1>
            <div className="info">
              <input
                className="email"
                type="email"
                placeholder="Email or phone number"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <input
              
                className="email"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="btn">
              <button className="btn-primary" type="submit" onClick={userLogin}>
                Log In
              </button>
            </div>
            <div className="help">
              <div style={{ display: "flex" }}>
                <p>New to Netflix ? </p>
                <h6
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  {" "}
                  Sign-up
                </h6>
              </div>

              <a href="#">Need Help ?</a>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Login;
