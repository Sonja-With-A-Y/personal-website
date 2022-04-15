import { StateProvider } from "./SynthContext"
import Oscillator from "./Oscillator";
import Filter from "./Filter";
import Global from "./Global";
import LFO from "./LFO";
import Envelope from "./Envelope";
import Keyboard from "./Keyboard";

export default function SynthContainer() {
  return(
    <StateProvider>
      <div className="flex flex-wrap justify-between h-120 w-140 border-2 border-green-600 bg-black p-3 mb-auto">
        <p className="text-center text-lg text-green-600 w-full">Sanga Synth</p>
        <div className="h-0 w-full border border-green-600" />

        <Oscillator />

        <Filter />

        <LFO />

        <Envelope />

        <Global />

        <Keyboard />

      </div>
    </StateProvider>
  )
}