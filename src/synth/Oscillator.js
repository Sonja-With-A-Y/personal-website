
import { useSelectedOsc, useSelectedOscUpdate } from "./SynthContext"


export default function Oscillator() {
  const osc = useSelectedOsc()
  const oscUpdate = useSelectedOscUpdate()

  return(
      <div className="flex flex-col justify-between h-44 w-32 p-2 border border-green-600">
        <p className="text-center justify-center text-green-600">Oscillator</p>
        <div onClick={ () => oscUpdate("SINE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'SINE' ? 'bg-green-900' : 'bg-black'}`}>SINE</div>
        <div onClick={ () => oscUpdate("SQUARE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'SQUARE' ? 'bg-green-900' : 'bg-black'}`}>SQUARE</div>
        <div onClick={ () => oscUpdate("TRIANGLE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'TRIANGLE' ? 'bg-green-900' : 'bg-black'}`}>TRIANGLE</div>
        <div onClick={ () => oscUpdate("SAW") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'SAW' ? 'bg-green-900' : 'bg-black'}`}>SAW</div>
        <div onClick={ () => oscUpdate("NOISE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'NOISE' ? 'bg-green-900' : 'bg-black'}`}>NOISE</div>
      </div>
  )
}