import Fader from "./Fader";
import ModIndicators from "./ModIndicators";

export default function Envelope() {
  return(
    <div className="flex flex-wrap h-2/5 w-1/2 justify-evenly items-center border border-green-600 p-1">
      <p className="w-full text-center justify-center text-green-600">Envelope</p>

        <Fader />
        <Fader />
        <Fader />
        <Fader />
        <ModIndicators />

      </div>
  )
}