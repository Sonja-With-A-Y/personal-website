import Fader from "./Fader";
import ModIndicators from "./ModIndicators";

export default function LFO() {
  return(
    <div className="flex flex-wrap justify-between h-2/5 w-2/5 border border-green-600 p-1">
        <p className="w-full text-center justify-center text-green-600">LFO</p>

        <div className="flex flex-col justify-center h-max w-1/3 p-1">
          <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 my-1">SINE</div>
          <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 my-1">SQUARE</div>
          <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 my-1">TRIANGLE</div>
          <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 my-1">SAW</div>
          <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 my-1">NOISE</div>       
        </div>

        <Fader />
        <Fader />
        <ModIndicators />

      </div>
  )
}