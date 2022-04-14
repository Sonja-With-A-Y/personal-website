import Oscillator from "./Oscillator";
import Filter from "./Filter";
import Global from "./Global";
import LFO from "./LFO";
import Envelope from "./Envelope";

export default function SynthContainer() {
  return(
    <div className="flex flex-wrap justify-between h-3/5 w-4/5 border-2 border-green-600 bg-black p-3 mb-auto">
      <p className="text-center text-green-600 w-full">Sanga Synth</p>
      <div className="h-0 w-full border border-green-600" />

      <Oscillator />

      <Filter />

      <Global />

      <LFO />

      <Envelope />

    </div>
  )
}