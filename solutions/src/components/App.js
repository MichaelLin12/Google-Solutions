import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Entry/Home';
import Login from './Entry/Login';
import SignUp from './Entry/SignUp';
import ProtectedRoute from './ProtectedRoute';
import { authentication as auth} from "../firebase.js";
import {Navigate} from "react-router-dom";
import Market from './Market';

export default class App extends Component {

  /**
   * this method returns the current user and is used in
   * the protected route component to test if a user does exist
   * @returns the current user
   */
  checkAuthentication(){
    // const user = auth.currentUser;
    // return user;
    return true;
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
        <Route path="/login" element={<Login/>}/>
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
