import React, { Component } from "react";
import Modal from "./components/modal";
import axios,  from 'axios';

import './App.css';

axios.get('http://127.0.0.1:8000/api/')
        .then((response) => {
            dispatch({ 
                type: act.TRAE_DATA, 
                payload: response.data
            }) 
        })
        .catch(err => console.log(err)) 

function App() {
  return (
    <div className="App">
      <head2>This is a test message</head2>
    </div>
  );
}

export default App;
