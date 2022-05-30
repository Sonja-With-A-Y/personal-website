import Fader from "./Fader";

export default function Filter(props) {
  return(
    <div h={props.height} className="flex flex-wrap h-44 w-32 rounded-sm justify-evenly items-center border border-green-600 p-1">
      <p className="w-full text-center justify-center text-green-600">Filter</p>
        <Fader parameter="CUTOFF" faderId="0" />
        <Fader parameter="RESONANCE" faderId="1" />
      </div>
  )
}