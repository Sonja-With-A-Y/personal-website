import { useTheme, useThemeUpdate } from "../ThemeContext"

import NavBar from "../NavBar";

export default function Profile() {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  return (
    <div className={theme}>
      <div className="flex justify-center align-middle bg-lmbackground dark:bg-dracbg h-screen transition-colors duration 300">
        <NavBar />
        <h1 className="text-3xl text-lmtext dark:text-dracfg">Profile</h1>
      </div>
    </div>
  )
}