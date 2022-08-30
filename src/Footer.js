import { useThemeUpdate } from "./ThemeContext"
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <nav className="footer">
        <ul className="footcol">
            <li>CV</li>
            <li>GitHub</li>
            <li>LinkdIn</li>
        </ul>
        <ul className="footcol">
            <li>Email</li>
            <li>thang</li>
            <li>thing</li>
        </ul>
    </nav>
  )
}