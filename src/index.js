import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import NavBar from "./NavBar";
import Profile from "./routes/profile";
import Codebreaker from "./routes/codebreaker";
import Werewolf from "./routes/werewolf";

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="profile" element={<Profile />} />
    <Route path="codebreaker" element={<Codebreaker />} />
    <Route path="Werewolf" element={<Werewolf />} />
  </Routes>
</BrowserRouter>,
rootElement
);