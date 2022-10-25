import logo from './logo.svg';
import React, { useCallback, useState, useEffect } from "react";

import './App.css';
import jwt_decode from 'jwt-decode'

function App() {
  function handleCallback(response){
    console.log(response.credential);
    const user = jwt_decode(response.credential)
    console.log(user);
  }
  useEffect(()=>{
    /* global google */
    console.log("calling");
    google.accounts.id.initialize({
      client_id:"91257017872-gnbq0pbl5m0kskudaqtpb2c34kgjdo60.apps.googleusercontent.com",
      callback:handleCallback
    })
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    // google.accounts.id.prompt(); // also
  },[window.onload])
  return (
    <div className="App">
      <div id="buttonDiv" style={{marginTop:'20px'}}></div>
    </div>
  );
}

export default App;
