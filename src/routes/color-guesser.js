import { useTheme, useThemeUpdate } from "../ThemeContext"
import NavBar from "../NavBar";
import RGBGame from "../RGBGame";

export default function ColorGuesser() {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  return (
    <div className={theme}>
      <div className="flex flex-wrap justify-center items-start bg-lmbackground dark:bg-dmbackground h-screen w-auto transition-colors duration 300">
        <NavBar />
        <h1 className="text-3xl text-lmtext dark:text-dmtext text-center w-screen">Colour Guesser</h1>
        <RGBGame />
      </div>
    </div>
  )
}