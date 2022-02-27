import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Entry/Home';
import Login from './Entry/Login';
import SignUp from './Entry/SignUp';
import ProtectedRoute from './ProtectedRoute';
import { authentication as auth} from "../firebase.js";
import {Navigate, useNavigate} from "react-router-dom";
import Market from './Market';
import Donation from './Donation';
import {db,authentication} from "../firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export default function App() {
  const navigate = useNavigate();
  const [emailLoginError, setemailLoginError] = useState(false);
  const [passwordLoginError, setpasswordLoginError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [org, setOrg] = useState('');
  const [zipcode, setZipcode] = useState('00000');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('')
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [signUpErr, setsignUpErr] = useState(false);
  
  const onSignup = function(){
    console.log("Signed Up");
    if(name === '' || org === '' ||zipcode === '00000' ||address === '' || state === '' || role === '' || username === '' || email === '' || password === '') {
      console.log("Error!");
      setsignUpErr(true);
    }

    const auth = authentication;
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      const user = userCredential.user;
      console.log(user,typeof(role))
      await setDoc(doc(db, "Users", user.uid), {
        name: name,
        state: state,
        Organization: org,
        email:email,
        type:role,
        password:password,
        username:username,
        zip:zipcode,
        address:address
      });
      if(role === 'buyer'){
        console.log(role, 'Hi');
        navigate('/market')
      }else{
        console.log(role, 'Hello');
        navigate('/donations')
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      setsignUpErr(true);
    });
  }

  const checkAuthentication = function(){
    const user = auth.currentUser;
    return user;
  }

  const updateName = function(e){
    setName(e.target.value);
    setsignUpErr(false)
    console.log(e.target.value);
  }

  const updateState = function(e){
    setState(e.target.value);
    setsignUpErr(false);
    console.log(e.target.value);
  }

  const updateUsername = function(e){
    setUsername(e.target.value);
    setsignUpErr(false);
    console.log(e.target.value);
  }

  const updateAddress = function(e){
    setAddress(e.target.value);
    setsignUpErr(false);
    console.log(e.target.value);
  }

  const updateOrg = function(e){
    setOrg(e.target.value);
    setsignUpErr(false);
    console.log(e.target.value);
  }

  const updateZipcode = function(e){
    setZipcode(e.target.value);
    setsignUpErr(false);
    console.log(e.target.value);
  }

  const updateRole = function(e){
    setRole(e.target.value);
    setsignUpErr(false);
    console.log(e.target.value);
  }

  const updatePassword = function(e){
    setPassword(e.target.value);
    setsignUpErr(false);
    setpasswordLoginError(false);
    console.log(e.target.value)
  }

  const updateEmail = function(e){
    setemailLoginError(false);
    setsignUpErr(false);
    setEmail(e.target.value);
    console.log(e.target.value);
  }
  
  const login = async function(){
    console.log("Hello World");
    const auth = authentication;
    signInWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          if(docSnap.data().type==='buyer'){
            console.log(docSnap.data().type);
            navigate('/market');
          }
          else{
            console.log(docSnap.data().type);
            navigate('/donations');
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
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
        <Route path="/signup" element={<SignUp updateEmail={(e)=>{updateEmail(e)}} updateState={(e)=>{updateState(e)}} updateRole={(e)=>{updateRole(e)}} updateZipcode={(e)=>{updateZipcode(e)}} updatePassword={(e)=>{updatePassword(e)}} updateName={(e)=>{updateName(e)}} updateOrg={(e)=>{updateOrg(e)}} updateAddress={(e)=>{updateAddress(e)}} updateUsername={(e)=>{updateUsername(e)}} onSignup={()=>{onSignup()}} signUpErr = {signUpErr}/>}/>
        <Route path="/market" 
        element={
        <ProtectedRoute func={checkAuthentication}>
          <Market/>
        </ProtectedRoute>}/>
        <Route path="/donations" 
        element={
        <ProtectedRoute func={checkAuthentication}>
          <Donation/>
        </ProtectedRoute>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
    );
}
