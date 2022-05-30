import Fader from "./Fader";

export default function Global() {
  return(
    <div className="flex flex-wrap h-44 w-32 rounded-sm justify-evenly items-center border border-green-600 p-1">
        <p className="w-full text-center justify-center text-green-600">Global</p>
        <Fader parameter="VOLUME" faderId="8" />
        <Fader parameter="TEMPO" faderId="9" />
      </div>
  )
}