import { useTheme, useThemeUpdate } from "../ThemeContext"
import NavBar from "../NavBar";
import GameBoard from "../codebreaker/GameBoard";

export default function Codebreaker() {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  return (
    <div className={theme}>
      <div className="flex justify-center align-middle bg-lmbackground dark:bg-dmbackground h-screen transition-colors duration 300">
        <NavBar />
        <GameBoard />
      </div>
    </div>
  )
}