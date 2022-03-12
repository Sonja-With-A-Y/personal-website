import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { BsPuzzleFill } from "react-icons/bs";
import { GiWolfHowl } from "react-icons/gi";

export default function NavBar() {
  return (
    <nav className="navbar">

      <div className="flex items-center">
        <span className="navtext">Home -</span>
        <Link to="/" className="navbar-button"><IoHomeSharp className="w-6 h-6" /></Link>
      </div>

      <div className="flex items-center">
        <span className="navtext">Profile -</span>
        <Link to="/profile" className="navbar-button"><IoPersonSharp className="w-6 h-6" /></Link>

      </div>

      <div className="flex items-center">
        <span className="navtext">Codebreaker -</span>
        <Link to="/codebreaker" className="navbar-button"><BsPuzzleFill className="w-6 h-6" /></Link>
      </div>

      <div className="flex items-center">
        <span className="navtext">Werewolf -</span>
        <Link to="/werewolf" className="navbar-button"><GiWolfHowl className="w-6 h-6" /></Link>
      </div>

          <button className="mt-auto w-10 h-10 m-2 text-text">D</button>

    </nav>
  )
}