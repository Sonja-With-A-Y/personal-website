import { useThemeUpdate } from "./ThemeContext"

import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { BsPuzzleFill } from "react-icons/bs";
import { HiColorSwatch } from "react-icons/hi";
import { BsToggleOn } from "react-icons/bs";
import { FaWaveSquare } from "react-icons/fa";

export default function NavBar() {
  const toggleTheme = useThemeUpdate()

  return (
    <nav className="navbar">

      <div className="flex items-center">
        <span className="navtext">Home -</span>
        <Link to="/" className="navbar-button"><IoHomeSharp className="w-6 h-6 text-lm-text dark:text-dracpurple" /></Link>
      </div>

      <div className="flex items-center">
        <span className="navtext">Profile -</span>
        <Link to="/profile" className="navbar-button"><IoPersonSharp className="w-6 h-6 text-lm-text dark:text-dracpurple" /></Link>

      </div>

      <div className="flex items-center">
        <span className="navtext">Codebreaker -</span>
        <Link to="/codebreaker" className="navbar-button"><BsPuzzleFill className="w-6 h-6 text-lm-text dark:text-dracpurple" /></Link>
      </div>

      <div className="flex items-center">
        <span className="navtext">Colour Guesser -</span>
        <Link to="/color-guesser" className="navbar-button"><HiColorSwatch className="w-6 h-6 text-lm-text dark:text-dracpurple" /></Link>
      </div>

      <div className="flex items-center">
        <span className="navtext">Synthesizer -</span>
        <Link to="/synthesizer" className="navbar-button"><FaWaveSquare className="w-6 h-6 text-lm-text dark:text-dracpurple" /></Link>
      </div>

          <BsToggleOn onClick={toggleTheme} className="mt-auto w-10 h-10 m-2 text-lmtext dark:text-dracpurple" />

    </nav>
  )
}