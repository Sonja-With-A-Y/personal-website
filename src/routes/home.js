import { useTheme, useThemeUpdate } from "../ThemeContext"
import NavBar from "../NavBar";

export default function Home() {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  return (
    <div className={theme}>
      <div className="flex justify-center align-middle bg-lmbackground dark:bg-dmbackground h-screen transition-colors duration 300">
        <NavBar />
        <h1 className="text-3xl text-lmtext dark:text-dmtext">Home</h1>
      </div>
    </div>
  );
  }