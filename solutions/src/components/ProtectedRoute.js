import React from 'react';
import {Navigate} from 'react-router-dom'

export default function ProtectedRoute(props) {
    console.log("Private route in protected route")
    const res = props.func();
    return (res)? props.children:<Navigate to="/"/>
}
