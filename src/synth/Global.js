import Fader from "./Fader";

export default function Global() {
  return(
    <div className="flex flex-wrap h-2/5 w-1/4 justify-evenly items-center border border-green-600 p-1">
        <p className="w-full text-center justify-center text-green-600">Global</p>
        <Fader />
        <Fader />
      </div>
  )
}