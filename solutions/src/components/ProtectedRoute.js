import React from 'react';
import { getAuth } from "firebase/auth";
import {Outlet} from 'react-router-dom';
import Home from './Home';

const auth = getAuth();
const user = auth.currentUser;
export default function ProtectedRoute(props) {
    if(user){
        return <Outlet/>
    }
    else{
        return <Home/>
    }
}
