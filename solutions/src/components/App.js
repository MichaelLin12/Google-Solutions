import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import ProtectedRoute from './ProtectedRoute';

export default class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>The Page you are looking for does not exist</p>
            </main>
          }
        />
      </Routes>
    </div>
    );
  }
}
