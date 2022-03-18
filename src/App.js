import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./routes/home";
import Profile from "./routes/profile";
import Codebreaker from "./routes/codebreaker";
import Werewolf from "./routes/werewolf";

function App() {

  const theme="dark"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="codebreaker" element={<Codebreaker />} />
        <Route path="Werewolf" element={<Werewolf />} />
      </Routes>
    </BrowserRouter>
  );
  }


export default App;
