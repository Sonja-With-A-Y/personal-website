import React from 'react';
import './App.css';
import NavBar from "./NavBar";

function App() {

  // const theme="dark"
  return (
    <div className="dark1">
      <div className="flex justify-center align-middle bg-lmbackground dark:bg-dmbackground h-screen">
        <NavBar />
        <h1 className="text-3xl text-lmtext dark:text-dmtext">Home</h1>
      </div>
    </div>
  );
  }


export default App;
