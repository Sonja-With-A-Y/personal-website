import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { BsPuzzleFill } from "react-icons/bs";
import { GiWolfHowl } from "react-icons/gi";

export default function NavBar() {
  return (
    <div className="fixed top-0 right-0 w-14 h-screen pt-5 flex flex-col bg-gray-800">
      <Link to="/" className="navbar-button"><IoHomeSharp className="w-6 h-6" /></Link>
      <Link to="/profile" className="navbar-button"><IoPersonSharp className="w-6 h-6" /></Link>
      <Link to="/codebreaker" className="navbar-button"><BsPuzzleFill className="w-6 h-6" /></Link>
      <Link to="/werewolf" className="navbar-button"><GiWolfHowl className="w-6 h-6" /></Link>
    </div>
  )
}