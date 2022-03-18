import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext"

import Home from "./routes/home";
import Profile from "./routes/profile";
import Codebreaker from "./routes/codebreaker";
import Werewolf from "./routes/werewolf";


export default function App() {

  return (
    <ThemeProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="codebreaker" element={<Codebreaker />} />
          <Route path="Werewolf" element={<Werewolf />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
  }