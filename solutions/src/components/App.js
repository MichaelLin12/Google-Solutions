import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Entry/Home';
import Login from './Entry/Login';
import SignUp from './Entry/SignUp';
import ForgetPassword from './Entry/ForgetPassword';
import ProtectedRoute from './ProtectedRoute';
import { authentication as auth} from "../firebase.js";
import {Navigate} from "react-router-dom";
import Market from './Market';
import {db,authentication} from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      emailLoginError:false,
      passwordLoginError:false,
      email:'',
      password:''
    }
  }

  /**
   * this method returns the current user and is used in
   * the protected route component to test if a user does exist
   * @returns the current user
   */
  checkAuthentication(){
    const user = auth.currentUser;
    return user;
  }

  updateEmail(e){
    this.setState({email:e.target.value, emailLoginError:false})
    console.log(e.target.value)
  }

  updatePassword(e){
    this.setState({password:e.target.value, passwordLoginError:false})
    console.log(e.target.value)
  }

  async login(){
    console.log("Hello World");
    const auth = authentication;
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        this.setState({emailLoginError:true, passwordLoginError:true});
  });
  }

  /**
   * the render method is a compulsory method in react
   * @returns what is to be rendered as html on webpage
   */
  render() {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login emailError={this.state.emailLoginError} passwordError={this.state.passwordLoginError} updateEmail={(e)=>{this.updateEmail(e)}} updatePassword={(e)=>{this.updatePassword(e)}} login={()=>{this.login()}}/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/market" 
        element={
        <ProtectedRoute func={this.checkAuthentication}>
          <Market/>
        </ProtectedRoute>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
    );
  }
}
