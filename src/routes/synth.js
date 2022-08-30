import { useTheme, useThemeUpdate } from "../ThemeContext"
import NavBar from "../NavBar";
import SynthContainer from "../synth/SynthContainer"

export default function Synthesizer() {
  const theme = useTheme()
  const toggleTheme = useThemeUpdate()
  return (
    <div className={theme}>
      <div className="flex flex-wrap justify-center align-middle bg-lmbackground dark:bg-dmbackground h-screen transition-colors duration 300">
        <NavBar />
        <h1 className="text-3xl text-lmtext dark:text-dmtext text-center w-screen">JS Synthesizer</h1>
        <SynthContainer />
      </div>
    </div>
  )
}