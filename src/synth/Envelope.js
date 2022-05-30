import Fader from "./Fader";
import ModIndicators from "./ModIndicators";

export default function Envelope() {
  return(
    <div className="flex flex-wrap h-44 w-96 rounded-sm justify-evenly items-center border border-green-600 p-1">
      <p className="w-full text-center justify-center text-green-600">Envelope</p>

        <div className="h-20 w-32 border border-green-600" />
        <Fader parameter="ATTACK" faderId="4" />
        <Fader parameter="DECAY" faderId="5" />
        <Fader parameter="SUSTAIN" faderId="6" />
        <Fader parameter="RELEASE" faderId="7" />
        <ModIndicators modPathId="1" />

      </div>
  )
}