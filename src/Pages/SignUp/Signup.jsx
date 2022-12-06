import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
    const navigate = useNavigate()
  
    const userSignUp =(e)=>{
      e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    navigate("/login")
  })
  .catch((error) => {
   console.log(error.message);
  });
  }
    return (
    <header className="showcase">
      <div className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt='img' />
      </div>

      <div className="showcase-content">
        <div className="formm">
          <form>
            <h1>Register</h1>
            <div className="info">
              <input
                className="email"
                type="email"
                placeholder="Email or phone number"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <br />
              <input className="email" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div className="btn">
              <button className="btn-primary" type="submit" onClick={userSignUp}
                >
                Register
              </button>
            </div>
            
          </form>
        </div>
      </div>


    </header>
  )
}

export default Signup