export default function Fader(props) {
  return(
    <div className="flex justify-end content-center h-32 w-10 p-1">
      <p className="flex [writing-mode:vertical-rl] [text-orientation:upright] [letter-spacing:-0.25em] my-auto text-xs text-green-600">
        {props.parameter}
      </p>
      <div className="flex h-9/10 w-3 border border-green-600 p-1">
        <div className="flex h-3/5 w-1 mt-auto bg-green-600" />
      </div>
    </div>
  )
}