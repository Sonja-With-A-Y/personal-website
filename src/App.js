import React from 'react';
import useContext from 'react';
import './App.css';
import NavBar from "./NavBar";

function App() {

  const theme="dark"
  return (
    <div className={`${
      theme === "light" ? "theme-light" : "theme-dark"
    }`}>
      <div className="flex justify-center align-middle bg-background h-screen">
        <NavBar />
        <h1 className="text-3xl text-text">Home</h1>
      </div>
    </div>
  );
  }


export default App;
