export default function Oscillator() {
  return(
    <div className="flex flex-col justify-between h-2/5 w-1/3 p-2 border border-green-600">
        <p className="text-center justify-center text-green-600">Oscillator</p>
        <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600">SINE</div>
        <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600">SQUARE</div>
        <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600">TRIANGLE</div>
        <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600">SAW</div>
        <div className="flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600">NOISE</div>
      </div>
  )
}