import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Entry/Home';
import Login from './Entry/Login';
import SignUp from './Entry/SignUp';
import ForgetPassword from './Entry/ForgetPassword';
import ProtectedRoute from './ProtectedRoute';
import { authentication as auth} from "../firebase.js";
import {Navigate, useNavigate} from "react-router-dom";
import Market from './Market';
import {db,authentication} from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export default function App() {
  const navigate = useNavigate();
  const [emailLoginError, setemailLoginError] = useState(false);
  const [passwordLoginError, setpasswordLoginError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const checkAuthentication = function(){
    const user = auth.currentUser;
    return user;
  }

  const updateEmail = function(e){
    setemailLoginError(false);
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  const updatePassword = function(e){
    setPassword(e.target.value);
    setpasswordLoginError(false);
    console.log(e.target.value)
  }
  
  const login = async function(){
    console.log("Hello World");
    const auth = authentication;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate('/market');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        setemailLoginError(true);
        setpasswordLoginError(true);
    });
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login emailError={emailLoginError} passwordError={passwordLoginError} updateEmail={(e)=>{updateEmail(e)}} updatePassword={(e)=>{updatePassword(e)}} login={()=>{login()}}/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/market" 
        element={
        <ProtectedRoute func={checkAuthentication}>
          <Market/>
        </ProtectedRoute>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
    );
}
