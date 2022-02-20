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

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      usernameLoginError:false,
      passwordLoginError:false
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

  changeLoginUserName(){
    (this.state.usernameLoginError)? this.setState({usernameLoginError:false}):this.setState({usernameLoginError:true});
  }

  changeLoginPassword(){
    (this.state.usernameLoginError)? this.setState({passwordLoginError:false}):this.setState({passwordLoginError:true});
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
        <Route path="/login" element={<Login usernameError={this.state.usernameLoginError} passwordError={this.state.passwordLoginError} changePasswordError={()=>{this.changeLoginPassword()}} changeUsernameError={()=>{this.changeLoginUserName()}}/>}/>
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
